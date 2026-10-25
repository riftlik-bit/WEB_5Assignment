const userProfile = {
    name: "Student",
    birthYear: 2005,
    isDeveloper: false,
    hobbies: ["Games", "Music"]
};

let date = new Date();
let currentYear = date.getFullYear();

let age = currentYear - userProfile.birthYear;
let monthsOld = age * 12;
let totalHobbies = userProfile.hobbies.length;

console.log("Age: " + age);
console.log("Months old: " + monthsOld);
console.log("Total hobbies: " + totalHobbies);

let infoText = document.getElementById("profileInfo");
infoText.innerHTML = "Name: " + userProfile.name + " | Age: " + age + " | Months: " + monthsOld;

let updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", function() {
    let newName = document.getElementById("nameInp").value;
    let newYear = document.getElementById("yearInp").value;

    if (newName !== "" && newYear !== "") {
        userProfile.name = newName;
        userProfile.birthYear = Number(newYear);

        let newAge = currentYear - userProfile.birthYear;
        let newMonths = newAge * 12;

        infoText.innerHTML = "Name: " + userProfile.name + " | Age: " + newAge + " | Months: " + newMonths;
        console.log("Profile updated:", userProfile);
    }
});

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function() {
    let val = document.getElementById("hobbyInp").value;
    if (val !== "") {
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.innerHTML = val;
        ul.appendChild(li);
        
        userProfile.hobbies.push(val);
        document.getElementById("hobbyInp").value = "";
    }
});

let removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function() {
    let ul = document.getElementById("list");
    let items = ul.getElementsByTagName("li");
    if (items.length > 0) {
        ul.removeChild(items[items.length - 1]);
        userProfile.hobbies.pop();
    }
});