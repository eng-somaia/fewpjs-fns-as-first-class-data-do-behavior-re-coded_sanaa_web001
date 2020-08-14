/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick());

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let n = "text";
function greet(n){
  let ip = n.split(':');
  let x = parseInt(ip[0],10);
  let result;
  if (x < 12){
  return console.log("Good Morning");
  }
  else if (x >= 12 && x < 17){
   result = console.log("Good Afternoon");
  }
  else{ 
   result = console.log("Good Evening");
  }
  return result;
}
/* Write your implementation of displayMessage() */
  let testContent = "TEST";
   function   displayMessage(testContent){
      let content = document.getElementById("greeting").innerText = testContent;   }