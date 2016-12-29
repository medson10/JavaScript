function byTagName(node, tagName) {
  var result = [];
  tagName = tagName.toUpperCase();

  function search(node) {
    for(var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) {
        if (child.nodeName ===  tagName) {
          result.push(child);
        }
        search(child);
      }
    }
  }
  search(node);
  return result;

}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2
