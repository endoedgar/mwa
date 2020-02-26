// your Node code here...

Array.prototype.pluck = function() {
    console.log(this)
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');