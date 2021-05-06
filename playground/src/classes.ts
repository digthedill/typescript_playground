class Pet {
    private friends: string[] = []

    constructor(private readonly id: string, public name: string){
    }

    describe() {
        console.log('Our favorite pet,', this.name)
    }
    addFriends(friend: string) {
        this.friends.push(friend)
    }
    printMyFriends() {
        console.log(`${this.friends.length} friends`)
        console.log(this.friends)
    }
}

class Cat extends Pet {}
class Dog extends Pet {}


const roo = new Dog("0", 'Roo Roo')
const olive = new Cat("10", "Olive")

console.log(roo)
console.log(olive)


roo.addFriends("Rissa")
roo.addFriends("Dillo")
roo.printMyFriends()


olive.addFriends('Arzy')
olive.describe()