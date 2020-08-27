document
  .getElementById("form-newappln")
  .addEventListener("submit", evaluateAppln);

function evaluateAppln(e) {
  console.log("asdadadad");

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const marital = document.getElementById("marital").value;
  const dependents = document.getElementById("dependents").value;
  const education = document.getElementById("education").value;
  const appincome = document.getElementById("appincome").value;
  const coappincome = document.getElementById("coappincome").value;
  const loanamt = document.getElementById("loanamt").value;
  const term = document.getElementById("term").value;
  const credhist = document.getElementById("credhist").value;
  const proparea = document.getElementById("proparea").value;
  e.preventDefault();
}
/*
function apiPost(
  scoring_url,
  token,
  mlInstanceID,
  payload,
  loadCallback,
  errorCallback
) {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", loadCallback);
  oReq.addEventListener("error", errorCallback);
  oReq.open("POST", scoring_url);
  oReq.setRequestHeader("Accept", "application/json");
  oReq.setRequestHeader("Authorization", token);
  oReq.setRequestHeader("ML-Instance-ID", mlInstanceID);
  oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  oReq.send(payload);
}
*/
