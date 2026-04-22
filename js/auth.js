function signup() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = {
        username,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful");

    window.location.href = "login.html";
}


function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser) {
        alert("No user found. Signup first.");
        return;
    }

    if(username === storedUser.username && password === storedUser.password) {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid credentials");

    }
}


function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";

}


if(window.location.pathname.includes("dashboard.html")) {

    if(localStorage.getItem("loggedIn") !== "true") {

        alert("Login required");

        window.location.href = "login.html";

    }
}