// your Node code here...
// this way, you have to put then console.log
Array.prototype.pluck = function(value) {
    let that = this;
    return new Promise(function(resolve, reject) {
        resolve(that.filter((v) => v != value));
    });
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(3).then(console.log);
[1,2,3,4,5,6,7,8].pluck(6).then(console.log);
console.log('end');