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
