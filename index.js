let myForm = document.getElementById("myForm");

function addRow(tableID) {
    let table = document.getElementById(tableID);
    let rowCount = table.rows.length;
    let colCount = table.rows[0].cells.length;

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    let recordAlreadyExists = false;
    for(let loopVar = 0; loopVar < rowCount; loopVar++) {
        let existingRow = table.rows[loopVar];

        let firstNameMatched = false;
        let lastNameMatched = false;
        let ageMatched = false;

        for(let colLoopVar = 0; colLoopVar < colCount; colLoopVar++) {
            if(colLoopVar == 0 && firstName == existingRow.cells[colLoopVar].innerHTML) {
                firstNameMatched = true;
            }

            if(colLoopVar == 1 && lastName == existingRow.cells[colLoopVar].innerHTML) {
                lastNameMatched = true;
            }

            if(colLoopVar == 2 && age == parseInt(existingRow.cells[colLoopVar].innerHTML)) {
                ageMatched = true;
            }
        }

        if(firstNameMatched && lastNameMatched && ageMatched) {
            recordAlreadyExists = true;
            break;
        }
    }

    if(!recordAlreadyExists) {
        let row = table.insertRow(rowCount);
        for(let loopVar = 0; loopVar < colCount; loopVar++) {
            var newcell	= row.insertCell(loopVar);
            switch(loopVar) {
                case 0:
                    newcell.innerHTML = firstName;
                    break;
                case 1:
                    newcell.innerHTML = lastName;
                    break;
                case 2:
                    newcell.innerHTML = age;
                    break;
                default:
                    break;
            }
            
        }
    } else {
        alert("Record already exists!!!");
    }
    
}

if(myForm) {
    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addRow("dataTable");
    });
}
