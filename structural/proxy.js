// Proxy Pattern qua chuyện muốn tăng lương hãy đưa Pattern này cho Proxy của Sếp | Proxy này là ai?
// nguoi dung muon rut tien qua ngan hang thi dung cac quay atm lam proxy de rut
// proxy nhu mot dich vu trung gian trong coc song nhu bat dong san

class Leader {
  receiveRequest(offer) {
    console.log(`Boss Ok::: ${offer}`)
  }
}

class Secretary {
  constructor () {
    this.leader = new Leader()
  }

  receiveRequest(offer) {
    this.leader.receiveRequest(offer)
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer
  }

  applyFor(target) {
    target.receiveRequest(this.offer)
  }
}

const devs = new Developer('chung dev upto 5k USD')
devs.applyFor(new Secretary())