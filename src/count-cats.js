module.exports = function countCats(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      if (typeof arr[i] === "string") {
        if (arr[i].includes('^^') === true && arr[i].length === 2) {
          sum += 1;
        }
      }
    }
    else {

      let test = arr[i].forEach(function (item) {
        if (typeof item === "string") {
          if (item.includes('^^') === true && item.length === 2) {
            sum += 1;
          }
        }
      });
    }
  }
  return sum;
};
