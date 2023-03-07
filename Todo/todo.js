// js file //
// console.log("1");
document.querySelector("form").addEventListener("submit", toDoList);

function toDoList() {
  event.preventDefault();
//   console.log("2");
  //item name
  var itemName = document.querySelector("#name").value;
//   console.log(itemName);
  //quantity
  // var itemQuantity = document.querySelector("#qty").value;
//   console.log(itemQuantity);
  //priority
  var itemPriority = document.querySelector("#priority").value;
//   console.log(itemPriority);
  //table row
  var tableRow = document.createElement("tr");
  //col1
  var c1 = document.createElement("td");
  c1.innerText = itemName;
  //col2
  // var c2 = document.createElement("td");
  // c2.innerText = itemQuantity;
  //col3
  var c3 = document.createElement("td");
  c3.innerText = itemPriority;
  //adding all the columns to table row
  tableRow.append(c1, c3);
  //adding table row into table body
  document.querySelector('tbody').append(tableRow)
}
