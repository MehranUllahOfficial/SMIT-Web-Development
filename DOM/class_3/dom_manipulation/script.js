let paragraph = document.getElementById("para");

paragraph.textContent = "Welcome To ReactJS";
paragraph.innerHTML = "Welcome To ReactJS";

// paragraph.textContent = "<strong>Welcome to ReactJS</strong>";
paragraph.innerHTML = "<strong>Welcome to ReactJS</strong>";

// console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);

let content = document.querySelector(".content");

// console.log(content.textContent);
// console.log(content.innerHTML);

let contain = document.querySelector(".container");
let changeBtn = document.querySelector(".btn");

changeBtn.addEventListener("click", function(){
    contain.classList.toggle("highlight");
})
