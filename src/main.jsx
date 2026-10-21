import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Analytics } from '@vercel/analytics/react';

import './styles/base.css';
import './styles/sections.css';
import './styles/pages.css';
import './styles/fit.css';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Analytics />
  </>
);
