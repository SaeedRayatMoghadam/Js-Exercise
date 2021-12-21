var i = 0;
var text = "Saeed RayatMoghadam";

var element = document.querySelector(".progressBar");
var width = 10;

function typing() {
  var timer = setInterval(move, 100);
  function move() {
    if (width < 100) {
      width++;
      element.style.width = width + "%";
      element.innerHTML = width + "%";
    } else {
      clearInterval(timer);
    }
  }

  if (i < text.length) {
    var p = (document.getElementById("demo").innerHTML += text.charAt(i));
    i++;
    setTimeout(typing, 80);
  }
}

window.onscroll = function () {
  fade();
};

function fade() {
  var btn = document.querySelector(".btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    btn.style.display = "block";
  else btn.style.display = "none";
}


