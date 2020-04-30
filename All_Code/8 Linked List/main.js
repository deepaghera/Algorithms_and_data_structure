let obj1 = { a: true};
let obj2 = obj1;
obj1.a = 'booya';
delete obj2
console.log(obj1,obj2);