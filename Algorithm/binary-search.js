function binarySearch(arr, key, low, high) {
  if(!Array.isArray(arr)){
    return;
  }
   high = high || arr.length;
   low = low || 0;
  if (high < low) {
    return -1;
  }
  var mid = Math.floor((low + high)/2);
  if(key === arr[mid]){
    return mid;
  }
  if(key < arr[mid]){
    return binarySearch(arr, key, low, mid);
  }
  if(key > arr[mid]){
    return binarySearch(arr, key, mid+1, high);
  }
}