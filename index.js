

 
var varCounter = 0;
var myVar;
var check = true;
var max=45;

$(document).ready(function () {

  $("#reset").click(function(){
  
    document.getElementById("reset").disabled = true;
    varCounter=0;
    myStartFunction();
    
  
  });

  $("#num45").click(function(){
  
    document.getElementById("numchange").innerHTML = "45";
    max =45;

  
  });

  $("#num55").click(function(){
  
    document.getElementById("numchange").innerHTML = "55";
    max =55;
    
   
  
  });

  
  myStartFunction();

function myStartFunction() {
  // Update the count down every 1 second
  myVar =  setInterval(function() {

    
      RandomNumBer();
  
      if(varCounter <= 5) {
        varCounter++;
        /* your code goes here */
        } else {
          document.getElementById("reset").disabled = false;
              clearInterval(myVar);
              
        }
    

    
  



 
}, 100);
}


function RandomNumBer() {
  let number = getRndInteger();

    
  document.getElementById("NumberRand_1").innerHTML = number;
  number = getRndInteger();
  document.getElementById("NumberRand_2").innerHTML = number;
  number = getRndInteger();
  document.getElementById("NumberRand_3").innerHTML = number;
  number = getRndInteger();
  document.getElementById("NumberRand_4").innerHTML = number;
  number = getRndInteger();
  document.getElementById("NumberRand_5").innerHTML = number;
  number = getRndInteger();
  document.getElementById("NumberRand_6").innerHTML = number;
  
  




}



function getRndInteger() {
  let number =  Math.floor(Math.random() * (max - 1 + 1) ) + 1;
  if(number.toString().length<=1)
  {
    number  =  "0"+number;
  }

  return number;
}





});