// EVENTS
//Assignment # 49-52


// 1. Create a signup form and display form data in your web 
// page on submission.


function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting normally

   
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const qualification = document.getElementById('qualification').value;
    const occupation = document.getElementById('occupation').value;
    const resultDiv = document.getElementById('result');

   
    resultDiv.innerHTML = `
     <h2>Submitted Information:</h2><br>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
    `;
}

// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed.

function expandPara(){
    let para =`In June 2020, the number of Realme's global smartphone users reached 35 million, and AIoT product sales broke a record of 1 million. According to Counterpoint Statistics, Realme ranked 7th in the ranking of the number of smartphones produced globally in the first quarter of 2020, with an annual growth rate of 157%, ranking first in the world. Currently, Realme has entered 27 markets worldwide, including Asia, Europe, Russia, Australia, and Egypt.`;

    const readMore = document.getElementById('more');
    const newContent = document.createElement('p'); // Create new <p> for the additional content
    newContent.textContent = para; // Add the additional information to the new <p>
    readMore.appendChild(newContent); 
    const link = readMore.querySelector('a');
    if (link) {
        link.style.display = 'none'; // Hide the link after it has been clicked
    }
}

// 3. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.

// Function to add a student to the table
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const studentClass = document.getElementById("class").value;

    // Add new row to the table
    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells with student details
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = studentClass;

    // Create Edit and Delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() { editStudent(newRow); };
    cell4.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() { deleteStudent(newRow); };
    cell4.appendChild(deleteButton);

    // Clear form inputs after adding
    document.getElementById("studentForm").reset();
});

// Function to delete a student (row)
function deleteStudent(row) {
    row.parentNode.removeChild(row);
}

// Function to edit student details directly in the table
function editStudent(row) {
    const name = row.cells[0].textContent;
    const age = row.cells[1].textContent;
    const studentClass = row.cells[2].textContent;

    // Pre-fill form with current row data
    document.getElementById("name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("class").value = studentClass;

    // Remove the row after editing to update it
    row.parentNode.removeChild(row);
}

