// create your loops here.
function whileLoop1() {
  let newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}

console.log('whileLoop1 output', whileLoop1());

//-------------------------

function whileLoop2() {
  let someArray = [];
  let i = 0;
  while (i <10) {
    someArray.push(i * 2);
    i++
  }
  return someArray;
}

console.log('whileLoop2 output', whileLoop2());

//-------------------------

function forLoop1() {
  let anotherArray = [];
  for (let i = 0; i < 10; i++) {
    anotherArray.push(i);
  }
  return anotherArray;
}

console.log(forLoop1());

//-------------------------

function forLoop2() {
  for (let i = 99; i >= 0; i--) {
    console.log('Time till explosion: ' + i);
  }
}

forLoop2();

//-------------------------

function forInLoop1(object) {
  let array = [];
  for (let prop in object) {
    array.push(prop);
  }
  return array;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};

console.log(forInLoop1(object));

//-------------------------

function forInLoop2(obj) {
  let array = [];
  for (let prop in obj) {
    array.push(obj[prop]);
  }
  return array;
}

console.log(forInLoop2(object));
