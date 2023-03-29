let km = prompt("enter the number of kilometers to travel:");
let age = prompt("enter your age:");

km = parseInt(km);
age = parseInt(age);
let IsKmANumber = !isNaN(km);
let IsAgeANumber = !isNaN(age);

let kmprice = 0.21;
let balance = km * kmprice;

console.log("Price to pay: " + balance.toFixed(2) + " euro");

let discount65 = balance / 100 * 60;
let discountminor = balance / 100 * 80;

if(age > 65){
    console.log("your special price is: " + discount65); 
    document.getElementById("balance").innerHTML = discount65.toFixed(2) + " euro";
  }else if (age < 18){
    console.log("your special price is: " + discountminor); 
    document.getElementById("balance").innerHTML = discountminor.toFixed(2) + " euro";
  }else{
    console.log(balance);
    document.getElementById("balance").innerHTML = "your ticket price is " + balance.toFixed(2) + " euro";
  }