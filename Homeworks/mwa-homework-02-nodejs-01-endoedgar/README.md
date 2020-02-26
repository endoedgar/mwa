# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
Answer: Using setImmediate makes your code run in the check queue. That is going to be run after some queues are run first (for example poll queue). It makes sense to use setImmediate instead of setTimeout when you want some IO code to be run before your async code.
2. Explain the difference between `process.nextTick` and `setImmediate`?
Answer: nextTick is going to be run on nextTick queue. It is run before all the queues inside the event loop. setImmediate is not like that as it is run after a lot of queues (for example: timers, pending callbacks, idle, poll and even macrotaks).
3. Name 10 core modules that Node provides by default.
Answer: According to nodejs.org (https://nodejs.org/api/modules.html), node core modules are located inside src/lib directory, some of then are:
⋅⋅* http
⋅⋅* url
⋅⋅* querystring
⋅⋅* path
⋅⋅* fs
⋅⋅* util
⋅⋅* os
⋅⋅* stream
⋅⋅* crypto
⋅⋅* util

## Exercise 02
Complete the necessary Node code to make `pluck(value)` method work asynchronously, pluck will return a new array after removing the value.  
```javascript
// your Node code here...
console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// [1,2,4,5,6,7,8]
// [1,2,3,4,5,7,8]
```
**Practice:** Try to solve the exercise in many ways, especially using the `Promise` object.
