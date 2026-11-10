// Task 1: Add a Class
let para = document.getElementById("para");
let addBtn = document.getElementById("add-btn");
let removeBtn = document.getElementById("remove-btn");
let toggleBtn = document.getElementById("toggle-btn");
let checkBtn = document.getElementById("check-btn");
let buyBtn = document.getElementById("buy-btn");
let darkBtn = document.getElementById("dark-btn");

addBtn.addEventListener("click", function(){
    para.classList.add("highlight");
})

// Task 2: Remove a Class
removeBtn.addEventListener("click", function(){
    para.classList.remove("highlight");
})

// Task 3: Toggle a Class
toggleBtn.addEventListener("click", function(){
    para.classList.toggle("highlight");
})

// Task 4: Check Class Exists
checkBtn.addEventListener("click", function(){
    if(para.classList.contains("highlight")){
        alert("Highlight class exist")
    } else {
        alert("Highlight class not exist")
    }
})

// Task 5: Button Active State (Real World)
buyBtn.addEventListener("click", function(){
    buyBtn.classList.toggle("active-btn");
})

// Task 6: Dark Mode (Industry Example)
darkBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
})