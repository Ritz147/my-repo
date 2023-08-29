var num1=document.getElementById("num1")
var num2=document.getElementById("num2")
num1.addEventListener('input',function(){
console.log("num1 changed");
let temp1=parseFloat(document.getElementById("num1").value);
console.log(temp1);
var e1= document.getElementById("temp1");
var value1 = e1.options[e1.selectedIndex].value;
console.log(value1);
var e2= document.getElementById("temp2");
var value2 = e2.options[e2.selectedIndex].value;
console.log(value2);
if(value1==="Celsius" && value2==="Kelvin")
num2.value=parseFloat(temp1+273.15).toFixed(2);
else if(value1==="Kelvin" && value2==="Celsius")
num2.value=parseFloat(temp1-273.15).toFixed(2);
else if(value1==="Celsius" && value2==="Fah")
num2.value=parseFloat(((temp1*9)/5)-32).toFixed(2);
else if(value1==="Fah" && value2==="Celsius")
num2.value=parseFloat(((temp1-32)*5)/9).toFixed(2);
else if(value1==="Fah" && value2==="Kelvin")
num2.value=parseFloat((((temp1-32)*5)/9)+273.15).toFixed(2);
else if(value1==="Fah" && value2==="Kelvin")
num2.value=parseFloat((((temp1-32)*5)/9)+273.15).toFixed(2);
else if(value1==="Kelvin" && value2==="Fah")
num2.value=parseFloat((((temp1-273.15)*9)/5)+32).toFixed(2);
else if(value1===value2)
num2.value=temp1;
console.log(num2.value);
})
num2.addEventListener('input',function(){
    console.log("num2 changed");
    let temp2=parseFloat(document.getElementById("num2").value);
    console.log(temp2);
    var e2= document.getElementById("temp2");
    var value2 = e2.options[e2.selectedIndex].value;
    console.log(value2);
    var e1= document.getElementById("temp1");
    var value1 = e1.options[e1.selectedIndex].value;
    console.log(value1);
    if(value2==="Celsius" && value1==="Kelvin")
    num1.value=parseFloat(temp2+273.15).toFixed(2);
    else if(value2==="Kelvin" && value1==="Celsius")
    num1.value=parseFloat(temp2-273.15).toFixed(2);
    else if(value2==="Celsius" && value1==="Fah")
    num1.value=parseFloat(((temp2*9)/5)-32).toFixed(2);
    else if(value2==="Fah" && value1==="Celsius")
    num1.value=parseFloat(((temp2-32)*5)/9).toFixed(2);
    else if(value2==="Fah" && value1==="Kelvin")
    num1.value=parseFloat((((temp2-32)*5)/9)+273.15).toFixed(2);
    else if(value2==="Fah" && value1==="Kelvin")
    num1.value=parseFloat((((temp2-32)*5)/9)+273.15).toFixed(2);
    else if(value2==="Kelvin" && value1==="Fah")
    num1.value=parseFloat((((temp2-273.15)*9)/5)+32).toFixed(2);
    else if(value2===value1)
    num1.value=temp2;
    console.log(num1.value);

})
