//your JS code here. If required.
document.getElementById("openModalBtn").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});