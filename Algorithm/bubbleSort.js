// function bubbleSort(arr) {
//   if(!Array.isArray(arr)){
//    return;
//   }
//   var _arr = arr.slice(0);
//   var len = _arr.length;
//   var pos = true;
//   while(pos){
//     pos = false;
//     for(var i=0; i<len;i++){
//       if(_arr[i]>_arr[i+1]){
//         _arr[i] = _arr[i] + _arr[i+1];
//         _arr[i+1] = _arr[i] - _arr[i+1];
//         _arr[i] = _arr[i] - _arr[i+1];
//         pos = true;
//       }
//     }
//   }
//   return _arr;
// }

// function bubbleSort(arr) {            //此方法错误
//   if(!Array.isArray(arr) || Array.prototype.slice){
//     return;
//   }
//   // var _arr = arr.slice(0);
//   var pos = true;
//   if(!pos){
//     return arr;
//   }
//   pos = false;
//   var newArr = arr.map(function (item,index,arr) {
//     if(!isNaN(item)){
//       return;
//     }
//     if(arr[index] > arr[index+1]){
//       arr[index] =  arr[index] + arr[index+1];
//       arr[index + 1] = arr[index] - arr[index+1];
//       arr[index] = arr[index] - arr[index+1];
//       pos = true;
//     }
//   });
//   bubbleSort(newArr);
// }

function bubbleSort(arr) {
  var pos = true;
  var _arr = arr.slice(0);
  while(pos){
    pos = false;
    _arr.forEach(function (item,index,arr) {
      if(arr[index] > arr[index+1]){
        arr[index] =  arr[index] + arr[index+1];
        arr[index + 1] = arr[index] - arr[index+1];
        arr[index] = arr[index] - arr[index+1];
        pos = true;
    }
    })
  }
  return _arr;
}