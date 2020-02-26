// your Node code here...
Array.prototype.pluck = function(value) {
    let that = this;
    setImmediate(() => console.log(that.filter((v) => v != value)));
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');