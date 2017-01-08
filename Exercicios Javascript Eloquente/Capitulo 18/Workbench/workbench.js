document.getElementById('button').addEventListener('click', function() {
  var code = document.getElementById('code').value;
  var outputNode = document.getElementById('output');
  try {
    var result = new Function(code)();
    outputNode.innerText = String(result);
  } catch (e) {
    outputNode.innerText = 'Error: ' + e;
  }
});
