function verify(regexp, yes, no) {
// Ignore unfinished tests
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}

verify(/ca(r|t)/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop"]);


verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s(\.|:|;|,)/,
    ["bad punctuation ."],
    ["escape the dot"]);

verify(/\b[^\s]\w{6,}\b/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);
