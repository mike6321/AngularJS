console.log(`${[0, 1, 2]}`);
console.log(`${{a:1, b:2}}`);
console.log(`${function () {return 1 }}`);
console.log(`${(() => 1)()}` + 1);

console.log(`Foo ${`Bar`}`);

function a () {
    return `<div>
    <h1>123</h1>
</div>
    `.trim();
}

console.log(a());