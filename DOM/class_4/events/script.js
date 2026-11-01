let clickBtn = document.querySelector("#clickBtn");
let message = document.querySelector("#message");

clickBtn.addEventListener("click", function(){
    message.textContent = "Button clicked.";
})

let darkMd = document.querySelector("#darkMD");
let lightMd = document.querySelector("#lightMD");

darkMd.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
})

lightMd.addEventListener("click", function(){
    document.body.style.backgroundColor = "white";
})

let search = document.querySelector("#search");
let outputResultBtn = document.querySelector("#outputResultBtn");
let output = document.querySelector("#output");

let outputResult = "";

search.addEventListener("input", function(){
    outputResult = search.value;
})
outputResultBtn.addEventListener("click", function(){
    output.textContent = outputResult;
})
