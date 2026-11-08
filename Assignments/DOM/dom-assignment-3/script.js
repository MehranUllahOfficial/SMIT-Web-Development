// Task 1: Get an Attribute Value
let image = document.getElementsByTagName("img");
console.log(image[0].getAttribute("src"));

// Task 2: Change Image Source
let changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", function(){
    image[0].setAttribute("src", "image2.png");
})

// Task 3: Set Attribute to Input Field
let nameInput = document.getElementById("name");
nameInput.setAttribute("placeholder", "Enter Your Name");

// Task 4: Remove an Attribute
let enableBtn = document.getElementById("enable-btn");
let genderInput = document.getElementById("gender-input")
enableBtn.addEventListener("click", function(){
    genderInput.removeAttribute("disabled");
})

// Task 5: Check if Attribute Exists
let para = document.getElementById("para");
console.log(para.hasAttribute("class"));

// Task 6: Change Link Destination
let link = document.getElementById("link");
let linkBtn = document.getElementById("linkBtn");

linkBtn.addEventListener("click", function(){
    link.setAttribute("href", "https://youtube.com");
    link.textContent = "YouTube";
})


