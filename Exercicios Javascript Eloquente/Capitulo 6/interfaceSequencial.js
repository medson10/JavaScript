function logFive(array) {
  for (var cont = 0; cont < 5; cont++) {
    if(!array.next()) {
      break;
    }
    else {
      console.log(array.valor());
    }
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
  this.current = from - 1;
}

ArraySeq.prototype.next = function() {
  if(this.pos + 1 >= this.array.length) {
    return false;
  }
  else {
    this.pos++;
    return true;
  }
};

RangeSeq.prototype.next = function() {
  if(this.current >= this.to) {
    return false;
  }
  else {
    this.current++;
    return true;
  }
};

ArraySeq.prototype.valor = function() {
  return this.array[this.pos];
};

RangeSeq.prototype.valor = function() {
  return this.current;
};

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
