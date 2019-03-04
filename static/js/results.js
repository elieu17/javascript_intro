// from data.js
import { filteredData } from './filtered.js'
newTable = filteredData

// YOUR CODE HERE!
//Get reference to table body
var tbody = d3.select("tbody");

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

newTable.forEach(function(sighting) {
    //console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value in the weather report object
        var cell = tbody.append("td");
        cell.text(value);
    });
});