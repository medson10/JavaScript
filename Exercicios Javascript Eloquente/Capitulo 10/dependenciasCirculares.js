//Nao tenho certeza quanto a essa solucao

function require(modul) {
  var exports = require(require.cache);
  if (modul in require.cache) {
    return require.cache[modul];
  }
  var exports = {}, mod = {exports: exports};
  var code = new Function("exports, module", readFile(modul));
  code(exports, mod);
  require.cache[modul] = module.exports;
  return module.exports;
}

require.cache = Object.create(null);
