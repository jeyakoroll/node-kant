// какой порядок вывода в console ?

// microqueue = [promise, ];
// tasksqueue = [setTimeout, setInterval, setTimeout];

const intervalId = setInterval(() => {
  console.log('setInterval'); // 2 iteration 1 call | // 5 iteration 1 call
}, 10);

setTimeout(() => {
  console.log('setTimeout 1'); // 3 iteration 1 call

  const promise = new Promise((resolve, reject) => {
    resolve('then 4');
  });

  promise
    .then((value) => {
      console.log(value); // 3 iteration 2 call

      setTimeout(() => {
        console.log('setTimeout 2'); // 6 iteration 1 call
        clearInterval(intervalId);
      }, 10);
    });
}, 10);

const promise = new Promise( resolve => {
  resolve('then 1');
});

promise
  .then((value) => {
    console.log(value); // 1 iteration 1 call
    return 'then 2';
  })
  .then((value) => {
    console.log(value); // 1 iteration 2 call

    return new Promise( resolve => {
      setTimeout(resolve, 10, 'then 3');
    });
  })
  .then((value) => {
    console.log(value); // 4 iteration 1 call
  });

/* 
then 1
then 2
object Promise // WRONG
setInterval
setTimeout 1
then 4
... // WRONG
... // WRONG
setTimeout 2
*/


/*
then 1
then 2
setInterval
setTimeout 1
then 4
then 3
setInterval
setTimeout 2
*/
