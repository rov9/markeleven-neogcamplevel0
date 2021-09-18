const userBirthday=document.querySelector("#user-birthday");
const luckyNumber=document.querySelector("#lucky-number");
const calculateNumber=document.querySelector("#calculate-number");
const outputMessage=document.querySelector("#output");

function compareValues(sum,luckyNumber) {
if(sum%luckyNumber===0){
outputMessage.innerText="Your birthday is lucky 🤩";
}
else{
outputMessage.innerText="Your birthday is not that lucky 🙄";
}
}


function checkBirthdayIsLucky(){
 const dob=userBirthday.value;
 const sum= calculateSum(dob);
 if(luckyNumber.value && dob)
 compareValues(sum,luckyNumber.value);
 outputMessage.innerText="Please enter both the fields 😠";
}


function calculateSum(dob){
dob=dob.replaceAll("-","");
let sum=0;
for(let index=0;index<dob.length;index++){
 sum=sum+Number(dob.charAt(index));
}
return sum;
}
calculateNumber.addEventListener('click',checkBirthdayIsLucky)


