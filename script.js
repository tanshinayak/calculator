let numbers = document.querySelectorAll(".numbers");
  let operators = document.querySelectorAll(".operators");
 let resultscreen=document.getElementById("result");
 let equalsign=document.getElementById("equal");
 let clear=document.getElementById("clear");
 let deleteop=document.getElementById("delete");
 let display=document.getElementById("display");
 let operation=undefined;
 let num;
 function calculate()
 {let result=0;
   let num2=Number(resultscreen.innerHTML);
   switch(operation){
     case "+":result=num+num2;
     alert(resultscreen.innerHTML); 
     break;
     case "-": result=num-num2;
     break;
     case "x": result=num*num2;
     break;
     case "/": result=num/num2;
     break;
     case "1/x": result=1/num;
     break;
     case "^": result=Math.pow(num,num2);
     break;
     default: return;
   }
   resultscreen.innerHTML=result;
 };
 function clearoperation()
 {
   resultscreen.innerHTML="";
   display.innerHTML="";
   operation=undefined;
 };
 function deleteoperation()
 {
   let num=Number(resultscreen.innerHTML);
   resultscreen.innerHTML=Math.floor(num/10);
 };
 numbers.forEach((num)=>{num.addEventListener("click",
 function(){resultscreen.innerHTML=resultscreen.innerHTML+Number(num.innerHTML)})});
 operators.forEach((op)=>{op.addEventListener("click",
 function(){num=Number(resultscreen.innerHTML);
display.innerHTML=resultscreen.innerHTML+op.innerHTML;
resultscreen.innerHTML="";
operation=op.innerHTML;
//calculate();
})})
 clear.addEventListener("click",clearoperation);
deleteop.addEventListener("click",deleteoperation);