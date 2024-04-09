// tach roi phan truu tuong de trien khai

// define Payment Process
class PaymentProcess {
  pay(amount) {
    //
  }
}

// define VisaPayment process
class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expiryDate, cvv) {
    super();
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  // implements the pay method
  pay(amount) {
    console.log(`Paying ${amount} USD with visa card ${this.cardNumber}`);
  }
}

// define MonoPayment process

class MonoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }

  // implements the pay method
  pay(amount) {
    console.log(`Paying ${amount} USD with Mono card ${this.phoneNumber}`);
  }
}


// define MemberRegister
class MemberRegister {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor
  }

  // register
  register() {
    const amount = 100
    this.paymentProcessor.pay(amount)
    console.log('Register Member')
  }
}

// create visa payment
const visaPaymentProcessor = new VisaPaymentProcess('2121313', '12/30', '123')
const membership = new MemberRegister(visaPaymentProcessor)
membership.register()

// create mono payment
const monoPaymentProcessor = new MonoPaymentProcess('2121313')
const membershipMono = new MemberRegister(monoPaymentProcessor)
membershipMono.register()

