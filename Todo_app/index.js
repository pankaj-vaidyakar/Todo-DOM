let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let t = document.getElementById("task");
let p = document.getElementById("priority");

form.addEventListener("submit", getData);

let todo_arr = [];

function getData() {
  event.preventDefault();
  
  let task = t.value;
  let priority = p.value;

  let todo_obj = {
    task,
    priority,
  };

  todo_arr.push(todo_obj);

  display(todo_arr);
  //   console.log(todo_arr);
}

function display(data) {
  tbody.innerHTML = null;
  //   console.log(data)
  todo_arr.map(function (el) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = el.task;
    let col2 = document.createElement("td");
    col2.innerText = el.priority;
    if (el.priority == "High") {
      col2.style.backgroundColor = "red";
    } else if (el.priority == "Low") {
      col2.style.backgroundColor = "green";
    }
    let col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.style.color = "white";
    col3.style.backgroundColor = "red";
    row.append(col1, col2, col3);
    tbody.append(row);
  });
}
