import { useEffect, useRef, useState } from 'react';
import { company, formSubmitEndpoint, serviceOptions } from '../data/content';
import { QUOTE_PRESET_EVENT, takePendingPreset } from '../lib/quote';
import RevealText from '../components/RevealText';
import ButtonLabel from '../components/ButtonLabel';
import Magnetic from '../components/Magnetic';

const PROPERTY_TYPES = ['Home', 'Commercial property'];
const EMPTY = { name: '', phone: '', email: '', address: '', message: '', propertyType: 'Home', services: [] };
const SEND_TIMEOUT_MS = 15000;

/**
 * Shapes the form data for FormSubmit. Plain keys become the row labels in the email table;
 * underscore keys are FormSubmit settings (subject, layout, reply-to, captcha, honeypot).
 */
function buildPayload(data, honey) {
  const email = data.email.trim();
  return {
    Name: data.name.trim(),
    Phone: data.phone.trim() || 'Not provided',
    email: email || 'Not provided',
    'Property type': data.propertyType,
    'Property address': data.address.trim() || 'Not provided',
    Services: data.services.length ? data.services.join(', ') : 'Not sure yet',
    Message: data.message.trim() || '(none)',
    'Sent from': window.location.href,
    _subject: `New quote request: ${data.propertyType} (${data.name.trim()})`,
    _template: 'table',
    _captcha: 'false',
    ...(email ? { _replyto: email } : {}),
    _honey: honey,
  };
}

async function sendToFormSubmit(payload) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), SEND_TIMEOUT_MS);
  try {
    const res = await fetch(formSubmitEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    const json = await res.json().catch(() => ({}));
    // FormSubmit answers { success: "true" | "false", message }.
    if (!res.ok || String(json.success) !== 'true') {
      if (/activat/i.test(json.message || '')) {
        console.warn(`[JCP] FormSubmit needs activation: check ${company.formInbox} for the "Activate Form" email.`);
      }
      throw new Error(json.message || `HTTP ${res.status}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

function applyPreset(d, preset) {
  if (!preset) return d;
  const { propertyType, service, note } = preset;
  const next = { ...d };
  if (propertyType) next.propertyType = propertyType;
  const wanted = [...(service ? [service] : []), ...(preset.services || [])];
  wanted.forEach((sv) => {
    if (serviceOptions.includes(sv) && !next.services.includes(sv)) next.services = [...next.services, sv];
  });
  if (note && !next.message.includes(note)) next.message = next.message ? `${next.message}\n${note}` : note;
  return next;
}

export default function Contact({ asPage = false }) {
  const [data, setData] = useState(() => applyPreset(EMPTY, takePendingPreset()));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [honey, setHoney] = useState(''); // spam trap: hidden from people, bots fill it in
  const formRef = useRef(null);

  // Audience and service buttons elsewhere on the page pre-fill the form.
  useEffect(() => {
    const onPreset = (e) => {
      setData((d) => applyPreset(d, e.detail));
      setStatus('idle');
    };
    window.addEventListener(QUOTE_PRESET_EVENT, onPreset);
    return () => window.removeEventListener(QUOTE_PRESET_EVENT, onPreset);
  }, []);

  const set = (field) => (e) => {
    setData((d) => ({ ...d, [field]: e.target.value }));
    if (errors[field] || errors.contact) setErrors((er) => ({ ...er, [field]: undefined, contact: undefined }));
  };

  const toggleService = (s) =>
    setData((d) => ({ ...d, services: d.services.includes(s) ? d.services.filter((x) => x !== s) : [...d.services, s] }));

  const validate = () => {
    const er = {};
    if (!data.name.trim()) er.name = 'Add your name so we know who to ask for.';
    if (!data.phone.trim() && !data.email.trim()) er.contact = 'Add a phone number or an email so we can reach you.';
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      er.email = 'Check the email address. It should look like name@example.com.';
    if (data.phone.trim() && data.phone.replace(/\D/g, '').length < 10)
      er.phone = 'Check the phone number. It needs at least 10 digits.';
    return er;
  };

  const submit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      const firstKey = er.name ? 'name' : er.phone || er.contact ? 'phone' : 'email';
      const el = formRef.current && formRef.current.querySelector(`[name="${firstKey}"]`);
      el && el.focus();
      return;
    }

    if (status === 'sending') return;
    setStatus('sending');
    try {
      await sendToFormSubmit(buildPayload(data, honey));
      setStatus('sent');
      setData(EMPTY);
    } catch {
      setStatus('error'); // keep what they typed so they can retry or call
    }
  };

  const fieldError = (key) =>
    errors[key] ? (
      <span className="field__error" id={`${key}-error`}>
        {errors[key]}
      </span>
    ) : null;

  return (
    <section className={`contact section ${asPage ? 'contact--page' : ''}`} id="quote" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <RevealText as={asPage ? 'h1' : 'h2'} className="section-title section-title--light" id="contact-title" delay={asPage ? 0.35 : 0}>
            Let's get your property looking its best.
          </RevealText>
          <p className="section-intro section-intro--light">
            Tell us a little about the property and we will get back to you to set up a walkthrough and quote.
          </p>

          <dl className="contact__list">
            <div>
              <dt>Call</dt>
              <dd>
                <a href={company.phoneHref} className="contact__big" data-cursor="Call">
                  {company.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`} className="contact__mail">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Visit</dt>
              <dd>
                <address>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.region} {company.address.postal}
                </address>
              </dd>
            </div>
          </dl>
        </div>

        <form
          className="quote"
          ref={formRef}
          onSubmit={submit}
          action={formSubmitEndpoint.replace('/ajax/', '/')}
          method="POST"
          noValidate
          aria-describedby="quote-note"
        >
          {/* Honeypot: off-screen and skipped by keyboard and screen readers. FormSubmit drops any request where it is filled. */}
          <div className="quote__hp" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
            </label>
          </div>
          <fieldset className="quote__type">
            <legend>Property type</legend>
            <div className="seg">
              {PROPERTY_TYPES.map((t) => (
                <label key={t} className={`seg__opt ${data.propertyType === t ? 'is-on' : ''}`}>
                  <input
                    type="radio"
                    name="propertyType"
                    value={t}
                    checked={data.propertyType === t}
                    onChange={() => setData((d) => ({ ...d, propertyType: t }))}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="quote__row">
            <label className="field">
              <span className="field__label">Name</span>
              <input
                name="name"
                autoComplete="name"
                value={data.name}
                onChange={set('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {fieldError('name')}
            </label>
            <label className="field">
              <span className="field__label">Phone</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                value={data.phone}
                onChange={set('phone')}
                aria-invalid={!!(errors.phone || errors.contact)}
                aria-describedby={errors.phone ? 'phone-error' : errors.contact ? 'contact-error' : undefined}
              />
              {fieldError('phone')}
            </label>
          </div>

          <label className="field">
            <span className="field__label">Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={set('email')}
              aria-invalid={!!(errors.email || errors.contact)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {fieldError('email')}
          </label>
          {fieldError('contact')}

          <label className="field">
            <span className="field__label">Property address</span>
            <input name="address" autoComplete="street-address" value={data.address} onChange={set('address')} />
          </label>

          <fieldset className="quote__services">
            <legend>What do you need? Pick any that apply.</legend>
            <div className="chips">
              {serviceOptions.map((s) => (
                <label key={s} className={`chip ${data.services.includes(s) ? 'is-on' : ''}`}>
                  <input type="checkbox" checked={data.services.includes(s)} onChange={() => toggleService(s)} />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span className="field__label">Anything we should know?</span>
            <textarea
              name="message"
              rows="4"
              value={data.message}
              onChange={set('message')}
              placeholder="Lawn size, gate codes, best time to reach you, how often you'd like service…"
            />
          </label>

          <div className="quote__submit">
            <Magnetic strength={0.2}>
              <button type="submit" className="btn btn--gold btn--lg" disabled={status === 'sending'}>
                <ButtonLabel>{status === 'sending' ? 'Sending…' : 'Send quote request'}</ButtonLabel>
              </button>
            </Magnetic>
            <p className="quote__note" id="quote-note">
              Prefer to talk? Call {company.phoneDisplay}.
            </p>
          </div>

          <div className="quote__status" role="status" aria-live="polite">
            {status === 'sent' && (
              <p className="ok">Thanks! Your request is on its way. We will get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="bad">
                The request did not go through. Call {company.phoneDisplay} or email{' '}
                <a href={`mailto:${company.email}`}>{company.email}</a> and we will take it from there.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
