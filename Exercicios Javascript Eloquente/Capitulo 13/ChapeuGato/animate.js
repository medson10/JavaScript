//Variables
var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0;
var lastTime = null;

function animate(time) {
  if(lastTime != null) {
    angle += (time - lastTime) * 0.0015;
  }
  lastTime = time;

  // Cat Animation
  cat.style.top = (Math.sin(angle) * 50 + 40) + "px";
  cat.style.left = (Math.cos(angle) * 60 + 80) + "px";

  // Hat Animation
  var angleHat = angle + Math.PI;
  hat.style.top = (Math.sin(angleHat) * 50 + 80) + "px";
  hat.style.left = (Math.cos(angleHat) * 160 + 20) + "px";

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
