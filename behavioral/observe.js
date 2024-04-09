// các đối tượng đăng ký để quan sát một sự kiện có thể được gây ra bởi một đối tượng khác

class Observe {
  constructor(name) {
    this.namePick = name
  }

  updateStatus(localtion) {
 this.goTohelp(localtion)
  }

  goTohelp(localtion) {
    console.log(`${this.namePick}::::PING::::${JSON.stringify(localtion)}`)
  }
}

class Subject {
  constructor() {
    this.observeList = []
  }

  addObserve(observe) {
    this.observeList.push(observe)
  }

  notify(localtion) {
    this.observeList.forEach((observe)=> observe.updateStatus(localtion))
  }
}

const subject = new Subject()

// your pick
const riki = new Observe('Riki')
const sniper = new Observe('Sniper')

// add Riki and Snper one team
subject.addObserve(riki)
subject.addObserve(sniper)

// push location to Team
subject.notify({long: 100, lat:50})
