console.log("This output is from the external JS file");
console.log("Name: Jordan Parker");
console.log("School: Julius L. Chambers");
console.log("Grade: 11th");

var name = "Jordan Parker";
let school = "Julius L. Chambers";
var grade = "11th";

document.getElementById("name").innerHTML = "Name: <b>" + name + "</b>";
document.getElementById("name").innerHTML = "Grade: <b>" + grade + "</b>";
document.getElementById("name").innerHTML = "School: <b>" + school + "</b>";
