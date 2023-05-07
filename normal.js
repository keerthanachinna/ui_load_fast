const htmlParsingTime = window.performance.timing.domInteractive - window.performance.timing.responseStart;
console.log(`normal Time taken for HTML parsing : ${htmlParsingTime}ms`);

// Measure JavaScript downloading time
const jsDownloadingTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domInteractive;
console.log(`normal Time taken for JavaScript downloading: ${jsDownloadingTime}ms`);

// Measure JavaScript execution time
window.addEventListener('load', function() {
  const jsExecutionTime = window.performance.now() - window.performance.timing.domContentLoadedEventEnd;
  console.log(`normal Time taken for JavaScript execution: ${jsExecutionTime}ms`);
});