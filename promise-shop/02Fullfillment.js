'use strict';
var promise = new Promise.resolve(setTimeout("FULFILLED"),300);
console.log(promise)