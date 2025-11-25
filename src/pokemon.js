class Pokemon {
  static allPokemon = [];
  #health = 100;
  #level = 1;

  constructor(name, type) {
    this.name = name;
    this.type = type;
    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  levelUp() {
    this.#level += 1;
    this.#health += 10;
    console.log(`${this.name} leveled up to level ${this.#level}!`);
  }

  isFainted() {
    return this.#health <= 0;
  }

  attack(targetPokemon) {
    if (targetPokemon.isFainted()) {
      console.log(`${targetPokemon.name} has already fainted!`);
      return;
    }
    const damage = 10 * this.#level;
    targetPokemon.#health -= damage;

    if (targetPokemon.#health < 0) targetPokemon.#health = 0;

    console.log(`${this.name} attacked ${targetPokemon.name}!`);

    if (targetPokemon.isFainted()) {
      console.log(`${targetPokemon.name} has fainted!`);
    }
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((p) => p.name === name) || null;
  }
}

// TEST YOUR CODE HERE


// DO NOT REMOVE
module.exports = { Pokemon };
