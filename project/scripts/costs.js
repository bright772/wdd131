const studentData = [
    { gradeNumber: "1", baseMonthly: 200 },
    { gradeNumber: "2", baseMonthly: 220 },
    { gradeNumber: "3", baseMonthly: 240 },
    { gradeNumber: "4", baseMonthly: 260 },
    { gradeNumber: "5", baseMonthly: 280 },
    { gradeNumber: "6", baseMonthly: 300 },
    { gradeNumber: "7", baseMonthly: 340 },
    { gradeNumber: "8", baseMonthly: 380 },
    { gradeNumber: "9", baseMonthly: 420 },
];

const gradeSelect = document.getElementById("gradeAll");
const radioButtons = document.querySelectorAll("input[name='students']");
const table = document.getElementById("costs-table");

function fillChoices() {
    studentData.forEach(student => {
        const option = document.createElement("option");
        option.value = student.gradeNumber;
        option.textContent = `Grade ${student.gradeNumber}`;
        gradeSelect.appendChild(option);
    });
}
    
function getMonthlyRate(grade) {
    const studentObject = studentData.find(student => student.gradeNumber === grade);
    return studentObject ? studentObject.baseMonthly : 0;
}

function updateTable() {
    const selectedStudents = parseInt(document.querySelector("input[name='students']:checked")?.value || "0");
    const selectedGrade = gradeSelect.value;

    // Clear rows except header
    while (table.rows.length > 1) table.deleteRow(1);

    if (!selectedGrade || selectedStudents === 0) return;

    const rate = getMonthlyRate(selectedGrade);
    const totalCost = rate * selectedStudents;

    // for (let i = 1; i <= selectedStudents; i++) {
    // Insert a single row showing the total
    const row = table.insertRow();
        // row.insertCell().textContent = `${i}`;
    row.insertCell().textContent = `${selectedStudents}`; // number of students
    row.insertCell().textContent = `${selectedGrade}`;
        // row.insertCell().textContent = `$${rate.toFixed(2)}`;
    row.insertCell().textContent = `$${totalCost.toFixed(2)}`;
}

radioButtons.forEach(radio => {
    radio.addEventListener("change", updateTable);
});

gradeSelect.addEventListener("change", updateTable);

fillChoices();