// The spread operator is used to unpack elements from arrays, objects, or iterables into individual elements.
// The rest operator collects multiple elements and packs them into a single array or object. It’s used to gather the "rest" of the items.

// const arr = [1,2,3,4,5]
// const arr2 = [...arr, 6, 7]

// console.log(...arr)
// console.log(arr)
// console.log(arr2)

// function sum(a,b,c){
//     return a+b+c
// }

// let arr = [10,20,30]

// console.log(sum(...arr))

// obj = {
//     name :'Bhanuprasad'
// }

// obj2 = {
//     age : 26
// }

// obj3 = {...obj, ...obj2}
// obj3['name'] = 'bhanu'
// console.log(obj)
// console.log(obj3)


// function display(...values){
//     // console.log(values)
//     return values
// }

// console.log(display(10,20,30))

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); 
console.log(rest);


const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);   
console.log(others);
