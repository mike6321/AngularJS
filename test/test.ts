/**
 * 클래스
 * : 단 몇줄만으로 구현 가능
 * */

//클래스
class Parent {
    //접근제한자
    public one = 10;
    protected two = 20;
    private three = 30;

    constructor() {
    }
}

class Child extends Parent {

    constructor() {
        super();

        this.one;
        this.two;
        //this.three;
    }
}



class App extends Parent {

}

// 인터페이스
// 완전 자바인댕?...
interface Person {
    name: string
    age: number
}

let kim: Person
let numbering: Child


class Car {

    constructor(public age: number) {
        this.age = age;
    }
}

let car = new Car(10);
car.age = 10;
console.log(car.age)


/**
 * 데코레이터
 * */
function Component(constructorfn?: Function) {

    return constructorfn
}

// @ts-ignore
@Component()
class AppComponet {

    constructor() {

    }
}
