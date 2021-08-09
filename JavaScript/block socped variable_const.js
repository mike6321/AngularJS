//step01
const OBJ = {
    prop1 : 1,
    prop2 : 2
}

OBJ.prop1 = 3;

//step02
let  a = {a : 1};
const b = a;
// b = 2;
a = 13;
b.a = 2;
console.log(b.a)

const ARR = [0, 1, 2];
ARR.push(3);
console.log(ARR);
// ARR = 12;