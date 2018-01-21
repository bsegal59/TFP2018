'use strict';

var promise = new Promise(function(fulfill,reject){
    setTimeout(()=>console.log('FULFILLED!'),300)
})
promise.then(fulfill);
console.log(promise);
