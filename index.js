// Your code goes heredocument.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", function() {
        let el = document.getElementById("text")
        el.innerHTML = "This is really cool!"
      });
       
      console.log(
        "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
      );