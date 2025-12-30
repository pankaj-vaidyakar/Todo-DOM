let form = document.querySelector("form")
let tbody = document.querySelector("tbody")
let docname = document.getElementById("docname")
let docid = document.getElementById("docid")
let specialization = document.getElementById("specialization");
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mobile")

form.addEventListener("submit",getData)

let doctor_arr = []

function getData(){
    event.preventDefault()
 
   let doctor_obj = {
    docname:docname.value,
    docid:docid.value,
    specialization:specialization.value,
    exp:exp.value,
    email:email.value,
    mobile:mobile.value
   }
  
   doctor_arr.push(doctor_obj)
//    console.log(doctor_arr);

display(doctor_arr)
   
    
}


function display(data){
tbody.innerHTML = " ";
    data.map(function(el){
    let row = document.createElement("tr")
    let col1 = document.createElement("td")
    col1.innerText = el.docname;
    let col2 = document.createElement("td")
    col2.innerText = el.docid
    let col3 = document.createElement("td")
    col3.innerText = el.specialization;
    let col4 = document.createElement("td")
    col4.innerText = el.exp;
    let col5 = document.createElement("td")
    col5.innerText = el.email;
    let col6 = document.createElement("td")
    col6.innerText = el.mobile;
    let col7 = document.createElement("td")
    if(el.exp > 5){
        el.exp = "Senior";
    }else if(el.exp >= 2 && el.exp <=5){
        el.exp = "junior"
    }else{
        el.exp = "Traniee"
    }
    col7.innerText = el.exp;
    let col8 = document.createElement("td")
    col8.innerText = "Delete"
    col8.style.color = "white"
    col8.style.backgroundColor = "red"
    col8.addEventListener("click",delketefun)

    row.append(col1,col2,col3,col4,col5,col6,col7,col8)
    tbody.append(row)
    })
}

function delketefun(){
    console.log(event.target.parentNode.remove());
    
}