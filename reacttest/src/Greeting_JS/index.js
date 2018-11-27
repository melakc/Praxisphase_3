
function changeColorOfInput(event) {

    var input = document.getElementById("nameInput");
    var inputButton = document.getElementById("buttonSend");
    console.log(event.key + "=>" + String.fromCharCode(event.keyCode));
    if (input.value == "") {
        input.style.backgroundColor = "#aac4f1";
        inputButton.disabled = true;
    }
    else {
        input.style.backgroundColor = "#FFCDD2";
        inputButton.disabled = false;
    }
}

function ButtonSend() {
    var input = document.getElementById("nameInput");
    alert(`Hallo, ${input.value}`);

}

function onKeyUp(event) {
    changeColorOfInput(event);
    countDownRemainingChars();
}

function countDownRemainingChars() {
    var input, countRemaining, counter, charsRemainingText;
    var inputElement = document.getElementById("nameInput");
    input = inputElement.value;
    var maxlength = inputElement.getAttribute("maxlength");
    console.log(`maxLength: ${maxlength}`);
    counter = (maxlength - (input.length));
    countRemaining = document.getElementById("charsLeft");
    charsRemainingText = document.getElementById("charsRemaining");
    countRemaining.textContent = counter;
    if (counter <= maxlength && counter > 0) {
        countRemaining.style.color = "green";
        charsRemainingText.style.color = "green";
    }
    else {
        countRemaining.style.color = "red";
        charsRemainingText.style.color = "red";
    }

}




