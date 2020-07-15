var rIndex,
    table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        messege = document.getElementById("messege").value;

    if (name === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    } else if (email === "") {
        alert("email Connot Be Empty");
        isEmpty = true;
    } else if (messege === "") {
        alert("messge Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow() {
   
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            name = document.getElementById("name").value,
            email = document.getElementById("email").value,
            messege = document.getElementById("messege").value;

        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = messege;
        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("email").value = this.cells[1].innerHTML;
            document.getElementById("messege").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        messege = document.getElementById("messege").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = name;
        table.rows[rIndex].cells[1].innerHTML = email;
        table.rows[rIndex].cells[2].innerHTML = messege;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("messege").value = "";
}