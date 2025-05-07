var button = document.querySelector("button");
var name = document.getElementById("name");
var email = document.getElementById("email");
const names = [];

function addInfo() {
  var button = document.getElementById("button");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  names.push(["Email: " + email, "Name: " + name]);
  console.log(names);
  let text = "";
  for (let i = 0; i < names.length; i++) {
    text += names[i][1] + "<br>";
  }
  document.getElementById("output2").innerHTML = text;
  let emails = "";
  for (let i = 0; i < names.length; i++) {
    emails += names[i][0] + "<br>";
  }
  document.getElementById("output").innerHTML = emails;
//   let txt = ""
//   for(let x in names) {
//     txt += names[x][0] + "<br>"
//   }  
//   document.getElementById("output").innerHTML = txt
//   let nme = ""
//   for(let x in names) {
//     nme += names[x][1] + "<br>"
//   }  
//   document.getElementById("output2").innerHTML = nme
//   let text = ""
//   for(let x of names) {
//     text += x[0] + "<br>"
//   }
//   document.getElementById("output").innerHTML = text
//   let nme = ""
//   for(let x of names) {
//     nme += x[1] + "<br>"
//   }
//   document.getElementById("output2").innerHTML = nme
}   