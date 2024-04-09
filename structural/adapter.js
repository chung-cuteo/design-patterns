// cho cac module khong tuong thuc hoad dong cung nhau, chuyen du lieu nay qua du lieu khac qua trung gian(adapter)
// vi du thuc tien la bo adapter bo doi nguon 220v xuong 110v de su dung

class MonoPaymentAdapter {
  constructor(monoPayment) {
    this.monoPayment = monoPayment;
  }

  payWithVisa(visaPayment) {
    const convertedPayment = this.convertedToVisaPayment(this.monoPayment);

    visaPayment.pay(convertedPayment);
  }

  convertedToVisaPayment(monoPayment) {
    const conversionRate = 10;
    const visaAmount = monoPayment.amount / conversionRate;
    const visaPayment = {
      cardNumber: monoPayment.cardNumber,
      expiryDate: monoPayment.expiryDate,
      cvv: monoPayment.cvv,
      amount: visaAmount,
    };

    return visaPayment;
  }
}

// define the VisaPayment
class VisaPayment {
  pay(payment) {
    console.log(
      `paying ${JSON.stringify(payment.amount)} USD with Visa card ${
        payment.cardNumber
      }`
    );
  }
}

// define the MonoPayment
class MonoPayment {
  constructor(cardNumber, expiryDate, cvv, visaAmount) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.visaAmount = visaAmount;
  }
}

// create a mono
const monoPayment = new MonoPayment("1234567", "12/30", "123", 100000);

// create a mono-to-visa adapter
const monoAdapter = new MonoPaymentAdapter(monoPayment);

// create visa Payment
const visaPayment = new VisaPayment();

// register
monoAdapter.payWithVisa(visaPayment);
