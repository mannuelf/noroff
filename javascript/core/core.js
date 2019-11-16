/*
 * Source
 * JavaScript: The Definitive Guide, Sixth Edition
 * by David Flanagan
 * ISBN: 978-0-596-80552-4
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

