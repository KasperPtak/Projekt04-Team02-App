

var email = document.getElementById('email-input')
var adgangskode = document.getElementById('adgangskodeInput')
var bekraeft = document.getElementById('bekraeft-adgangskode-input')
var stjerne = document.getElementById('stjerne')
var checkbox = document.getElementById('checkbox')

function opret(){
    
    console.log(checkbox.checked)
    
    if( adgangskode.value.length == 0 && email.value.length == 0 && bekraeft.value.length == 0 && checkbox.checked == false){
        console.log("adganskode og email og bekræft er tom");
        stjerne.style.display = "block"
    }
    else {
        stjerne.style.display = "none"
        // window.location =
    }
}

