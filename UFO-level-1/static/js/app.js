// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// adding the table from data to the html page
function ufoTable(ufoReport){
    //console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      //console.log(key,":", value);
      var cell = row.append("td");
      cell.text(value);
    });
};

tableData.forEach(ufoTable)

//filtering the table with the entered value

// Select the filter button
var button = d3.select("#filter-btn");

// Select the filter search form
var form = d3.select("#panel-body");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  //console.log(filteredData);
  tbody.html("");
  filteredData.forEach(ufoTable);

  if (inputValue ===  "") {
    tableData.forEach(ufoTable);
  };
};
