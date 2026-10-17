/**
 * ─────────────────────────────────────────────────────────────
 *  JCP Lawn Service: all site content lives here.
 *  Edit text, services, areas and FAQs without touching components.
 *  Anything marked VERIFY should be confirmed with the owner before launch.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  name: 'JCP Lawn Service',
  shortName: 'JCP',
  phoneDisplay: '(916) 707-5385',
  phoneHref: 'tel:+19167075385',
  email: 'juancpantoja78@gmail.com',
  address: { street: '10448 Malaga Way', city: 'Rancho Cordova', region: 'CA', postal: '95670' },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19003.128531502334!2d-121.3373097!3d38.5922326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809add0013beb947%3A0x8c410c8216d9c76f!2sJCP%20Lawn%20Service!5e1!3m2!1sen!2sin!4v1791422667406!5m2!1sen!2sin',
  // Opens the Google Business listing (reviews, directions). Derived from the place ID in the embed.
  mapsLink: 'https://maps.google.com/?cid=10106372791664756591',
  // Facebook page, used for the "Facebook reviews" links. Same page as FACEBOOK_URL in gallery.js.
  facebookLink: 'https://www.facebook.com/profile.php?id=61563840501426',
  /**
   * Optional: paste a form endpoint (Formspree, Basin, Getform, your own API) to send quote
   * requests directly. When empty, the form opens the visitor's email app, pre-filled.
   */
  formEndpoint: '',
};

/**
 * Developer credit shown in the footer (and nowhere else on the site).
 * The descriptive words sit outside the link and the link text is the brand name only: that gives
 * search engines clear context without keyword-stuffed anchor text, which Google can discount.
 */
export const credit = {
  prefix: 'Website design & local SEO by',
  name: 'Embra Technologies',
  url: 'https://www.embratechnologies.org/',
  title: 'Embra Technologies: custom web design and local SEO for home service businesses',
};

/* ── Home ─────────────────────────────────────────────────── */

export const hero = {
  intro: ['Residential & commercial lawn care', 'Rancho Cordova & Greater Sacramento'],
  titleLines: ['Lawns kept to a', "groundskeeper's", 'standard.'],
  lede:
    'Weekly mowing, crisp edges and seasonal care for homes, HOAs and commercial properties, from a local crew that treats every lawn like a ballfield.',
  statement: ['Clean lines.', 'Every visit.'],
};

/**
 * The slogan the company stands on. Lives in its own section on the home page and in the footer.
 * verseText is a short modern-language paraphrase; verseRef is the citation.
 */
export const slogan = {
  slogan: 'Building relationships in our community.',
  intro: 'The slogan JCP Lawn Service stands on.',
  verseRef: 'Matthew 6:33',
  verseText: '"But seek first the kingdom of God and his righteousness, and all these things will be added to you."',
};

export const statement =
  "A lawn is the first thing people notice about a property. Clean edges, an even cut and healthy color tell neighbors, tenants and customers that someone is paying attention. That's the job we take on, week after week, for homes and businesses across Greater Sacramento.";

export const marqueeItems = [
  'Mowing',
  'Edging & trimming',
  'Hedge & shrub care',
  'Tree trimming',
  'Leaf clean-ups',
  'Aeration & overseeding',
  'Bed care & mulch',
  'Sprinkler checks',
  'Commercial grounds',
];

export const audiences = {
  heading: 'One crew. Two kinds of property.',
  intro:
    'Homeowners and property managers want the same thing from a lawn service: show up when promised and leave it looking sharp. We built our work around both.',
  homes: {
    id: 'homes',
    label: 'For homes',
    title: 'Your weekends back, and the sharpest lawn on the street.',
    points: [
      'Weekly or every-other-week mowing with clean edges every visit',
      'Hedges, beds and seasonal clean-ups on one simple plan',
      'Respectful crews who close the gate behind them',
      'Easy scheduling by phone or email',
    ],
    cta: 'Explore home lawn care',
    to: '/residential',
    propertyType: 'Home',
  },
  commercial: {
    id: 'commercial',
    label: 'For commercial properties',
    title: 'Grounds that greet every tenant, guest and customer well.',
    builtFor: ['Office parks', 'Retail centers', 'HOAs', 'Apartment communities', 'Industrial sites'],
    points: [
      'Recurring visit schedules planned around your hours',
      'One direct contact for questions and requests',
      'The same finish on every visit, at every entrance',
      'Seasonal clean-ups and debris removal included in your scope',
    ],
    cta: 'Explore commercial grounds care',
    to: '/commercial',
    propertyType: 'Commercial property',
  },
};

// VERIFY: confirm the owner is comfortable committing to each line of this checklist.
export const standards = [
  'Cut at the right height for the grass and the season',
  'Straight, clean edges on every walk and drive',
  'Trimmed around fences, posts, trees and utility boxes',
  'Clippings blown off walks, drives and patios',
  'Beds checked for weeds and anything out of place',
  'Gates closed and pets accounted for',
  'A final walk-around before we leave',
  'A heads-up about anything you should know, like a broken sprinkler head',
];

export const tools = [
  {
    to: '/lawn-guide#lawn-doctor',
    art: 'doctor',
    title: 'Diagnose your lawn',
    text: 'Pick the problems you can see and get the likely causes and what helps.',
    action: 'Open the lawn diagnostic',
  },
  {
    to: '/commercial#scope',
    art: 'scope',
    title: 'Draft a commercial scope',
    text: 'Choose areas, visit frequency and timing, then send the draft with your quote request.',
    action: 'Open the scope builder',
  },
  {
    to: '/service-area#zip',
    art: 'zip',
    title: 'Check your ZIP code',
    text: 'See in seconds whether your property is inside our usual service area.',
    action: 'Check a ZIP code',
  },
];

/* ── Services ─────────────────────────────────────────────── */

// VERIFY: confirm every service below is offered, and adjust wording to match.
export const services = [
  {
    id: 'mowing',
    option: 'Mowing',
    art: 'mowing',
    title: 'Lawn mowing',
    summary: 'Regular cuts at the right height for your grass, with clippings blown off every walk and drive.',
    details:
      'We mow on a set day each week or every other week and adjust cutting height through the year: a little lower in spring, higher through summer heat. Alternating mowing direction keeps the grass growing upright, and sharp blades cut it cleanly instead of tearing it.',
    includes: ['Weekly or every-other-week visits', 'Cutting height set by season', 'Clippings blown off walks and drives'],
    frequency: 'Weekly in the growing season, every other week when growth slows',
    season: 'Year-round',
    goodFor: 'Every lawn, from small front yards to large commercial turf',
    audience: 'Homes and commercial',
    faq: [
      { q: 'How short do you cut the grass?', a: 'It depends on the grass type and the season. We cut a little lower in spring and raise the height through summer heat so the lawn holds moisture.' },
      { q: 'What happens to the clippings?', a: 'Clippings are blown off walks, drives and patios. On most lawns, fine clippings left on the turf return nutrients to the soil. Ask us if you prefer them bagged.' },
    ],
  },
  {
    id: 'edging',
    option: 'Edging & trimming',
    art: 'edging',
    title: 'Edging & trimming',
    summary: 'Crisp lines along every walk, drive and bed, with trimming around fences, posts and trees.',
    details:
      "Edging is what makes a mowed lawn look finished. We cut a clean, straight line where grass meets concrete, re-define bed edges so grass stays out of planting areas, and string-trim around fences, posts, trees and anything the mower can't reach.",
    includes: ['Hard edges on concrete', 'Bed edges re-cut', 'Trimming around obstacles'],
    frequency: 'Every mowing visit',
    season: 'Year-round',
    goodFor: 'Homes with walks and drives; entrances and parking areas on commercial sites',
    audience: 'Homes and commercial',
    faq: [
      { q: 'Is edging included with mowing?', a: 'Edging and trimming are part of a complete mowing visit. Your quote spells out exactly what each visit includes.' },
      { q: 'Why does grass keep creeping into my beds?', a: 'Spreading grasses like Bermuda send runners into beds and cracks. Re-cutting bed edges regularly keeps them in check.' },
    ],
  },
  {
    id: 'hedges',
    option: 'Hedges & shrubs',
    art: 'hedges',
    title: 'Hedge & shrub care',
    summary: 'Shaped hedges and tidy shrubs that frame the property instead of crowding it.',
    details:
      'Overgrown shrubs block windows, walkways and signage. We shape hedges to clean, even lines, prune shrubs to a healthy size, and haul the trimmings away so nothing is left behind.',
    includes: ['Hedge shaping', 'Shrub pruning', 'Trimmings hauled away'],
    frequency: 'A few times a year, depending on the plants',
    season: 'Late winter, and late spring into early summer',
    goodFor: 'Front-yard hedges, privacy screens and entrance plantings',
    audience: 'Homes and commercial',
    faq: [
      { q: 'How often do hedges need trimming?', a: 'It depends on the plant and how formal you want it to look. Fast growers may need shaping every couple of months in the growing season.' },
      { q: 'Do you trim trees too?', a: 'Yes. See tree trimming for branches over roofs, fences, walks and drives.' },
    ],
  },
  {
    id: 'trees',
    option: 'Tree trimming',
    art: 'hedges',
    title: 'Tree trimming',
    summary: 'Overgrown branches cut back from roofs, fences, walks and driveways, with every cutting hauled away.',
    details:
      'Trees that hang over roofs, rub against fences or block walkways become a hazard and a mess. We trim back overgrown limbs, raise low branches over walks and drives, shape small and medium trees, and clean up and haul away everything we cut.',
    includes: ['Branches cut back from roofs and fences', 'Low limbs raised over walks and drives', 'Cuttings hauled away'],
    frequency: 'Once or twice a year, or whenever growth gets out of hand',
    season: 'Late fall through winter for most trees; light shaping in spring and summer',
    goodFor: 'Backyard and street trees, fruit trees and overgrown privacy trees',
    audience: 'Homes and commercial',
    faq: [
      { q: 'Do you remove whole trees?', a: 'Large removals and work near power lines are best handled by a certified arborist. Call us and we will tell you whether the job is one we take on.' },
      { q: 'What happens to the branches?', a: 'Cut branches and debris are cleaned up and hauled away as part of the job.' },
    ],
  },
  {
    id: 'cleanup',
    option: 'Clean-up',
    art: 'cleanup',
    title: 'Leaf & seasonal clean-ups',
    summary: 'Leaves, storm debris and overgrowth cleared so the property is ready for the next season.',
    details:
      'Leaves, storm debris and overgrowth smother grass and make a property look neglected. A clean-up clears lawns, beds and hardscape, cuts back what has grown out of place, and leaves the property ready for the season ahead.',
    includes: ['Fall leaf removal', 'Spring clean-ups', 'One-time property refreshes'],
    frequency: 'Spring and fall, or once to catch up',
    season: 'Fall leaf drop and after winter storms',
    goodFor: 'Move-ins and move-outs, rentals between tenants, neglected yards',
    audience: 'Homes and commercial',
    faq: [
      { q: 'Can I book a one-time clean-up?', a: 'Yes. A one-time clean-up is a good way to reset a property before regular maintenance starts.' },
      { q: 'Do you haul away the debris?', a: 'Yes, clean-up debris is removed. Your quote will note anything unusual, like very large piles or construction waste.' },
    ],
  },
  {
    id: 'aeration',
    option: 'Aeration',
    art: 'aeration',
    title: 'Aeration & overseeding',
    summary: 'Core aeration opens up compacted soil so water and roots go deeper. Overseeding fills in thin spots.',
    details:
      'Many Valley soils are heavy and compact easily under foot traffic and mowers. Core aeration pulls small plugs of soil so air, water and nutrients reach the roots. Overseeding right after aeration fills thin areas with new grass while the soil is open.',
    includes: ['Core aeration', 'Overseeding thin areas', 'Watering guidance afterward'],
    frequency: 'Once a year for most lawns',
    season: 'Fall for cool-season lawns like tall fescue; late spring or early summer for warm-season lawns like Bermuda',
    goodFor: 'Thin, compacted or high-traffic lawns',
    audience: 'Homes and commercial',
    faq: [
      { q: 'What are the little plugs left on the lawn?', a: 'Those are soil cores. They break down within a couple of weeks of watering and mowing.' },
      { q: 'Should I water after aeration?', a: 'Yes. Water helps the soil settle and, after overseeding, keeps new seed moist while it sprouts.' },
    ],
  },
  {
    id: 'beds',
    option: 'Beds & mulch',
    art: 'beds',
    title: 'Bed care & mulch',
    summary: 'Weeded beds and fresh mulch that hold moisture through summer and make the whole yard look finished.',
    details:
      'Planting beds frame the lawn. We hand-pull weeds, tidy and edge the beds, and refresh mulch, which holds moisture through dry summers, keeps the soil cooler and blocks new weeds.',
    includes: ['Hand weeding', 'Fresh mulch', 'Bed edging'],
    frequency: 'Monthly tidy-ups; mulch once or twice a year',
    season: 'Spring, before summer heat',
    goodFor: 'Front entrances, foundation plantings and commercial frontage',
    audience: 'Homes and commercial',
    faq: [
      { q: 'How deep should mulch be?', a: 'A layer of about 2 to 3 inches holds moisture and blocks weeds without smothering plants. Keep it pulled back from stems and trunks.' },
      { q: 'Can you add new plants?', a: 'Ask us. Small plantings can often be added to a bed refresh; larger landscape projects are quoted separately.' },
    ],
  },
  {
    id: 'irrigation',
    option: 'Sprinklers',
    art: 'irrigation',
    title: 'Sprinkler checks',
    summary: 'Heads adjusted and coverage checked so water lands on the lawn, not the sidewalk.',
    details:
      'Sprinklers drift out of adjustment: heads get knocked, clogged or buried, and water ends up on the pavement while the lawn browns. We adjust and check heads, look for coverage gaps, and help set timers for the season.',
    includes: ['Head adjustments', 'Coverage checks', 'Seasonal timer changes'],
    frequency: 'At the start of spring and as needed through summer',
    season: 'Before summer heat arrives',
    goodFor: 'Lawns with dry spots or water running onto pavement',
    audience: 'Homes and commercial',
    faq: [
      { q: 'Why are there brown spots near my sidewalk?', a: 'Strips along pavement often get less water from misaligned heads and extra heat radiating off the concrete. A coverage check usually finds the cause.' },
      { q: 'Do you install new sprinkler systems?', a: 'New systems and major repairs are quoted separately. Tell us what you need and we will let you know how we can help.' },
    ],
  },
  {
    id: 'commercial',
    option: 'Commercial program',
    art: 'site',
    title: 'Commercial grounds programs',
    summary: 'Recurring maintenance for offices, retail centers, HOAs and apartment communities, scoped to your site.',
    details:
      'A commercial grounds program bundles mowing, edging, shrub care, bed maintenance and clean-ups into one written scope with a set visit schedule. You get one point of contact and a property that looks the same on every visit.',
    includes: ['Set visit schedule', 'One point of contact', 'Scope written around your site'],
    frequency: 'Weekly, every other week or monthly, set in your scope',
    season: 'Year-round',
    goodFor: 'Office parks, retail centers, HOAs, apartment communities and industrial sites',
    audience: 'Commercial',
    faq: [
      { q: 'Can visits happen outside business hours?', a: 'Visit timing is part of the scope. Early-morning visits before customers or tenants arrive are a common request.' },
      { q: 'Can one scope cover several properties?', a: 'Yes. Tell us about each site and we will write a scope that covers them together.' },
    ],
  },
];

export const serviceOptions = services.map((s) => s.option);

/* ── Residential ──────────────────────────────────────────── */

export const residentialPlans = [
  {
    id: 'weekly',
    name: 'Weekly',
    tagline: 'For the growing season',
    text: 'Grass grows fastest from spring through early fall. Weekly visits keep it at the right height so it never looks shaggy.',
    includes: ['Mowing', 'Edging and trimming', 'Walks and drives blown clean'],
    cadence: [2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2],
    note: 'Interested in weekly service.',
  },
  {
    id: 'biweekly',
    name: 'Every other week',
    tagline: 'For slower-growing lawns',
    text: 'A good fit for smaller lawns, slower-growing grasses, or the cooler months when growth slows down.',
    includes: ['Mowing', 'Edging and trimming', 'Walks and drives blown clean'],
    cadence: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    note: 'Interested in every-other-week service.',
  },
  {
    id: 'seasonal',
    name: 'Seasonal clean-ups',
    tagline: 'Spring and fall resets',
    text: 'Leaves, debris and overgrowth cleared twice a year, with hedges shaped and beds tidied.',
    includes: ['Leaf and debris removal', 'Hedge and shrub shaping', 'Bed tidy-up'],
    cadence: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    note: 'Interested in seasonal clean-ups.',
  },
  {
    id: 'onetime',
    name: 'One-time refresh',
    tagline: 'Move-ins, move-outs and events',
    text: 'Bring an overgrown or neglected yard back in one visit, then decide whether to continue.',
    includes: ['Full mow and edge', 'Clean-up and haul-away', 'Hedges shaped'],
    cadence: null,
    note: 'Interested in a one-time refresh.',
  },
];

export const visitSteps = [
  { title: 'Walk the lawn', text: 'A quick look for hoses, toys and anything in the way.' },
  { title: 'Mow', text: 'At the right height for the grass and season, in alternating directions.' },
  { title: 'Trim', text: 'Around fences, posts, trees and beds.' },
  { title: 'Edge', text: 'Clean lines along walks and drives.' },
  { title: 'Blow clean', text: 'Clippings cleared from walks, drives and patios.' },
  { title: 'Close up', text: 'Gates closed and a final look before we leave.' },
];

export const homeFaqs = [
  { q: 'Do you mow backyards too?', a: 'Yes, as long as the mower fits through the gate. Mention narrow gates or steps when you request a quote.' },
  { q: 'What if it rains on my service day?', a: "Wet grass doesn't cut cleanly, so heavy rain can move a visit by a day or two. We will let you know." },
  { q: 'Can you work around my dog?', a: 'Please keep pets inside during the visit. Crews close gates behind them, and a quick heads-up about pets is always appreciated.' },
  { q: 'Can I pause service while I travel?', a: 'Let us know your dates ahead of time and we will work out what makes sense for your lawn while you are away.' },
];

/* ── Commercial ───────────────────────────────────────────── */

export const propertyTypes = [
  { name: 'Office parks', need: 'First impressions for clients and staff', approach: 'Visits timed around business hours, clean entrances and walkways, tidy parking-lot islands.' },
  { name: 'Retail centers', need: 'Curb appeal that brings people in', approach: 'Early-morning service before stores open, debris cleared from planters, crisp edges along storefronts.' },
  { name: 'HOAs and community associations', need: 'Common areas residents are proud of', approach: 'Consistent care for entrances, greenbelts and shared lawns, with one contact for the board or manager.' },
  { name: 'Apartment communities', need: 'Grounds that help lease units', approach: 'Leasing-office curb appeal, courtyards kept neat, quick turnarounds before inspections.' },
  { name: 'Industrial and warehouse sites', need: 'Neat, safe and easy to maintain', approach: 'Perimeter turf, weed-prone edges and landscape strips kept under control.' },
  { name: 'Medical and professional offices', need: 'Calm, clean and accessible', approach: 'Clear walkways and tidy plantings at entrances people use every day.' },
];

export const commercialBenefits = [
  { title: 'One point of contact', text: 'A direct line for questions, extra requests and scheduling.' },
  { title: 'A written scope', text: 'Every area, task and visit frequency spelled out before work starts.' },
  { title: 'A set schedule', text: 'Visits on the same day and time window, planned around your hours.' },
  { title: 'The same finish every visit', text: 'Mowing, edging and blowing done to one standard at every entrance.' },
  { title: 'Seasonal work planned in', text: 'Leaf clean-ups and shrub shaping built into the year, not added as surprises.' },
  { title: 'Room to grow', text: 'Add properties or services to your scope as your portfolio changes.' },
];

export const commercialProcess = [
  { title: 'Site walk', body: 'We walk the property with you or your manager and note every area, problem spot and priority.' },
  { title: 'Written scope and proposal', body: 'You get a clear scope covering areas, tasks, visit frequency and timing.' },
  { title: 'Start-up visit', body: 'A first visit brings the property up to standard: edges re-cut, beds cleaned up, shrubs shaped.' },
  { title: 'Ongoing maintenance', body: 'Scheduled visits, with regular check-ins so the scope keeps matching the property.' },
];

export const scopeOptions = {
  sizes: ['Under ½ acre', '½ to 2 acres', '2 to 5 acres', 'Over 5 acres', 'Not sure'],
  areas: ['Lawns and turf', 'Shrubs and hedges', 'Planting beds', 'Parking-lot islands', 'Entrances and signage', 'Leaf and debris clean-up', 'Sprinkler checks'],
  frequencies: ['Weekly', 'Every other week', 'Monthly', 'Not sure yet'],
  timings: ['Before business hours', 'During business hours', 'Weekends', 'No preference'],
};

export const commercialFaqs = [
  { q: 'Do you work with property management companies?', a: 'Yes. We can work directly with owners, boards or management companies, and send scope and scheduling details to whoever manages the site.' },
  { q: 'Can visits be scheduled before business hours?', a: 'Yes. Timing is written into your scope; early-morning service is a common request for retail and offices.' },
  { q: 'Can you take over from our current landscaper?', a: 'Yes. A site walk and a start-up visit help bring the property up to our standard quickly.' },
  { q: 'How are extra requests handled?', a: 'Tell your contact what you need. Small requests can often be handled on the next visit; larger work gets a separate quote first.' },
  { q: 'Can one agreement cover several sites?', a: 'Yes. We can write one scope that covers multiple properties, each with its own schedule.' },
];

/* ── Lawn guide ───────────────────────────────────────────── */

export const symptoms = [
  { id: 'brown', label: 'Brown or dry patches', causes: ['Sprinkler heads out of adjustment or blocked', 'Extra heat near driveways and sidewalks', 'Compacted soil that sheds water'], helps: ['A sprinkler coverage check', 'Aeration to help water soak in'], services: ['irrigation', 'aeration'] },
  { id: 'thin', label: 'Thin or bare spots', causes: ['Foot traffic and compacted soil', 'Shade from trees or buildings', 'Summer heat stress on cool-season grass'], helps: ['Fall aeration and overseeding', 'Mowing a little higher'], services: ['aeration', 'mowing'] },
  { id: 'weeds', label: 'Weeds moving in', causes: ['Thin turf leaves room for weeds', 'Mowing too short weakens the grass', 'Bare soil in beds'], helps: ['Thicker turf, mowed at the right height', 'Hand weeding and fresh mulch in beds'], services: ['mowing', 'beds'] },
  { id: 'creep', label: 'Grass growing onto walks and into beds', causes: ['Spreading grasses like Bermuda send out runners', 'Edges not re-cut regularly'], helps: ['Edging every visit', 'Re-cutting bed edges'], services: ['edging'] },
  { id: 'shaggy', label: 'Ragged, uneven look after mowing', causes: ['Dull blades tearing the grass', 'Cutting off too much at once'], helps: ['Sharp blades and a regular schedule', 'Taking no more than a third of the blade per cut'], services: ['mowing'] },
  { id: 'soggy', label: 'Puddles or soggy areas', causes: ['Overwatering or a broken sprinkler head', 'Compacted soil that drains slowly'], helps: ['A sprinkler check', 'Aeration'], services: ['irrigation', 'aeration'] },
  { id: 'leaves', label: 'Leaves and debris piling up', causes: ['Fall leaf drop', 'Winter storms'], helps: ['Seasonal clean-ups', 'Regular blowing through leaf season'], services: ['cleanup'] },
  { id: 'hedges', label: 'Overgrown hedges and shrubs', causes: ['Missed shaping seasons', 'Fast-growing plants'], helps: ['Hedge shaping', 'Shrub pruning'], services: ['hedges'] },
  { id: 'trees', label: 'Branches over the roof, fence or driveway', causes: ['Trees not trimmed in a few seasons', 'Fast growth after wet winters'], helps: ['Cutting branches back to a safe clearance', 'Raising low limbs over walks and drives'], services: ['trees'] },
];

// Typical mowing-height ranges in inches. They vary by variety and mower type.
export const grassTypes = [
  { id: 'fescue', name: 'Tall fescue', kind: 'Cool-season', range: [2, 3.5], look: 'Green through most of the year; can struggle in peak summer heat.', spread: 'Grows in clumps, so thin spots need overseeding.', tip: 'Fall is the time to aerate and overseed.' },
  { id: 'bermuda', name: 'Bermuda grass', kind: 'Warm-season', range: [0.75, 2], look: 'Thrives in heat; turns tan when dormant in winter.', spread: 'Spreads by runners, including into beds and cracks.', tip: 'Regular edging keeps runners out of beds.' },
  { id: 'bluegrass', name: 'Kentucky bluegrass blends', kind: 'Cool-season', range: [2, 3], look: 'Rich color in spring and fall; needs steady water in summer.', spread: 'Spreads slowly by underground stems.', tip: 'Often blended with fescue for durability.' },
  { id: 'zoysia', name: 'Zoysia', kind: 'Warm-season', range: [1, 2], look: 'Dense and heat-tolerant; tan during winter dormancy.', spread: 'Spreads slowly by runners.', tip: 'Slow to recover from scalping, so keep cuts gradual.' },
];

export const tips = [
  { title: 'Take a third, not more', text: 'Never cut off more than a third of the grass blade at once. It is the simplest way to avoid stress and brown tips.' },
  { title: 'Water deep, not daily', text: "Longer, less frequent watering trains roots to grow deep. Water early in the morning and follow your water provider's current watering schedule." },
  { title: 'Keep blades sharp', text: 'A dull blade tears grass and leaves ragged, brown tips. A sharp blade cuts cleanly and the lawn recovers faster.' },
  { title: 'Mow higher in summer', text: 'Taller grass shades the soil, keeps roots cooler and holds moisture through Valley heat.' },
];

export const patterns = [
  { id: 'stripes', label: 'Classic stripes', note: 'Straight passes in alternating directions. The ballpark look.' },
  { id: 'checker', label: 'Checkerboard', note: 'A second set of passes at a right angle to the first.' },
  { id: 'diagonal', label: 'Diagonal', note: 'Passes run corner to corner, which makes a small yard read wider.' },
  { id: 'diamond', label: 'Diamonds', note: 'Two diagonal passes crossing. Best on larger, open lawns.' },
];

export const process = [
  { title: 'Reach out', body: 'Call or send the quote form with your address and what you need. Homes and commercial sites both start here.' },
  { title: 'Walkthrough and quote', body: 'We look at the property, ask what matters most to you, and give you a clear written quote.' },
  { title: 'Set your schedule', body: 'Weekly, every other week or monthly, timed around your household or your business hours.' },
  { title: 'We keep it sharp', body: 'Regular visits with the same finish every time. Need something extra before an event or inspection? Just ask.' },
];

export const seasons = [
  { id: 'spring', label: 'Spring', months: 'March to May', headline: 'Green-up and a clean start', body: 'Warming soil wakes the lawn up fast. Spring is about setting a steady cutting rhythm early and cleaning up after the winter rains.', tasks: ['First cuts and a regular schedule', 'Fresh edges along walks and beds', 'Bed weeding and new mulch', 'Sprinkler start-up check'], arcPeak: 60 },
  { id: 'summer', label: 'Summer', months: 'June to August', headline: 'Protect the lawn from Valley heat', body: 'Long, dry stretches in the 90s and 100s are hard on turf. Mowing a little higher shades the soil and helps roots hold moisture.', tasks: ['Mow higher during heat waves', 'Sharp blades for clean cuts', 'Watch for dry spots and coverage gaps', 'Hedge and shrub shaping'], arcPeak: 8 },
  { id: 'fall', label: 'Fall', months: 'September to November', headline: 'The best time to rebuild', body: 'Cooler nights and warm soil make fall the season for repairing cool-season lawns like tall fescue.', tasks: ['Core aeration', 'Overseeding thin areas', 'Leaf removal', 'Fall feeding'], arcPeak: 82 },
  { id: 'winter', label: 'Winter', months: 'December to February', headline: 'Clean-ups through the rainy season', body: 'Growth slows and rain does most of the watering. Winter visits keep leaves and storm debris from smothering the grass.', tasks: ['Leaf and storm debris clean-up', 'Lighter mowing as growth slows', 'Dormant-season pruning', 'Planning for spring'], arcPeak: 128 },
];

/* ── Service area ─────────────────────────────────────────── */

// VERIFY: edit to match the towns and ZIP codes you actually cover.
export const areas = [
  { name: 'Rancho Cordova', zips: ['95670', '95742'], note: 'Home base' },
  { name: 'Gold River', zips: ['95670'] },
  { name: 'Mather', zips: ['95655'] },
  { name: 'Rosemont', zips: ['95826', '95827'] },
  { name: 'Sacramento', zips: ['95816', '95819', '95821', '95825', '95828', '95829', '95830', '95864'] },
  { name: 'Folsom', zips: ['95630'] },
  { name: 'Elk Grove', zips: ['95624', '95757', '95758'] },
  { name: 'Citrus Heights', zips: ['95610', '95621'] },
  { name: 'Carmichael', zips: ['95608'] },
  { name: 'Fair Oaks', zips: ['95628'] },
  { name: 'Orangevale', zips: ['95662'] },
  { name: 'El Dorado Hills', zips: ['95762'] },
];
export const serviceAreas = areas.map((a) => a.name);

/**
 * Real customer reviews, pulled from the JCP Lawn Service Google Business listing and Facebook page.
 * Used by the reviews carousel (home + service area pages) and the full /reviews page.
 * To add more: copy a block, paste it below, and update the fields.
 *   Google reviews:   source 'google' + rating (1–5 stars).
 *   Facebook reviews: source 'facebook' (Facebook has no star ratings, so a "Recommends" badge shows instead).
 *   job (optional):   short label for the work done, shown as a tag on the reviews page.
 */
export const reviewStats = {
  facebookRecommendPercent: 96,
};

export const reviewSources = {
  google: 'Google review',
  facebook: 'Facebook recommendation',
};

export const testimonials = [
  {
    quote:
      "We've had horrible luck with landscapers until we came across JCP. We have a large backyard that was in desperate need of help. JCP went above and beyond: cut back the massive rose bushes, cleaned up the citrus trees, mowed, blew, trimmed, zero time wasted. Prices are fair, especially considering the work they put in. I highly recommend JCP Lawn Service.",
    name: 'Theresa Gayner',
    source: 'facebook',
    job: 'Backyard overhaul',
  },
  {
    quote:
      'JCP Landscaping was great and affordable! I recently used Carlos and his crew to do some clean up at a listing that I have. He was very affordable and also suggested additional services that helped spruce up the place. I will absolutely be using JCP for my future landscaping needs.',
    name: 'Mallory Setzer Fraioli',
    source: 'google',
    rating: 5,
    job: 'Real estate listing clean-up',
  },
  {
    quote:
      'Sent info for an estimate and heard back extremely fast. They came by within 30 minutes to check out my yard, and the job was done within a couple hours that same day: yard cleaned up, dead plants removed, everything trimmed, and mulch laid in a huge area of the back yard. Fast and friendly. Good price to boot. Great experience!',
    name: 'Laurenne Davison',
    source: 'facebook',
    job: 'Yard clean-up & mulch',
  },
  {
    quote:
      'Carlos did an amazing job trimming my trees!! I had 4 very overgrown trees that were obstructing the roof and gutters. He is a very fast, efficient and thorough worker with very competitive rates. I highly recommend him to anyone!',
    name: 'Heather McManus',
    source: 'facebook',
    job: 'Tree trimming',
  },
  {
    quote: 'They did amazing!! Very quick to respond, easy to schedule, and are very fast, hard workers! Highly recommend!!',
    name: 'Colleen Gardner',
    source: 'google',
    rating: 5,
  },
  {
    quote:
      'I needed a tree cut down that was growing under my foundation and they were amazing and professional. They communicated what they were going to do, quoted a price and came exactly when they said. It is not easy finding reliable businesses, but JCP did a great job and I highly recommend them for all your landscaping needs.',
    name: 'Alexxa Goodenough',
    source: 'facebook',
    job: 'Tree removal',
  },
  {
    quote:
      'I contacted Carlos to pick up household junk. He came over within 30 minutes, gave me an estimate and was back at my house to pick up within 3 hours. I really appreciate his professionalism and his urgency to get the job done.',
    name: 'Stephanie Sheffield',
    source: 'facebook',
    job: 'Junk removal',
  },
  {
    quote:
      'I hired JCP to clean up my front and back yard after buying a house and was really pleased with the work. They did an excellent job and were affordable.',
    name: 'Daniel',
    source: 'google',
    rating: 5,
    job: 'Front & back yard clean-up',
  },
  {
    quote:
      'I needed help getting my yard cleaned up so I could maintain it myself. Carlos got back to me quickly, kept me updated about his ETA, gave a fair quote, did great work and was a very kind person. Will definitely use again.',
    name: 'Alyssa Aguilar',
    source: 'facebook',
    job: 'Yard clean-up',
  },
  {
    quote:
      'Carlos was professional, friendly and an excellent worker. He helped clean up and haul away lots of green waste from our yard for a great price, and did it quickly. We will definitely call on him for our next yard work!',
    name: 'Annette Cardoso Sousa Schimpf',
    source: 'facebook',
    job: 'Green waste hauling',
  },
  {
    quote: 'Excellent work. Appreciate that Carlos checked in during the job to confirm we were on the same page. Will be calling him again next time!',
    name: 'Melanie Rowe',
    source: 'google',
    rating: 5,
  },
  {
    quote: 'Highly recommend JCP. They show up on time and get the job done. Great company with reasonable prices.',
    name: 'Jonathan Samuel Gomez',
    source: 'facebook',
  },
  {
    quote: 'They cleaned up my yard on short notice, and were fast and professional.',
    name: 'Carolanne Hanck',
    source: 'facebook',
    job: 'Yard clean-up',
  },
  {
    quote: 'Jared came out to install a drip line in my backyard. He did a great job, was courteous, and left everything clean.',
    name: 'Summer',
    source: 'google',
    rating: 4,
    job: 'Drip line install',
  },
  {
    quote: 'JCP Lawn Service did a great job on my yard. They came out fast and did a great job! I would recommend them to anyone!!',
    name: 'Sarah Walther',
    source: 'facebook',
    job: 'Yard work',
  },
  {
    quote: 'Very professional, affordable, outstanding work. I highly recommend JCP Lawn Service.',
    name: 'Amy E. Rodriguez',
    source: 'facebook',
  },
  {
    quote: 'Everything was done perfectly. Amazing people! 100% recommended.',
    name: "Ana D'Andrea",
    source: 'facebook',
  },
].map((t) => ({ ...t, detail: reviewSources[t.source] }));

/**
 * Themes shown on the reviews page. Each count is worked out from the review text above,
 * so the numbers stay accurate as reviews are added.
 */
export const reviewThemes = [
  { label: 'Fast & responsive', match: /fast|quick|within 30 minutes|same day|short notice|on time|urgency|\beta\b/i },
  { label: 'Fair, affordable prices', match: /price|affordable|rates|fair quote/i },
  { label: 'Professional & friendly', match: /professional|friendly|kind|courteous|communicated|checked in/i },
];

/* ── Contact ──────────────────────────────────────────────── */

export const nextSteps = [
  { title: 'We reply', text: 'We get back to you to confirm the details and find a time to see the property.' },
  { title: 'We walk the property', text: 'We look at the lawn and talk through what matters most to you.' },
  { title: 'You get a written quote', text: 'A clear quote showing what each visit includes and how often we come.' },
];

export const faqs = [
  { q: 'Do you work with both homes and businesses?', a: 'Yes. We care for single-family homes as well as commercial properties like office parks, retail centers, HOAs and apartment communities.' },
  { q: 'Which areas do you serve?', a: 'We are based in Rancho Cordova and work across Greater Sacramento. Check your ZIP code on the service area page, or call and we will tell you right away.' },
  { q: 'How do quotes work?', a: 'Tell us about your property by phone or through the quote form. We walk the property, ask what matters most to you, and send a written quote.' },
  { q: 'What should I include in my request?', a: 'The property address, whether it is a home or commercial site, the services you want and how often. Anything unusual, like a locked gate or a steep slope, helps too.' },
  { q: 'How often should my lawn be mowed?', a: 'Most lawns here do best with weekly mowing in the growing season and every other week when growth slows in winter. We will recommend a schedule for your grass.' },
  { q: 'Do I need to be home during service?', a: 'No. As long as the crew can reach the lawn, with gates unlocked and pets inside, we can take care of everything while you are out.' },
  { q: 'Do you offer one-time service?', a: 'Yes. One-time clean-ups and refreshes are available, and you can decide afterward whether you want regular service.' },
  { q: 'Can I request a specific service day?', a: 'Tell us your preference when you request a quote and we will do our best to fit your schedule.' },
  { q: 'Can you set up a recurring program for a commercial site?', a: 'Yes. We write a scope around your site, agree on a visit schedule, and give you one direct contact for questions and extra requests.' },
];
