
var btn = document.getElementById("participateBtn")
var participants = document.getElementById("participantNumber")

var deltagerSum = 102;

participants.innerHTML = deltagerSum + " " + "Deltagere";


function colorChange () {
    
    if (btn.style.color === "var(--darkGreen)") {
        btn.style.color = "var(--offWhite)"
        btn.style.backgroundColor = "var(--darkGreen)"
        btn.innerHTML = "Deltag";

        participants.innerHTML = deltagerSum + " " + "Deltagere";

    } 
    else {
        btn.style.color = "var(--darkGreen)";
        btn.style.backgroundColor = "var(--yellow)";
        btn.innerHTML = "Deltager";

        participants.innerHTML = deltagerSum + 1 + " " + "Deltagere";
    }


}

