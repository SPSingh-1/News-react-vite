// reportWebVitals.jsx
const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    const webVitals = await import('web-vitals');

    webVitals.onCLS(onPerfEntry);
    webVitals.onFID(onPerfEntry);
    webVitals.onLCP(onPerfEntry);
    webVitals.onINP(onPerfEntry);
    webVitals.onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
