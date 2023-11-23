var num = 10;
let name = "Peerapat kallabut";
age = 21;

x = ["apple", "mango", "orange", "tangmo"];
obj = { name: "Olora", age: 21, tel: "061-091-5352" };

data = { adress: ["115", "Burirum", "3100"], name: ["Jhon"] };
console.log(x[1]);
console.log(obj.tel);
console.log(data.adress[2]);

document.getElementById("msg").innerHTML = data.adress[2];

let long = data.name + " : " + x[0];

long = `${data.name} :
            ${x[1]}; `

$(function () {
    $("#msg").html(long);
});//jQuery ready

