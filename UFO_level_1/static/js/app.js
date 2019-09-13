// from data.js
var tableData = data;


//reference the table body  
var tbody = d3.select("tbody")


//append data to the table
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

//display the table data
displayData(tableData)


//select the user input and filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")


// filter data with user input date
function clickSelect(){

    //stop refresh on the page
    d3.event.preventDefault();

    //filter table showing the filterd data
    var filter_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))

    //display of the filter table
    displayData(filter_table);
}

//event listener for change
dateInputText.on("change", clickSelect)
