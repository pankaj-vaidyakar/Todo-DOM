let form =document.querySelector("form")
let tbody = document.querySelector("tbody")
let Employee = document.getElementById("Employee");
let EmployeeID = document.getElementById("EmployeeID");
let Department = document.getElementById("Department");
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mobile")

form.addEventListener("submit",getData)

let Employee_arr =JSON.parse(localStorage.getItem("Employee_arr")) || [];
display(Employee_arr);

function getData(){

 event.preventDefault()

 let Employee_obj = {
  Employee:Employee.value,
  EmployeeID:EmployeeID.value,
  Department:Department.value,
  exp:exp.value,
  email:email.value,
  mobile:mobile.value
 }
 
 Employee_arr.push(Employee_obj)
  
 localStorage.setItem("Employee_arr", JSON.stringify(Employee_arr));

//  console.log(Employee_arr);
 display(Employee_arr);
 
}

function display(data){

 tbody.innerHTML = "";

  data.map(function (el){
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = el.Employee;
    let col2 = document.createElement("td");
    col2.innerText = el.EmployeeID;
    let col3 = document.createElement("td");
    col3.innerText = el.Department;
    let col4 = document.createElement("td");
    col4.innerText = el.exp;
    let col5 = document.createElement("td");
    col5.innerText = el.email;
    let col6 = document.createElement("td");
    col6.innerText = el.mobile;
    let col7 = document.createElement("td");
    if(el.exp > 5){
      el.exp = "Senior"
    }else if(el.exp >=2 && el.exp <= 5){
      el.exp = "Junior"
    }else if(el.exp <= 1){
      el.exp = "Fresher"
    }
    col7.innerText = el.exp;
    let col8 = document.createElement("td");
    col8.innerText = "Delete"
    col8.style.color = "white"
    col8.style.backgroundColor = "red"
    col8.addEventListener("click",Deletedata)
    row.append(col1,col2,col3,col4,col5,col6,col7,col8);
    tbody.append(row);
  });
}

function Deletedata(){
  event.target.parentNode.remove();
  
}