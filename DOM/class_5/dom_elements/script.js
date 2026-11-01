const heading = document.createElement("h1");
heading.textContent = "My First Dynamic Heading";
document.body.appendChild(heading);

const technologies = ["Html", "Css", "Js", "Bootstrap"];

const techList = document.createElement("ol");

for (let technology of technologies) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");

    span.textContent = technology;
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.style.marginLeft = "10px";

    li.append(span, removeBtn);

    li.style.marginTop = "10px";

    techList.appendChild(li);
}

document.body.appendChild(techList);

techList.addEventListener("click", function (event){
    if (event.target.matches(".remove-btn")) {
        event.target.parentElement.remove();
    }
});