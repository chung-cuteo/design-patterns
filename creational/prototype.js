// dua tren 1 khuan mau nguyen mau de tao ra 1 phien ban moi, tao ra 1 object va clone ra
// nhuoc diem la neu prototype thay doi hoac them moi se lam thay doi tat ca cac instance

class FoobarPlayer {
  constructor(name, team, position, goals) {
    this.name = name
    this.team = team
    this.position = position
    this.goals = goals
  }

  score() {
    this.goals++
  }

  clone() {
    return new FoobarPlayer(this.name, this.team, this.position, this.goals)
  }
}

// create instance

const prototypePattern = new FoobarPlayer('CR', 'Al Nassr', 'FW', 10)

// create c7
const cr7 = prototypePattern.clone()
cr7.score()
console.log(`${cr7.name} has scores ${cr7.goals}`)

//  create m10
const m10 = prototypePattern.clone()
m10.name ="Messi"
m10.team = 'BAC'

console.log(`${m10.name} has scores ${m10.goals}`)