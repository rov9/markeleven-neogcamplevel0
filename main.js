/*dateOfBirth,luckyNumber,checkNumberButton*/



   const userBirthday=document.querySelector("#user-birthday");
   const luckyNumber=document.querySelector("#lucky-number");
   const clculateNumber=document.querySelector("#calculate-number");
const output=document.querySelector("#output");

function checkBirthdayIsLucky(){
    const dob=userBirthday.value;
    const sum= calculateSum(dob);
    console.log(sum);
}


function calculateSum(dob){
dob=dob.replceAll("-","");
let sum=0;
for(let index=0;index<dob.length;index++){
    sum=sum+Number(dob.charAt(index));
}
return sum;
}


output.addEventListener('click',checkNumberIsLucky())

