import { RESEARCH_PORTFOLIO_GA_ID } from '../config/analyticsConfig';

export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  const id = RESEARCH_PORTFOLIO_GA_ID;
  if (!id || id === 'G-RESEARCH_PORTFOLIO_ID') {
    console.log('[Analytics]: Dedicated Research GA4 ID is not set yet in src/config/analyticsConfig.js');
    return;
  }
  
  // Inject Google Analytics script dynamically
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id, {
    send_page_view: true
  });
  console.log(`[Analytics]: Google Analytics initialized for Research Portfolio with ID ${id}`);
};

export const trackEvent = (eventName, params = {}) => {
  console.log(`[Research Portfolio Analytics Event]: ${eventName}`, params);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};
