// window.onload=function(){

// }
// window.addEventListener("click",() => {

// });
function InputField() {

    // var input = document.getElementById("nameInput").value;
    // var inputColor = input.addEventListener("change", Inputfield);
    // const greeting = "";
    // // wenn Input eingabe > 0
    // if (input === null) {
    //     input.style.backgroundColor = "#FFCDD2";

    // }
    // // wenn Input eingabe <= 0
    // else {
    //     input.style.backgroundColor = "#aac4f1";
    // }
    // document.getElementById("nameInput").style.background = "#aac4f1";
    var change = false;
    var input = document.getElementById('nameInput');
    input.addEventListener("change", () => {
        input.onchange = function () {
            if (!change) {

                input.style.background = "#aac4f1";
                change = true;
            }
            else {
                input.style.background = "#FFCDD2";
            }
        }
    });
      
}
function ButtonSend() {
    const greeting = "";
    alert("Hallo, ", { greeting });
}

