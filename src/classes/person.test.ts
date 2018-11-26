import Person from "./person"

describe("Person", () => {
  describe("hello()", () => {
    test("it must say hello", () => {
      const person = new Person("Tom")
      expect(person.hello()).toBe("Hello, Tom!")
    })
  })
})
