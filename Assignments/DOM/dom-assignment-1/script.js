// Task 1: Change Text Using JavaScript
let heading = document.getElementById("heading");
heading.textContent = "Welcome to JavaScript DOM";

// Task 2: Change Paragraph Text on Button Click
let para = document.getElementById("para");
let paraBtn = document.getElementById("para-btn");

paraBtn.addEventListener("click", function(){
    para.textContent = "Paragraph text changed!";
})

// Task 3: Change Background Color on Button Click
let bgBtn = document.getElementById("bg-btn");
bgBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
})

// Task 4: Show Alert Message on Button Click
let alertBtn = document.getElementById("alert-btn");
alertBtn.addEventListener("click", function(){
    alert("DOM is working!");
})

// Task 5: Update Text Using Input Field
let inputName = document.getElementById("name-input");
let inputPara = document.getElementById("input-para");
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
    inputPara.textContent = inputName.value;
})