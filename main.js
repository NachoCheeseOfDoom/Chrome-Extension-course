// let myLeads = [];

// const inputBtn = document.getElementById("input-btn");
// const inputEl = document.getElementById("input-el");
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage;
//   Render(myLeads);
// }

// function Render(leads) {
//   let listItems = "";
//   for (let i = 0; i < leads.length; i++) {
//     //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
//     listItems += `
//     <li> <a target='_blank' href=' ${leads[i]}'> ${leads[i]} </a> </li>`;
//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i];
//     // ulEl.append(li)
//   }
//   ulEl.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function () {
//   localStorage.clear();
//   myLeads = [];
//   Render(myLeads);
// })

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   inputEl.value = '';
//   localStorage.setItem("myLeads", JSON.stringify(myLeads));
//   Render(myLeads);
//   console.log(localStorage.getItem("myLeads"))

// })



// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4)) // should log 7
console.log(add(9, 102)) // should log 111