// Facade pattern Vì sao các KỸ SƯ LV4 luôn sử dụng? Còn LV1, 2 hầu như chưa nghe dù chỉ là một lần ???
// đằng sau một hệ thông phức tạp tạp, nhưng tao ra cac hành động đơn gian cho người dùng

class DisCount {
  calc(value) {
    return value * 0.9
  }
}

class Shipping {
  calc() {
    return 5
  }
}

class Fees {
  calc(value) {
    return value * 1.05
  }
}


class ShoppeFacadePatter {
  constructor() {
    this.discount = new DisCount()
    this.shipping = new Shipping()
    this.fees = new Fees()
  }

  calc(price) {
    price = this.discount.calc(price)
    price = this.fees.calc(price)
    price += this.shipping.calc()
  
    return price
  }
}

function buy(price) {
 const shopee = new ShoppeFacadePatter()

 console.log(shopee.calc(price))
}

buy(50000)