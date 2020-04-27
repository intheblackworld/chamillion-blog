export const isMobile = (window) =>
  window.navigator.userAgent.match(/iPhone/i) != null ||
  window.navigator.userAgent.match(/Android/i) != null

export const isTablet = (window) => window.navigator.userAgent.match(/iPad/i) != null
