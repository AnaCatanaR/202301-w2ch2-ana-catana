// poner la funcion

const strictEquals = (valueA, valueB) => {
  let result = Object.is(valueA,valueB);

  console.log(`valueA: ${valueA} is === valueB: ${valueB}`)
  console.log(`result = ${result}`);
  return result;
};

export default strictEquals;
