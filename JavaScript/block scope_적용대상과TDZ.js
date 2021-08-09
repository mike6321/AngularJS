/**
 * TDZ : Temporal Dead Zone
 *
 * 1. 기존 호이스팅
 * 기존 var :
 * 1) 변수명만 위로 끌어올린다.
 * 2) undefined 할당
 *
 * 2. 호이스팅
 * let, const :
 * 1) 변수명만 위로 끌어올리고 끝
 * */
if (true) {
    let a = 10;

    if (true) {
        console.log(a);
        // const a = 20;
    }
    console.log(a);
}
// console.log(a);


if (true) {
    var a = 10;

    if (true) {
        console.log(a);
        var a = 20;
    }
    console.log(a);
}
