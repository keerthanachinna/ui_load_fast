const htmlParsingTime2 = window.performance.timing.domInteractive - window.performance.timing.responseStart;
console.log(`defer Time taken for HTML parsing : ${htmlParsingTime2}ms`);

// Measure JavaScript downloading time
const jsDownloadingTime2 = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domInteractive;
console.log(`defer Time taken for JavaScript downloading: ${jsDownloadingTime2}ms`);

// Measure JavaScript execution time
window.addEventListener('load', function() {
  const jsExecutionTime2 = window.performance.now() - window.performance.timing.domContentLoadedEventEnd;
  console.log(`defer Time taken for JavaScript execution: ${jsExecutionTime2}ms`);
});