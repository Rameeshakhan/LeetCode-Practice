const arr = [1, 2, 3, 4];

function m(arr) {
  let res = 1; 
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    newArr.push(res/arr[i])
  }
  return newArr
}

console.log(m(arr));  // => [24, 12,8,6]
