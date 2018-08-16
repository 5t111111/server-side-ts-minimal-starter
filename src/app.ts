import * as path from "path"

class Person {
  constructor(private name: string) {}

  public hello() {
    return `Hello, ${this.name}!`
  }

  public whereAmI() {
    return `I'm in ${path.dirname(__dirname)}`
  }
}

const person = new Person("Tom")
// tslint:disable-next-line:no-console
console.log(person.hello())
// tslint:disable-next-line:no-console
console.log(person.whereAmI())
