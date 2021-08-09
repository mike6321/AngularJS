var value = 0;
var obj = {
    value: 1,
    setValue: function () {
        this.value = 2; // this: obj -> obj.value = 2;
        // (function () {
        //     this.value = 3; // this: window -> window.value = 3;
        //                     // 전역 value = 3;
        // })();

        // var a = function () {
        //     this.value = 3
        // }
        // a.call(this);

        // {
        //     this.value = 5;
        // }
    }
}
obj.setValue();
console.log(value); //3 - 전역
console.log(obj.value); //2