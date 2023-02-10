let arrayFibo = [0, 1];
function fibonaci(num) {
  for (let i = 2; i <= num; i++) {
    arrayFibo[i] = arrayFibo[i - 2] + arrayFibo[i - 1];
    console.log(arrayFibo[i]);
  }
}

fibonaci(10);
