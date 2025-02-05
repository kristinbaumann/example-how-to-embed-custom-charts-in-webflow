console.log("Hello, World!");

const svg = d3
  .select("#chart-container")
  .append("svg")
  .attr("viewBox", "0 0 200 200")
  .style("border", "1px solid black")
  .style("background-color", "lightgrey");
