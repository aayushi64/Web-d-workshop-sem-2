//AAYUSHI SHARMA 
let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");
let headingSize = 24;

document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

document.getElementById("bgColorBtn").onclick = function () {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById("fontSizeBtn").addEventListener("click", function () {
    headingSize += 2;
    heading.style.fontSize = headingSize + "px";
});

document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

document.getElementById("resetBtn").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    heading.style.fontSize = "24px";
    paragraph.style.display = "block";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
    headingSize = 24;
});