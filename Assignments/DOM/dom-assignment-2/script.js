// Task 1: Select Element by ID
let heading = document.getElementById("heading");
heading.textContent = "DOM Element Selected by ID";

// Task 2: Select Elements by Tag Name
let paras = document.getElementsByTagName("p");
paras[0].textContent = "First paragraph updated";

// Task 3: Select Elements by Class Name
let btns = document.getElementsByClassName("btn");
btns[1].textContent = "Click Me";

// Task 4: Use querySelector
let head2 = document.querySelector(".head2");
head2.style.color = "blue";

// Task 5: Use querySelectorAll
let items = document.querySelectorAll(".item");
for(item of items) {
    item.style.color = "green";
}

// Task 6: Change Style Using Selected Element
let para = document.getElementsByClassName("para");
para[0].style.fontSize = "20px";
para[0].style.color = "white";
para[0].style.backgroundColor = "black";