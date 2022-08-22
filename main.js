const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push("www.awesomelead.com")
  console.log(myLeads)
})