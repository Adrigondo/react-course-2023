let obj = {
    name: 'Adrian Gonzalez',
    age: 20,
    height: 179,
}
console.log(obj);
// obj.name = 'Elias González';
// console.log(obj);
obj = {
    ...obj,
    // name: 'Adrian Gonzalez',
    // age: 20,
    // height: 179,
    name: 'Javier González'
}
console.log(obj);