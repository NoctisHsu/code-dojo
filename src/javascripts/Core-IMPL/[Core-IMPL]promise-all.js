// function promiseAll() {
//   if (!arguments.length) {
//     return Promise.resolve(null);
//   }
//   var args = arguments;
//   if (args.length === 1 && Array.isArray(args[0])) {
//     args = args[0];
//   }
//   var count = 1;
//   var total = args.length;
//   var result = [];
//   function resolveHandler(val, cb) {
//     result.push(val);
//     if (count === total) {
//       cb(result);
//     }
//     count++;
//   }
//   return new Promise(function (resolve, reject) {
//     for (var i = 0; i < total; i++) {
//       Promise.resolve(args[i])
//         .then(function (value) {
//           resolveHandler(value, resolve);
//         })
//         .catch(function (error) {
//           reject(error);
//         });
//     }
//   });
// }
Promise.all = (promises) => {
  let resolved = 0;
  let results = [];
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      promise
        .then((result) => {
          results.push(result);
          if (++resolved === promises.length) resolve(results);
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

let getPromise = () => 
  new Promise((resolve, reject) => {
    console.log('start');
    setTimeout(() => {
      resolve('done');
    }, 1000)
});

let run = async () => console.log(
    await Promise.all([getPromise(), getPromise(), getPromise()])
);

run(); // let's do this!