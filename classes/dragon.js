class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    let dragonarr = [];
    for (let dragon of dragons) {
      console.log(dragon);
      let name = dragon.name
      dragonarr.push(name);
    }
    return dragonarr;
  }
}

const tyler = new Dragon('tyler', 'green')

Dragon.getDragons(tyler);



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
