let number1="" , number2="" ,operator="",isOperatorPressed = false,isDecimalPressed = false;
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const number1display = document.querySelector("#number-1");
const number2display = document.querySelector("#number-2");
const operatorSelected = document.querySelector("#operator-selected");
const equals = document.querySelector("#equals");
const backspace = document.querySelector("#backspace");
const allClear = document.querySelector("#all-clear")
const decimal = document.querySelector("#decimal");
const sign = document.querySelector("#sign");

numbers.forEach((number,index,listObj)=>{
number.addEventListener('click',()=>{numberPressed(number.innerText)});
});
operators.forEach((operator,index,listObj)=>{
operator.addEventListener('click',()=>{operatorPressed(operator.innerText)});
});
equals.addEventListener('click',equalPressed);
backspace.addEventListener('click',backspacePressed);
allClear.addEventListener('click',allClearPressed);
decimal.addEventListener('click',DecimalPressed);
sign.addEventListener('click',signPressed);

function allClearPressed(){
number1=number2=operator="";
isOperatorPressed = false;
updateDisplay();
}
function numberPressed(number){
if(isOperatorPressed && number2.length<20){
number2+=number;
updateDisplay();
}else if(number1.length<20){
 if(isNaN(number1)) number1="";
number1+=number;
updateDisplay();
}
}
function operatorPressed(op){
if(isOperatorPressed){
equalPressed();
}
isOperatorPressed = true;
operator = op;
updateDisplay();
isDecimalPressed = false;
}
function equalPressed(){
if(number1.length>0 && number2.length>0 && isOperatorPressed){
let answer = calculate(number1,number2,operator);
number1=""+answer;
number2="";
operator = "";
isOperatorPressed = false;
if(number1.length>20){
showLengthError();
}else{
updateDisplay();
}
}
}
function updateDisplay(){
if(operator==""&& number1==""&&number2=="")number1="enter number"
if(number1.length<=20)
number1display.innerText=number1;
if(number2.length<=20)
number2display.innerText=number2;
operatorSelected.innerText = operator;

}
function calculate(num1,num2,operator){
if(num1=="")num1=0;
if(num2=="")num2=0;
if(operator=="+")return Number(num1)+Number(num2);
if(operator=="-")return Number(num1)-Number(num2);
if(operator=="*")return Number(num1)*Number(num2);
if(operator=="/")return Number(num1)/Number(num2);
}
function showLengthError(){
number1.innerText = "Error!! press AC";
updateDisplay();
}
function backspacePressed(){
if(isOperatorPressed && number2.length>0){
number2 = number2.substring(0,number2.length-1);
}else if(number1.length>0){
number1 = number1.substring(0,number1.length-1);
}
updateDisplay();
}
function DecimalPressed(){
if(!isDecimalPressed){
isDecimalPressed = true;
if(isOperatorPressed){number2+="." }
else{number1+="."}
updateDisplay();
}
}
function signPressed(){
if(isOperatorPressed){
let number = Number(number2)*(-1);
number2= ""+number;
}else{
let number = Number(number1)*(-1);
number1= ""+number;
}
updateDisplay();
}