let a = 1;
function f() {
    console.log(a, b, c);
    let b = 2;
    console.log(a, b, c);
    if (true) {
        let c = 3;
        console.log(a, b, c);
    }
    console.log(a, b, c);
}
// f();

/**
 * let
 * */
// 재할당 가능
let a2 = 1;
a2 = 2;
// console.log(a2);

//반복문 내에서의 함수 실행 시
//step01
var func = [];
for (var i = 0; i < 10; i++) {
    func.push(function () {
        console.log(i);
    })
}
func.forEach(function (f) {
    // f();
})

//step02
var func = [];
for (var i = 0; i < 10; i++) {
    func.push((function (v) {
        return function () {
            console.log(v);
        }
    })(i))
}
func.forEach(function (f) {
    f();
})
