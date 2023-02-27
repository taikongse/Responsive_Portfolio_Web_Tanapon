// This variable will be used to track the number of visitors
let numVisitors = 0;

// This function will be called whenever a new visitor arrives at the website
function trackVisitor() {
  // Increment the number of visitors by 1
  numVisitors++;

  // Display the number of visitors on the website
  document.getElementById("visitor-count").innerHTML = numVisitors;
}
