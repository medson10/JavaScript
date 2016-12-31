var trail = [];

for (var i = 0; i < 8; i++) {
  var node = document.createElement("div");
  node.className = "trail";
  document.body.appendChild(node);
  trail.push(node);
}

var current = 0;

addEventListener("mousemove", function(event) {
  var t = trail[current];
  t.style.left = (event.pageX - 3) + "px";
  t.style.top = (event.pageY - 3) + "px";
  current = (current + 1) % trail.length;
});
