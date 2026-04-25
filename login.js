function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user === "admin" && pass === "1234"){
        document.getElementById("message").innerText = "Login Successful!";

        // redirect to home page
        window.location.href = "index.html";
    } else{
        document.getElementById("message").innerText= "Invalid username or password";
    }
}