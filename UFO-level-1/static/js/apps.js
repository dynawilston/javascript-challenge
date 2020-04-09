// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(i) {
    console.log(i);
    // Append table row `tr`
    var row = tbody.append("tr");

     // Use `Object.entries` to print each UFO Sighting value
     Object.entries(i).forEach(function([key, value]) {
        console.log(key, value);
        // Add rows for each value
        var cell = row.append("td");
        cell.text(value);
      });
    });

    // Create the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var SelectDate = d3.select("#datetime");
    var InputDate = SelectDate.property("value");
    console.log(InputDate);
    // Filter Data based on input
    var filteredData = tableData.filter(sighting => sighting.datetime === InputDate);
    console.log(filteredData);

    filteredData.forEach(function(i) {
    console.log(i);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(i).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});