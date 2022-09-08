function add_0(x,y){
  return x + y;
}

const operation = add_0;
const result = add_0(2,2);
const result2 = operation(2,2);

console.log(result);
console.log(result2);
console.log(add_0.name);
console.log(operation.name);

//#####################################################################################################################

function add(x,y) {
  return x+y;
}

function subtract(x,y) {
  return x-y;
}

function multiply(x,y) {
  return x*y;
}

function divide(x,y) {
  return x/y;
}

const operations = [
  add,
  subtract,
  multiply,
  divide
]

let op;
for (let i = 0; i < operations.length; i++){

  op = operations[i];
  const x = (i+1)*2;
  const y = (i+1)*4;
  const res = op(x,y);
  console.log(res);

}

//#####################################################################################################################

function metaOperation(operation, x, y){
  return operation(x,y);
}

// Beispiel für eine nicht ausimplemetierte Callback-Funktion
function asyncFunction(callback) {
let result = 0;
/* Hier die Berechnung des Ergebnisses */
callback(result);
}

//#####################################################################################################################

function operationFactory(name) {
    switch(name) {
        case 'add': return function(x, y) {
            return x + y;
        }
        case 'subtract': return function(x, y) {
            return x - y;
        }
        case 'multiply': return function(x, y) {
            return x * y;
        }
        case 'divide': return function(x, y) {
            return x / y;
        }
        default: return function() {
            return NaN;
        }
    }
}

const add = operationFactory('add');
console.log(add(2, 2));
const subtract= operationFactory('subtract');
console.log(subtract(2, 2));
const multiply = operationFactory('multiply');
console.log(multiply(2, 2));
const divide = operationFactory ('divide');
console.log(divide(2, 2));
const unknown = operationFactory('unknown');
console.log(unknown(2, 2));

// Die selbe Funktion mit Arrow-Operator implemetiert
function arrowFactory(name) {
    switch(name) {
        case 'add': return (x, y) => x + y;
        case 'subtract': return (x, y) => x - y;
        case 'multiply': return (x, y) => x * y;
        case 'divide': return (x, y) => x / y;
        default: return() => NaN;
    }
}

//#####################################################################################################################

const fruit = {
    name : 'Banana',
    getName: function() {
        return this.name;
    }
}

console.log(fruit.getName()); // output: Banana, wie erwartet

function getNameGlobal() {
    return this.name;
}

console.log(getNameGlobal());

const anotherFruit = {
    name : 'Kiwi',
    getName: getNameGlobal
}

console.log(anotherFruit.getName());

//#####################################################################################################################
function example(x) {
    if(x) {
        var y = 4711;
    }
    for(var i=0; i<4711; i++) {
        /* Irgendwas machen */
    }
    console.log(y);
    console.log(i);
}
example(true);

function example(x) {
    console.log(y);
    console.log(i);

    if(x) {
        var y = 4711;
    }
    for(var i=0; i<4711; i++) {
        /* Irgendwas machen */
    }
}
example(true);

//#####################################################################################################################

// Bsp 1: Überladen durch weggelassen
function addOverload(x, y, log){
    const result = x + y;
    if(log) {
        console.log(result);
    }
    return result;
}

addOverload(2,2);
addOverload(2,2,true);

// Bsp 2: Überladen durch arguemts-Parameter
function multiplyOverload(x,y){
    const result = x * y;
    if(arguments[2]){
        console.log(result);
    }
    return result;
}

multiplyOverload(2,2);
multiplyOverload(2,2,true);

// Bsp 3: Konfigurations-Objekt
function subOverload(x, y, config){
    const result = x - y;
    if(config && config.log) {
        console.log(result);
    }
    return result;
}

subOverload(4,2);
subOverload(4,2,{log : true});
