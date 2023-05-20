function insert_Row() {
    //Write your code here
  var tableRow = document.getElementById("sampleTable");
var row = tableRow.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

 cell1.innerHTML = "New Cell1";
 cell2.innerHTML = "New Cell2";

  
}
