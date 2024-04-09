// tach nhung ham phuc tap thanh don gian, xay dung tung chi tiet nhor tao la 1 phien bam moi

class Player {
  constructor(builder) {
    this.name = builder.name;
    this.age = builder.age;
    this.national = builder.national;
    this.team = builder.team;
    this.position = builder.position;
  }

  log() {
    let play = `${JSON.stringify(this.name)}\n`;
    play += `${JSON.stringify(this.age)}\n`;
    play += `${JSON.stringify(this.national)}\n`;
    play += `${JSON.stringify(this.team)}\n`;
    play += `${JSON.stringify(this.position)}\n`;

    return play;
  }
}

class PlayerBuilder {
  constructor() {
    this.name = "";
    this.age = "";
    this.national = "";
    this.team = "";
    this.position = "";
  }

  withName(name) {
    this.name = name;
    return this;
  }
  withAge(age) {
    this.age = age;
    return this;
  }
  withNational(national) {
    this.national = national;
    return this;
  }
  withTeam(team) {
    this.team = team;
    return this;
  }
  withPosition(position) {
    this.position = position;
    return this;
  }

  build() {
    return new Player(this);
  }
}

const builderPattern = new PlayerBuilder();

const cr7 = builderPattern
  .withName("Cr7")
  .withAge(39)
  .withNational("Por")
  .withTeam("Al Assr")
  .withPosition("FW")
  .build();

console.log(cr7.log());
