const OBJ2 = {
    prop1 : 1,
    prop2 : [1, 2, 3]
}
Object.freeze(OBJ2);

OBJ2.prop1 = 2;
console.log(OBJ2.prop1);

OBJ2.prop2[1] = 10;
console.log(OBJ2.prop2[1]);


/**
 * 1. Obj 자체를 얼린다.
 * 2. Obj 내부의 프로퍼티들을 순회하면서, 혹시 참조형이면
 *      1) 반복 -> 재귀
 *
 * */


var a = {
    a : 1,
    b : [1, 2, 3],
    c : {d : 1, e : 2}
}

var b = Object.assign({}, a);
b.b = Object.assign([], a.b);

b.b[1] = 20;
console.log(b);
console.log(a);