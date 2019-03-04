// from data.js
var tableData = data;

// YOUR CODE HERE!
//Get reference to table body
var tbody = d3.select("tbody").attr('id','tbody');


//test with console.log for tableData
//console.log(tableData);

//Step 1: Loop Through `dataTable` and console.log each UFO sighting object
// tableData.forEach(function(sighting) {
//     console.log(sighting)
// });

//Step 2:  Use d3 to append one table row `tr` for each weather report object
//Step 3:  Use `Object.entries` to console.log each weather report value
// tableData.forEach(function(sighting) {
//     console.log(sighting);
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(function([key, value]) {
//         console.log(key, value);
//     });
// });
//Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
//Step 5: Use d3 to update each cell's text with
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

tableData.forEach(function(sighting) {
    //console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value in the weather report object
        var cell = tbody.append("td");
        cell.text(value);
    });
});


function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

//Select the submit button
var submit = d3.select("#filter-btn");
var filtered = [];

submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var inputcity= d3.select("#City");
    var inputValue_city = inputcity.property("value");

    var inputstate= d3.select("#State");
    var inputValue_state = inputstate.property("value");

    // var inputValue_country= document.getElementById("cntry").value;
  
    // var inputshape= d3.select("#shp");
    // var inputValue_shape = inputshape.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(function(entry) {
      if (inputValue ==="" && inputValue_state ===""){
        return entry.city === inputValue_city;
      } else if (inputValue ==="" && inputValue_city ===""){
        return entry.state === inputValue_state;
      } else {//if (inputValue_state ==="" && inputValue_city ===""){
        return entry.datetime === inputValue;
      // } else if (inputValue ==="" && inputValue_state ==="" && inputValue_city === ""){
      //   return entry.country === inputValue_country;
      // } else if (inputValue ==="" && inputValue_state ==="" && inputValue_city === "" && inputValue_country ==="" ){
      //   return entry.shape === inputValue_shape
      }
    });
    console.log(filteredData)

    clearBox("tbody");

    filteredData.forEach(function(sighting) {
      //console.log(sighting);
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(function([key, value]) {
          //console.log(key, value);
          // Append a cell to the row for each value in the weather report object
          var cell = tbody.append("td");
          cell.text(value);
      });
    });
    
});
