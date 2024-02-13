//GETTING THE REQUIRED VARS

const textArea = document.querySelector("#text");

const colorInput = document.querySelector("#colorInput");
const numberInput = document.querySelector("#numInput");
const fontSelector = document.querySelector("#fontSelect");



//POPULATING THE SELECT ELEMENT WITH FONTS

const fontFamily = [
    "Arial",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Brush Script MT",
];


fontFamily.forEach((font) => {
    const el = document.createElement("option");
    el.text = font;
    fontSelector.appendChild(el);
})


//ADDING EVENT LISTENERS

colorInput.addEventListener("change", (e) => {
    textArea.style.color = e.target.value;
});

numberInput.addEventListener("change", (e) => {
    textArea.style.fontSize = `${e.target.value}px`;
});


fontSelector.addEventListener("change", (e) => {
    textArea.style.fontFamily = `${e.target.value}`;
});


