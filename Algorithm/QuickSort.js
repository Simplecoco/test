function quickSort(arr) {
  if(arr.length <= 1){
    return arr;
  }
  var mid = arr[Math.floor(arr.length/2)];
  var leftArr = [];
  var rightArr = [];
  arr.forEach(function (item) {
    if(item < mid){
      leftArr.push(item);
    }
    if(item > mid){
      rightArr.push(item);
    }
  });
  return quickSort(leftArr).concat(mid,quickSort(rightArr));
}


// 4月15日练习    
// 时间复杂度 最好情况 O(nlogn) 最差情况 n^2
// 理解为二叉树最后一层有n个元素，每一个为O(1), 则 n = 2^(x-1), 算出层数 x = log(2)(n) + 1 = log(n) + 1
// 每一层复杂度都为 O(n), 则 O(n)log(n) + 1 = O(nlogn)
// 上面解释为知乎看到的解释
function quickSort2 (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var flag = arr[Math.floor(arr.length/2)];
    var leftArr = [];
    var rightArr = [];
    arr.forEach(function(item, index) {
        if (item < flag) {
            leftArr.push(item);
        }
        else if (item > flag) {
            rightArr.push(item);
        }
    });
    return quickSort2(leftArr).concat(flag, quickSort2(rightArr));
}