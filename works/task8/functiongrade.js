function calculateGrade() {
let marks = parseFloat(document.getElementById("marks").value);
let grade;
if (marks >= 80) {
grade = "A";
} else if (marks >= 70) {
grade = "B";
} else if (marks >= 60) {
grade = "C";
} else if (marks >= 50) {
grade = "D";
} else {
grade = "F (Fail)";
}
document.getElementById("grade").innerHTML = "Your Grade: " + grade;
}
