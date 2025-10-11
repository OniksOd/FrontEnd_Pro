// const arr = [1, 3, 4, 6, 2, 5, 7, 4, 3, 2, 4];
// const numberToDelete = 4;
// const newArr = arr.filter((item) => item !== numberToDelete);
// console.log(newArr);
const arr = [1, 3, 4, 6, 2, 5, 7];
const item = 4;
function deleteItem(arr, item) {
  arr.splice(arr.indexOf(item), 1);
  return arr;
}
console.log(deleteItem(arr, item));
