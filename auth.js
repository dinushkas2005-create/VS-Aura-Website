// SIGN UP
function signup(){
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;

    if(user === "" || pass === ""){
        document.getElementById("msg").innerText = "Fill all fields!";
        return;
    }

    // save to localStorage
    localStorage.setItem(user, pass);

    document.getElementById("msg").innerText = "Account created!";
}

// LOGIN
function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let storedPass = localStorage.getItem(user);

    if(storedPass === pass){
        document.getElementById("message").innerText = "Login Successful!";
        window.location.href = "index.html";
    } else{
        document.getElementById("message").innerText = "Invalid login";
    }
}