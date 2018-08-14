function deepCopy(a, b) {
  for(var i in b){
    if(typeof b[i] === 'object' && b[i] !== null ){
      a[i] = Array.isArray(b[i]) ? [] : {} ;
      deepCopy(a[i],b[i]);
    }
    else{
      a[i] = b[i];
    }
  }
}