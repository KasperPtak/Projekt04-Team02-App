    
    var insKnap = document.getElementById('indstillinger')

    function openSettings() {

        insKnap.style.display = "block"

    }

    function closeSettings() {

        insKnap.style.display = "none"

    }




    
    
    // document.addEventListener(
    //     "click",
    //     function (event) {
    //         // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    //         if (
    //             !event.target.closest("#indstillinger")
    //         ) {
    //             closeSettings();
    //         }
    //     },
    //     false
    // );
    
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //       insKnap.style.display = "none";
    //     }
    //   }
