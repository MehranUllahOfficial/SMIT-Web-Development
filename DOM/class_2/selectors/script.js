const heading = document.getElementById("heading");
heading.innerText = "Welcome to DOM";
console.log(heading.innerText);

const messages = document.getElementsByClassName("message");

messages[0].innerText = "Updated First Message";

console.log(messages[0]);

const paras = document.getElementsByTagName("p");

for (let i = 0; i < paras.length; i++) {
    paras[i].style.color = "white";
    paras[i].style.backgroundColor = "black";
}

