document.getElementById("clickMe").addEventListener("click", function() {
    let surpriseMessage = document.getElementById("surpriseMessage");
    surpriseMessage.style.display = "block";
    setTimeout(function() {
        surpriseMessage.style.display = "none";
    }, 5000);
});
