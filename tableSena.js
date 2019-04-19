window.onload = function () {
  for (let num = 0; num < 3; num++) {
    //get the reference
    let table = document.getElementById('container');
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // creating all cells
    for (let j = 0; j < 6; j++) {
      // creates a table row
      let row = document.createElement("tr");

      for (let i = 1; i <= 10; i++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let jstr = j.toString()
        let value = jstr+i
        let cell = document.createElement("td");
        let cellText = document.createTextNode(value);
        if (i === 10) {
          cellText = document.createTextNode((j + 1) * i);
        }
        cell.appendChild(cellText);
        row.appendChild(cell);    
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    table.appendChild(tbl);
    // sets the border attribute of tbl to 2;

    
    let mega = new MegaSena();
    mega.getRandomNumber(); 
    let numbers = mega.numbers 
    console.log(numbers);

    var start = document.getElementsByTagName("table")[num];
    var cols = start.getElementsByTagName('td');
  
    for (let i = 0; i < cols.length; i++) {
      var col = cols[i];
  
      var content = (col.innerText).toString();
  
      // If it sorted:
      if (numbers.indexOf(content) >= 0) {
        col.classList.add('green-active')
      }
    }

  }
}
