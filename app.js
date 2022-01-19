var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input")
var outputDiv = document.querySelector("#output")


function clickHandler () {

    outputDiv.innerText = "ccdfcdc " + txtInput.value


}


btnTranslate.addEventListener("click" , clickHandler )


