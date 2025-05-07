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

var table = document.getElementById("table");
const team = [
  {
    name: "Leopards FC",
    city: "Nairobi",
    foundedYear: 1964,
    stadium: "Nyayo Stadium",
  },
  {
    name: "Gor Mahia",
    city: "Kisumu",
    foundedYear: 1968,
    stadium: "Moi Stadium",
  },
  {
    name: "Tusker FC",
    city: "Ruaraka",
    foundedYear: 1969,
    stadium: "Ruaraka Grounds",
  },
  {
    name: "KCB FC",
    city: "Nairobi",
    foundedYear: 1993,
    stadium: "Kasarani Annex",
  },
  {
    name: "Sofapaka FC",
    city: "Machakos",
    foundedYear: 2004,
    stadium: "Kenyatta Stadium",
  },
  {
    name: "Bandari FC",
    city: "Mombasa",
    foundedYear: 1985,
    stadium: "Mbaraki Stadium",
  },
  {
    name: "Ulinzi Stars",
    city: "Nakuru",
    foundedYear: 1995,
    stadium: "Afraha Stadium",
  },
  {
    name: "Kariobangi Sharks",
    city: "Nairobi",
    foundedYear: 2000,
    stadium: "Utalii Grounds",
  },
  {
    name: "Nzoia Sugar",
    city: "Bungoma",
    foundedYear: 1982,
    stadium: "Sudi Stadium",
  },
  {
    name: "Vihiga United",
    city: "Vihiga",
    foundedYear: 2014,
    stadium: "Mumias Sports Complex",
  },
];
function displayTeams() {
    const tbody = document.querySelector("#table tbody")

    team.forEach(team => {
        const row = document.createElement("tr")
        row.innerHTML = `
          <td>${team.name}</td>
          <td>${team.city}</td>
          <td>${team.foundedYear}</td>
          <td>${team.stadium}</td>
        `;  
        
        tbody.appendChild(row)
        
    });
}
displayTeams()