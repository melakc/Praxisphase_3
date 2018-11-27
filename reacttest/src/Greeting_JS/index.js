
function InputField(event) {

    var input = document.getElementById("nameInput");
    console.log(event.key + "=>" + String.fromCharCode(event.keyCode));
    if (input.value == "") {
        input.style.backgroundColor = "#aac4f1";
    }
    else {
        input.style.backgroundColor = "#FFCDD2";
    }
}

function ButtonSend() {
        var input = document.getElementById("nameInput").value;
        alert(`Hallo, ${input}`);
}
//  AUsgabe der noch übrigen erlaubten Zeichen=> zählt runter 
function RemainingChars() {
    // characterCount(document.getElementById('nameInput'), {
    //     max:10,
    //     output:document.getElementById('charsLeft'),
    // })
    // $(function(){
    //     $('#nameInput').on("change", function(){
    //         var count=$("input:text[value='']").length;
    //         alert(count);
    //     });
    // });
    // $(document).ready(function() {
    //     var text_max = 10;
    //     $('input').html(text_max + ' characters remaining');

    //     $('input').on('keyup',function() {
    //         var text_length = $('input').val().length;
    //         var text_remaining = text_max - text_length;

    //         $('input').html(text_remaining + ' characters remaining');
    //     });
    // });
}



