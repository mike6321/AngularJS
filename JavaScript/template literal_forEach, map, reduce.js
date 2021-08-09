/**
 * forEach : for문 돌리는것이랑 같은 개념.
 * map : for문 돌려서 새로운 배열을 만드는게 목적.
 * reduce : for문을 돌려서 최종적으로 다른 무언가를 만드는 목적.
 * */

const a = [1, 2, 3];
const b = a.map(function (v, i, array) {
    console.log(v, i, this);
    return this[0] + v;
}, [11])
;
console.log(b);

const arr = [1, 2, 3];
const res = arr.reduce(function (p, c, i, arr) {
    console.log(p, c, i, arr);
    return p + c;
}, 10)
;
console.log(res);

const arr2 = [1, 2, 3];
const res2 = arr2.reduce(function (p, c, i, arr) {
        console.log(p, c, i, arr);
        return p + c;
    })
;
console.log(res2);