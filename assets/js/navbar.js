function ddshow() {
    document.getElementById("dropdown").style.display = "block";
    document.getElementById("prev").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("slideshow-div").style.display = "none";
}

// Hide dropdown menu
function ddhide() {
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("prev").style.display = "block";
    document.getElementById("next").style.display = "block";
    document.getElementById("slideshow-div").style.display = "block";
}