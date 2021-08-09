const tag = function (strs, ...args) {
    return {strs: strs, args}
}
const res = tag`순서가 ${1}이렇게 ${2}`;
console.log(res);

console.log(`Hello\nWorld!`)
console.log(String.raw `Hello\nWorld!`)
console.log(String.raw `Hello
World!`)