

var email = document.getElementById('email-input')
var adgangskode = document.getElementById('adgangskodeInput')
var bekraeft = document.getElementById('bekraeft-adgangskode-input')
var stjerne = document.getElementById('stjerne')

function opret(){
    
    
    if( adgangskode.value.length == 0 && email.value.length == 0 && bekraeft.value.length == 0){
        console.log("adganskode og email og bekræft er tom");
        stjerne.style.display = "block"
    }
}

