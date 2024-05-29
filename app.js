var userInput = prompt("(Total Number 550) Enter Your Name")
var newNumber = userInput / 550 * 100;

if (userInput >= 440) {
    alert("Congratulation You Got A-One Position")
    alert(Math.round(newNumber))
} else if (userInput >= 380) {
    alert("Congratulation You Got A Position")
    alert(Math.round(newNumber))
} else if (userInput >= 330) {
    alert("Congratulation You Got B Position")
    alert(Math.round(newNumber))
} else if (userInput >= 275) {
    alert("Congratulation You Got c Position")
    alert(Math.round(newNumber))
} else if (userInput >= 220) {
    alert("Congratulation You Got c Position")
    
} else if (userInput >= 200) {
    alert("unfortunately you are failed")
    alert(Math.round(newNumber))
}

else {
    alert("Invalid")
}

