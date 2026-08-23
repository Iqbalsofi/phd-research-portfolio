// Web Analytics Helper for Research Portfolio

// Insert your Google Analytics 4 Measurement ID here (e.g. 'G-XXXXXXXXXX')
export const GA_MEASUREMENT_ID = 'G-MEASUREMENT_ID';

export const initGA = () => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-MEASUREMENT_ID') return;
  
  // Inject Google Analytics script dynamically
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: true
  });
};

export const trackEvent = (eventName, params = {}) => {
  console.log(`[Analytics Event]: ${eventName}`, params);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};
