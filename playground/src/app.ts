// interface vs custom type
// interface exclusively deals with objects ****

interface Named {
    readonly name: string

}


interface Greetable extends Named {
    // can't have an initial value
    greet(phrase: string): void
}

// can implement multiple interfaces w/ a ,
class Person implements Greetable {
    name: string
    // age: 28
    constructor (n: string) {
        this.name = n
    }
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)

    }
}

let user1: Greetable

user1 = new Person("Dill")

user1.greet('hi there I am not')