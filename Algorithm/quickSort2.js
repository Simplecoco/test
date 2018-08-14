 var quick = function (array, left, right) {
     var index;
     if (array.length > 1) {
         index = partition(array, left, right);
         if (left < index) {
             quick(array, left, index - 1);
         }
         if (right > index) {
             quick(array, index, right);
         }
     }
 }
 
 this.quick = function () {
     quick(array, 0, array.length - 1);
 }
 
 