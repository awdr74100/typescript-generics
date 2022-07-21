// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergeObj);
