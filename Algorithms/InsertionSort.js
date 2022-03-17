const cl = console.log

const Insertionsort = function (array) {
  let n = array.length;

  for (let i = 0; i < n; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    }
    while (array[i] < array[i - 1]) {
      let holdValue = array[i];
      array[i] = array[i - 1];
      array[i - 1] = holdValue;
      i--;
    }

  }

  return array
}
cl(Insertionsort([1, 4, 7, 3, 9, 34, 2, 66]))

