
const kmprice = 0.21;
let km = prompt("enter the number of kilometers to travel:");
let IsKmANumber = !isNaN(km);
let balance = km * kmprice 
km = parseInt(km);


let age = prompt("enter your age:");
let IsAgeANumber = !isNaN(age);
age = parseInt(age);


if (age > 65) {
    console.log((balance / 100) * 60); 
    document.getElementById("balance").innerHTML = "your ticket price is" + ((balance.toFixed(1) / 100) * 60);
  } else if (eta < 18) {
    console.log((balance / 100) * 80); 
    document.getElementById("balance").innerHTML = "your ticket price is" + ((balance.toFixed(1) / 100) * 80);
  } else {
    console.log(balance);
    document.getElementById("balance").innerHTML = "your ticket price is" + ((balance.toFixed(1) / 100) + "euro");
  }















