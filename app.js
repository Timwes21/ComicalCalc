const text = document.getElementById("textbox");
const ianButton = document.getElementById("ian");
const body = document.getElementById("body-yody")

function addToInput(a){
    text.value += a;
}

function clearInput(){
    text.value = "";
    console.log("Button clicked")
}

function equalsTo(){
    text.value = "Thats a tuffy"
}

ianButton.addEventListener("click", function() {
    const image = document.createElement("img")
    image.src = "thelegend.jpg"
    body.appendChild(image)
})