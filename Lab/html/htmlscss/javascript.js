function togglePassword() {
    let password = document.getElementById("password");
    let button = document.getElementById("toggleBtn");

    if(password.type === "password"){
        password.type = 'text'
        button.onclick = (button.textContent = "Show")
        
    }
    else{
        password.type = "password"
        button.onclick = (button.textContent = "Hide")
    }
}
function toggleTitle(){
    let title = document.getElementById("title")
    title.textContent = "Changed title"
}

