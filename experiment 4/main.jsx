let n, currentSubject, marksList, total;

function calculate() {
    n = parseInt(document.getElementById("subjects").value);
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    total = 0;
    marksList = [];
    currentSubject = 1;

    showPopup("Enter marks for subject " + currentSubject);
}

function showPopup(message) {
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup-input").value = "";
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-input").focus();
}

function submitMarks() {
    let marks = parseFloat(document.getElementById("popup-input").value);
    if (isNaN(marks)) {
        alert("Please enter valid marks.");
        return;
    }

    marksList.push(marks);
    total += marks;

    document.getElementById("popup").style.display = "none";

    if (currentSubject < n) {
        currentSubject++;
        showPopup("Enter marks for subject " + currentSubject);
    } else {
        showResults();
    }
}

document.getElementById("popup-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        submitMarks();
    }
});

function showResults() {
    let average = total / n;
    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else {
        grade = "C";
    }

    document.getElementById("total").innerText = "Total Marks: " + total;
    document.getElementById("average").innerText = "Average Marks: " + average.toFixed(2);
    document.getElementById("grade").innerText = "Grade: " + grade;
    document.getElementById("result").innerText = "Result: " + (average >= 40 ? "Pass" : "Fail");
}