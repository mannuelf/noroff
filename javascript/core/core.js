/*
 * Source: JavaScript the Definitive Guide. Insert Link
 */
function factorial(n) {
  let product = 1;
  while(n > 1) {
    product *= n;
    n--;
    console.log("loopin: ", product);
  }
  console.log("return: ", product);
  return product
}

factorial(10);

