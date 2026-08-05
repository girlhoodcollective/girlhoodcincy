export function trackPageView(path, title) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

// Google Ads conversion — newsletter/Village sign-up, fired from every
// entry point that calls subscribeToNewsletter() (Village page, Community
// page, and the footer widget).
export function trackSignupConversion() {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: 'AW-17807273852/eDWlCKDxzcwcEPzelatC' });
}

// Google Ads conversion — lead form submission, fired from every form that
// goes through submitNetlifyForm() (consulting contact, consultation
// intake, event RSVP, worth quiz).
export function trackLeadFormConversion() {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: 'AW-17807273852/tF2rCJ3xzcwcEPzelatC' });
}
