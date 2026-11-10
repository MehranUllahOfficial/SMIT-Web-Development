// Task 1: Button Click Event
let alertBtn = document.getElementById("alert-btn");
alertBtn.addEventListener("click", function(){
    alert("Button Clicked Successfully");
})

// Task 2: Change Text on Click
let para = document.getElementById("para");
let changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", function(){
    para.textContent = "Text Updated Successfully";
})

// Task 3: Background Color Change
let bgBtn = document.getElementById("bg-btn");
bgBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
})

// Task 4: Input Event (Live Typing)
let nameInput = document.getElementById("name-input");
let inputPara = document.getElementById("input-para");

nameInput.addEventListener("input", function(){
    inputPara.textContent = nameInput.value;
})

// Task 5: Mouse Events
let contain = document.getElementById("container");

contain.addEventListener("mouseenter", function(){
    contain.style.backgroundColor = "blue";
})
contain.addEventListener("mouseleave", function(){
    contain.style.backgroundColor = "white";
})

// Task 6: Double Click Event
let doubleBtn = document.getElementById("double-btn");

doubleBtn.addEventListener("dblclick", function(){
    alert("Double Click Detected");
})