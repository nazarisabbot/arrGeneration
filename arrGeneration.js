const generationArr = (arr) => {
  arr.push(Math.round(Math.random() * (10 - 1) + 1));

  const checkSum = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);

  if (checkSum < 50) {
    generationArr(arr);
  }

  if (checkSum >= 50) {
    return arr;
  }

  return arr;
};

const resArr = [];
const res = generationArr(resArr);
console.log(res);
