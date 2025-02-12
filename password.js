window.config = {
    correctPassword: "bWljaGVsbGU=" 
};

function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var correctPassword = window.config.correctPassword;

    if (btoa(password) === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("firstbackground").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}
function checkEnter(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
}