function add (x) {
    var total = 0;
    total += x;
    if (arguments.length === 0) {
        return total;
    }
    return function _add (y) {
        total = x + y;
    }
}