function calculateSum() {
  let n = document.getElementById("num").value;

  if (n === "" || n < 1) {
    document.getElementById("output").innerHTML = "Please enter a valid number!";
    return;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  document.getElementById("output").innerHTML =
    "Sum of numbers from 1 to " + n + " is: " + sum;
}