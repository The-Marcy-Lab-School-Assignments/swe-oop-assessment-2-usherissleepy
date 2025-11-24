# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

Encapsulation refers to a core component of object oriented programming. Encapsulation is esentially like hiding your data and only you have controlled access to it. An example of encapsulation is the smart phone you use, a smart phone has a bunch of internals but you don't interact with any of them, instead you use the screen and the software provided. In order to hide your data, you would make certain properties private or public depending on what the property is. For example a password property would be private. Encapsulation also allows you to have more control over things and how properies are used. Take the password property for example again, instead of having the user put anything they want, you can have a certatin character minimum or numbers included in the password for it to be valid.

## Code Example:

```js
class Score {
  #score = 0;

  increaseScore() {
    this.#score++;
  }

  getScore() {
    return this.#score;
  }
}
```

Here we can see that the `#score` propery is private, and can only be interacted with by using `increaseScore()` or `getScore()`.

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

The `this` keyword is used to specify which object is using the code. It's like saying I'm going to use "this" object. Whenever the `this` keyword is used inside of a class, each specific object keeps track of its own data. The `this` keyword is useful because it helps methods within a class know which objects to interact with, and each object recieves a copy of whatever properties were definded with `this`.

In the code snippet below, what does `this` refer to?

In the code snippet below, `this` refers to the new object being created in the constructor. this.count = 0 means that each "Counter object" will recieve a count property starting at 0.

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

Polymorphism in OOP is the ability for objects to interact with methods in their own way. For example, asking an animal to make a sound, each animal makes different sounds, a dog barks, cows moo, but all animals, make a sound.

## Code Example:

```js
class Animal {
  makeSound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}
```

Here we can see the same `makeSound()` method being used for different objects and each object has its own output that's different.

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

First I'd start by creating my pet class, this would include the `name`, `energy`, `happiness`, and a method for `sleep`. Then I'd create the three child classes that inherits methods from the pet class. So I'd do `Cat extends Pet`, `Dog extends Pet`, and `Bird extends Pet`, all three child classes now have `name`, `energy`, `happiness` and the `sleep()` method from the parent pet class so nothing needs to be rewritten. Then I'd add each of the unique behaviors of each pet, so cat would have `hunt()`, dog would have `chase()`, and bird would have `fly()`.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

One advantage of using inhertiance here instead of creating three seperate classes is that cat, dog, and bird, all have `name`, `energy`, `happiness` and the `sleep()` method, so using inheritance allows all of them to have those methods without having to do anything else. Whereas if we made seperate classes each method or property would have to be rewritten for each class.
