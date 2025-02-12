// Function that handles the Yes/No buttons
function answerQuestion(answer) {
    if (answer === 'yes') {
        alert('Yay! Du bist meine Valentine! 💖');
        document.getElementById("yesButton").style.display = "none";
    } else {
        moveButton()
        
    }

}

function moveButton() {
    var button = document.getElementById("noButton");
    var maxWidth = window.innerWidth - 100;  // Ensure button stays within viewport
    var maxHeight = window.innerHeight - 50;

    var newX = Math.floor(Math.random() * maxWidth);
    var newY = Math.floor(Math.random() * maxHeight);

    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}