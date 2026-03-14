let list = [];

function add() {
  let name = document.getElementById("ename").value;
  let id   = document.getElementById("eid").value;
  let sal  = Number(document.getElementById("esalary").value);
  let dept = document.getElementById("edept").value;

  if (name && id && sal > 0 && dept) {
    list.push({name, id, sal, dept});
    clearInputs();
    showAll();
  } else {
    alert("Please fill all fields correctly");
  }
}

function clearInputs() {
  document.getElementById("ename").value = "";
  document.getElementById("eid").value = "";
  document.getElementById("esalary").value = "";
  document.getElementById("edept").value = "";
}

function showAll() {
  if (list.length === 0) {
    document.getElementById("result").innerHTML = "<p>No employees yet.</p>";
    return;
  }

  let text = "<table><tr><th>Name</th><th>ID</th><th>Salary</th><th>Department</th></tr>";
  for (let emp of list) {
    text += `<tr>
      <td>${emp.name}</td>
      <td>${emp.id}</td>
      <td>${emp.sal}</td>
      <td>${emp.dept}</td>
    </tr>`;
  }
  text += "</table>";
  document.getElementById("result").innerHTML = text;
}

function showHigh() {
  let text = "<h3>Salary ≥ 50000</h3>";
  let found = false;

  text += "<table><tr><th>Name</th><th>ID</th><th>Salary</th><th>Dept</th></tr>";
  for (let emp of list) {
    if (emp.sal >= 50000) {
      text += `<tr><td>\( {emp.name}</td><td> \){emp.id}</td><td>\( {emp.sal}</td><td> \){emp.dept}</td></tr>`;
      found = true;
    }
  }
  text += "</table>";

  if (!found) text = "<p>No one has salary ≥ 50000</p>";
  document.getElementById("result").innerHTML = text;
}

function showTotal() {
  let total = 0;
  for (let emp of list) {
    total += emp.sal;
  }
  document.getElementById("result").innerHTML = `<h3>Total Salary: ${total}</h3>`;
}

function showAvg() {
  if (list.length === 0) {
    document.getElementById("result").innerHTML = "<p>No employees</p>";
    return;
  }
  let sum = 0;
  for (let emp of list) sum += emp.sal;
  let avg = sum / list.length;
  document.getElementById("result").innerHTML = `<h3>Average Salary: ${avg.toFixed(0)}</h3>`;
}

function showCount() {
  if (list.length === 0) {
    document.getElementById("result").innerHTML = "<p>No employees</p>";
    return;
  }

  let count = {};
  for (let emp of list) {
    if (count[emp.dept]) {
      count[emp.dept]++;
    } else {
      count[emp.dept] = 1;
    }
  }

  let text = "<h3>Count by Department</h3><table><tr><th>Department</th><th>Count</th></tr>";
  for (let d in count) {
    text += `<tr><td>\( {d}</td><td> \){count[d]}</td></tr>`;
  }
  text += "</table>";

  document.getElementById("result").innerHTML = text;
}