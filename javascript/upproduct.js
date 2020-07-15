var rIndex,
    table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        tensach = document.getElementById("tensach").value,
        introduction = document.getElementById("introduction").value,
        theloai = document.getElementById("theloai").value;

    if (tensach === "") {
        alert("First tensach Connot Be Empty");
        isEmpty = true;
    } else if (introduction === "") {
        alert("introduction Connot Be Empty");
        isEmpty = true;
    } else if (theloai === "") {
        alert("theloai Connot Be Empty");
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
            tensach = document.getElementById("tensach").value,
            introduction = document.getElementById("introduction").value,
            theloai = document.getElementById("theloai").value;

        cell1.innerHTML = tensach;
        cell2.innerHTML = introduction;
        cell3.innerHTML = theloai;
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
            document.getElementById("tensach").value = this.cells[0].innerHTML;
            document.getElementById("introduction").value = this.cells[1].innerHTML;
            document.getElementById("theloai").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var tensach = document.getElementById("tensach").value,
        introduction = document.getElementById("introduction").value,
        theloai = document.getElementById("theloai").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = tensach;
        table.rows[rIndex].cells[1].innerHTML = introduction;
        table.rows[rIndex].cells[2].innerHTML = theloai;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("tensach").value = "";
    document.getElementById("introduction").value = "";
    document.getElementById("theloai").value = "";
}