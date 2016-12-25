function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

function TextCell(text) {
  this.text = text;
}

TextCell.prototype.minWidth = function() {
  return this.text.length;
};

TextCell.prototype.minHeight = function() {
  var number = 1;
  for(var cont = 0; cont < this.text.length; cont++) {
    if(this.text[cont] === "\n") {
      number += 1;
    }
  }
  return number;
};

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
