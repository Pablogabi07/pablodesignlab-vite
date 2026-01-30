export const sendEvent = (name, params = {}) => {
  if (typeof gtag !== "undefined") {
    gtag("event", name, params);
  }
};
