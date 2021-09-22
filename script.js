// Login Assignment by Will

// Event Listener
document.getElementById("loginBtn").addEventListener("click", login);

// Event Function
function login() {
    let username = document.getElementById("userIn").value;
    let password = document.getElementById("passIn").value;

    if (username === "admin" && password === "1234") {
        alert("Login Successful");
    } else if(username === "" && password === ""){
        alert("Please enter your username and password")
    } else if(username !== "admin"){
        alert("Invalid Username")
    } else if(password !== "1234") {
        alert("Invalid Password")
    }
}
