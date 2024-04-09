// stragtegy pattern chia nho cac chien luoc, chi nho task de quan ly code hieu qua

function add ( number1, number2) {
  return number1 + number2
}

function subtract ( number1, number2) {
  return number1 - number2
}
function multiply ( number1, number2) {
  return number1  *  number2
}
function divide ( number1, number2) {
  return number1 / number2
}

const calulationObject = {
  add,
  subtract,
  multiply,
  divide
}

function handleCalulation (type, number1, number2) {
  return calulationObject[type](number1, number2)
}

const addResult = handleCalulation('add', 1, 2)
console.log(addResult)