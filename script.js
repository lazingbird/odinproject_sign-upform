const logo = document.querySelector("#logo-container")

function playMusic(){
    backgroundSound.play()
}

function checkPass(form){
    password = form.pw.value;
    confirmPassword = form.confirmPw.value;

    if(password != confirmPassword){
        alert("Passwords do not match")
    }

}

logo.addEventListener("click", playMusic)
