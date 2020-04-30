const strings = 
['a','b','c','d'];


// push
strings.push('x');//BIG_O O(1)

//pop
strings.pop(); //BIG_O O(1)

//unshift
strings.unshift("new"); //BIG_O O(n)

//splice

strings.splice(2,0,'alien');

console.log(strings);