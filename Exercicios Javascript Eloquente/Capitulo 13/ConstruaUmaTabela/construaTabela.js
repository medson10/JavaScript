var mountains = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function buildTable(data) {
   var cabec = Object.keys(data[0]);
   var tableHead = document.createElement("table");

   var tr = document.createElement("tr");

   cabec.forEach(function(field) {
     var headTh = document.createElement("th");
     headTh.textContent = String(field).toUpperCase();
     tr.appendChild(headTh);
   });
   tableHead.appendChild(tr);

  data.forEach(function(obj) {
    var rw = document.createElement("tr");
    cabec.forEach(function(field) {
      var cell = document.createElement("td");
      cell.textContent = obj[field];
      if (typeof obj[field] == "number") {
        cell.style.textAlign = "right";
      }
      rw.appendChild(cell);
    });
    tableHead.appendChild(rw);
  });
  return tableHead;
}

document.body.appendChild(buildTable(mountains));
