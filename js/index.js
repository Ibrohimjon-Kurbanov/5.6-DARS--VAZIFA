// ### Massivlar bilan ishlash

// 1-masala

// function greet(arg1, arg2) {
//   return arg1.filter(function (value) {
//     return arg2.includes(value);
//   });
// }

// let arr1 = ["olma", "banan", "anor", "mandarin", "gilos", "behi"];
// let arr2 = ["anor", "shaftoli", "anjir", "mandarin", "banan"];
// console.log(greet(arr1, arr2));

// 2-masala

// function greet(arg, koeffitsiyent) {
//   return arg.map(function (value) {
//     return value * koeffitsiyent;
//   });
// }

// let arr = [1, 2, 3, 4];
// let koeffitsiyent = 2;
// console.log(greet(arr, koeffitsiyent));

// 3-masala

// function greet(arg) {
//   let sum = 0;
//   arg.forEach(function (value) {
//     if (value > 0) {
//       sum += value;
//     }
//   });
//   return sum;
// }

// let arr = [1, 2, 3, 4, 5, -9, -12];

// console.log(greet(arr));

// 4-masala

// function greet(arg) {
//   return arg.sort(function (a, b) {
//     return (a === 0) - (b === 0);
//   });
// }

// let arr = [1, 2, 0, 3, 0, 4, 5];

// console.log(greet(arr));

// 6-masala

// let arr = [1, 2, ["salom"], [3, 4]];
// let res = arr.flat();
// console.log(res);

// 7-masala

// function greet(arg1, arg2) {
//   const concatArr = arg1.concat(arg2);
//   let res = [];

//   for (let i = 0; i < concatArr.length; i++) {
//     if (res.indexOf(concatArr[i]) === -1) {
//       res.push(concatArr[i]);
//     }
//   }

//   return res;
// }

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 3, 7, 4, 8];

// console.log(greet(arr1, arr2));

// 8-masala

// function greet(arg) {
//   let res1 = [];
//   let res2 = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//       res1.push(arg[i]);
//     } else {
//       res2.push(arg[i]);
//     }
//   }
//   return {
//     res1,
//     res2,
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = greet(arr);
// console.log(res.res1);
// console.log(res.res2);

// 9-masala
// function greet(arr, value) {
//   return arr.includes(value);
// }

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(greet(arr, 5));

// 10-masala

// function greet(arg) {
//   let max = Math.max(...arg);
//   let min = Math.min(...arg);

//   return { min, max };
// }

// let arr = [3, 4, 5, 6, 10, 9];

// console.log(greet(arr));

// ### Obyektlar bilan ishlash

// 11-masala

// function greet(arg) {
//   let sortKeys = Object.keys(arg).sort();
//   let sortObj = {};

//   for (let i = 0; i < sortKeys.length; i++) {
//     sortObj[sortKeys[i]] = arg[sortKeys[i]];
//   }

//   return sortObj;
// }
// let obj = {
//   c: 3,
//   a: 1,
//   b: 2,
// };

// console.log(greet(obj));

// 12-masala

// function greet(arg) {
//   let key = Object.keys(arg);
//   let value = Object.values(arg);
//   return { keys: key, values: value };
// }

// let user = {
//   name: "John",
//   age: 28,
//   weight: 70,
// };

// let res = greet(user);

// console.log(res.keys);
// console.log(res.values);

// 13-masala

// function greet(arg1, arg2) {
//   return { ...arg1, ...arg2 };
// }

// let obj1 = { name: "John", age: 26 };
// let obj2 = { job: "developer", weight: 70 };

// let res = greet(obj1, obj2);

// console.log(res);

// 14-masala

// function greet(arg) {
//   let sum = 0;

//   for (let key in arg) {
//     if (typeof arg[key] == "number") {
//       sum += arg[key];
//     }
//   }

//   return sum;
// }

// let obj = {
//   a: 2,
//   b: 3,
//   c: 5,
//   d: 10,
// };

// console.log(greet(obj));

// 15-masala

// function greet(arg, oldKey, newKey) {
//   let res = {};

//   for (let key in arg) {
//     if (key === oldKey) {
//       res[newKey] = arg[key];
//     } else {
//       res[key] = arg[key];
//     }
//   }

//   return res;
// }

// let user = {
//   name: "John",
//   age: 28,
//   weight: 70,
// };

// console.log(greet(user, "name", "username"));

// 16-masala

// let user = {
//   name: "John",
//   age: 28,
//   weight: 70,
// };

// delete user.age;

// console.log(user);

// 18-masala

// function greet(arg) {
//   let res = [];

//   Object.values(arg).forEach(function (value) {
//     if (Array.isArray(value)) {
//       res.push(...value);
//     }
//   });

//   return res;
// }

// let obj = {
//   name: ["John", "David"],
//   age: [24, 35],
//   weight: [65, 75],
// };

// console.log(greet(obj));

// ### String bilan ishlash

// 21-masala

// function greet(arg) {
//   let res = arg.toLowerCase().split(" ").join("");
//   return res === res.split("").reverse().join("")
//     ? "palindrom"
//     : "palindrom emas";
// }

// console.log(greet("radar"));

// 22-masala
// function greet(arg) {
//   return arg.split(" ").reverse().join(" ");
// }
// let str = "salom dunyo";

// console.log(greet(str));

// 23-masala

// function greet(arg) {
//   let words = arg.split(" ");

//   let res = "";

//   for (let word of words) {
//     if (word.length > res.length) {
//       res = word;
//     }
//   }

//   return res;
// }

// console.log(greet("hello world,  javascript is amazing"));

// 25-masala

// function greet(str) {
//   let res = "";
//   for (let space of str) {
//     if (space < "0" || space > "9") {
//       res += space;
//     }
//   }
//   return res;
// }

// let str = "hello world 1212 ";

// console.log(greet(str));
