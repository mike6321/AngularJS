var a = 'abc';
var b = `abc`;
var c = "abc";

console.log(a === b);
console.log(b === c);
console.log(c === a);



/**
 * backtick(`)
 * */

//multi-line
var a = 'abc\n'
        +'def';

var b = `abc
         def
         ddd`
;
console.log(b);

//string interpolation
var a1 = 10;
var b1 = 20;
const str = `${a1} + ${b1} = ${a1 + b1}`;
console.log(str);

