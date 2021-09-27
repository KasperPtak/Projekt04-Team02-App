
// var er es6 
// const/let er es7 

var emails = [
    "Mariamail@gmail.com",
    "Kaspermail@gmail.com",
    "Trinemail@gmail.com",
    "Nannamail@gmail.com"
]

var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');

function checklogin() {

    // tjekker om der er skrevet noget i input felterne
    if (loginEmail.value.length == 0 && loginPassword.value.length == 0) {
        alert("skriv noget pls")

    }

    // tjekker om der er skrevet det rigtige password
        else if (loginPassword.value == "password") {

            // tjekker om der er skrevet den rigtige email
            switch (loginEmail.value) {

                case emails[0]:
                    alert(emails[0] + " er nu logget ind")
                    window.location = "./dine-begivenheder.html";
                    break;
                case emails[1]:
                    alert(emails[1] + " er nu logget ind")
                    window.location = "./dine-begivenheder.html";
                    break;
                case emails[2]:
                    alert(emails[2] + " er nu logget ind")
                    window.location = "./dine-begivenheder.html";
                    break;
                case emails[3]:
                    alert(emails[3] + " er nu logget ind")
                    window.location = "./dine-begivenheder.html";
                    break;

                default: alert("Din email er forkert");
                    // Hvis emailen er skrevet forkert
                    break;
            }

        } else {
            // Hvis password er skrevet forkert
            alert("Dit password er forkert")

        }

}





    // href="../views/registrer.html"



    // if (loginEmail.value.length == 0 && loginPassword.value.length == 0) {
    //     alert("skriv noget pls")

    // }
    // else {

        // if (loginEmail.value == emails[0]) {
        //     console.log(emails[0] + " har logget ind");

        // }
        // if (loginEmail.value == emails[1]) {
        //     console.log(emails[1] + " har logget ind");

        // }
        // if (loginEmail.value == emails[3]) {
        //     console.log(emails[3] + " har logget ind");

        // }
        // if (loginEmail.value == emails[4]) {
        //     console.log(emails[4] + " har logget ind");

        // }