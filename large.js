const htmlParsingTime1 = window.performance.timing.domInteractive - window.performance.timing.responseStart;
console.log(`large Time taken for HTML parsing : ${htmlParsingTime1}ms`);

// Measure JavaScript downloading time
const jsDownloadingTime1 = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domInteractive;
console.log(`large Time taken for JavaScript downloading: ${jsDownloadingTime1}ms`);

// Measure JavaScript execution time
window.addEventListener('load', function() {
  const jsExecutionTime1 = window.performance.now() - window.performance.timing.domContentLoadedEventEnd;
  console.log(`large Time taken for JavaScript execution: ${jsExecutionTime1}ms`);
});