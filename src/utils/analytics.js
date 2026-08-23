import { RESEARCH_PORTFOLIO_GA_ID } from '../config/analyticsConfig';

export const initGA = () => {
  if (typeof window === 'undefined') return;

  const id = RESEARCH_PORTFOLIO_GA_ID;
  if (!id) return;

  // Ensure window.dataLayer and window.gtag exist
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  // Explicitly send pageview hit for GA4
  window.gtag('config', id, {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href
  });

  console.log(`[Analytics]: Pageview hit sent to GA4 (${id})`);
};

export const trackEvent = (eventName, params = {}) => {
  console.log(`[Research Portfolio Analytics Event]: ${eventName}`, params);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};
