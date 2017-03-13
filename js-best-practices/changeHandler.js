var coins = {
     'p': 1,
     'n': 5,
     'd': 10,
     'q': 25
   };

var coinsByAmount = ['q', 'd', 'n', 'p'];

module.exports = {
  getAmount: function(coinType) {
    if(!coins.hasOwnProperty(coinType)){
      throw new Error('Unrecognized coin ' + coinType);
    }
    return coins[coinType];
  },
  // Initial solution

  // convertToChange: function(valor) {
  //   var change = [];
  //   if(valor >= coins['q']) {
  //     for(var i = 1; i <= Math.floor(valor / coins['q']); i++) {
  //       change.push('q');
  //     }
  //     valor = valor % coins['q'];
  //   }
  //   if(valor >= coins['d']) {
  //     for(var i = 1; i <= Math.floor(valor / coins['d']); i++) {
  //       change.push('d');
  //     }
  //     valor = valor % coins['d'];
  //   }
  //   if(valor >= coins['n']) {
  //     for(var i = 1; i <= Math.floor(valor / coins['n']); i++) {
  //       change.push('n');
  //     }
  //     valor = valor % coins['n'];
  //   }
  //   if(valor >= coins['p']) {
  //     for(var i = 1; i <= Math.floor(valor / coins['p']); i++) {
  //       change.push('p');
  //     }
  //     valor = valor % coins['p'];
  //   }
  //   return change;
  // }

  //Official solution
  convertToChange: function(amount) {
      var change = [];
      for(var i in coinsByAmount){
        var coinType = coinsByAmount[i];
        var coinValue = coins[coinType];
        while(amount >= coinValue){
          change.push(coinType);
          amount -= coinValue;
        }
      }
    return change;
  }
};
