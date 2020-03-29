const fs = require('fs');

// tasks queue      []
// microtasks queue []

console.time('loop');
let a = 0;
for (let i = 0; i < 10000; i++) {
    a++;
}
console.timeEnd('loop')


console.log('start');

fs.readFile(__filename, (err, content) => {
    console.log('read file');
});

setImmediate(() => {
    console.log('immediate');
});

new Promise(resolve => {
    console.log('promise create');
    resolve('promise than');
}).then(value => console.log(value));

process.nextTick(() => {
    console.log('nextTick1');
});

console.log('end');
