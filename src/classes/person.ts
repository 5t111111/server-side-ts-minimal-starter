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

export default Person
