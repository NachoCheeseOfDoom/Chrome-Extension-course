let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn")



if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  Render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    Render(myLeads);
  });
});

function Render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
    <li> <a target='_blank' href=' ${leads[i]}'> ${leads[i]} </a></li>
    -------------------------------------------------------------------------------------------------`;
    // const li = document.createElement("li")
    // li.textContent = myLeads[i];
    // ulEl.append(li)
  }
  ulEl.innerHTML = listItems;
  console.log("Hola");
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  Render(myLeads);
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  Render(myLeads);
})