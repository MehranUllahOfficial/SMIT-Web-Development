const username = document.getElementById("username");
const result = document.getElementById("result");
const showBtn = document.getElementById("btn");

const selectedLanguages = [];

showBtn.addEventListener("click", function(event){
    const gender = document.querySelector("input[name='gender']:checked");
    // console.log(gender.value);
    event.preventDefault();
    const name = username.value;

    if (name.length < 4 || name.length > 12) {
        alert("Username should be between 4 and 12");
        return;
    }

    const languages = document.querySelectorAll("input[name='languages']:checked");
    for(let lan of languages) {
        selectedLanguages.push(lan.value);
    }
    console.log(selectedLanguages);
    
    const country = document.getElementById("country");
    console.log(country.value);
    

    result.textContent = username.value;
})