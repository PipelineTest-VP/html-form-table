let myForm = document.getElementById("myForm");

function addRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var colCount = table.rows[0].cells.length;
    for(var i=0; i<colCount; i++) {
        var newcell	= row.insertCell(i);
        switch(i) {
            case 0:
                let firstName = document.getElementById("firstName").value;
                newcell.innerHTML = firstName;
                break;
            case 1:
                let lastName = document.getElementById("lastName").value;
                newcell.innerHTML = lastName;
                break;
            case 2:
                let age = document.getElementById("age").value;
                newcell.innerHTML = age;
                break;
            default:
                break;
        }
        
    }
}

if(myForm) {
    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addRow("dataTable");
    });
}
