// function removeRepetition(arr) {
//   if(!Array.isArray(arr)){
//     return;
//   }
//   var set = new Set(arr);
//   var newArr = set.from(set);
//   return newArr;
// }

function removeRepetition(arr) {
  var hashTb = {};
  if(Array.prototype.filter){
    return arr.filter(function (item) {
      if(hashTb[item]){
        return false;
      }
      hashTb[item] = 1;
      return true;
    });
  }
}