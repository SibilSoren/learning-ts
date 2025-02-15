let arr = [2, 4, 5, 6, 2, 1, 2, 8, 4,7];

function findFirstOcc(data: any) {
  let mySet = {};
  for (let item of data) {
    if (!mySet[item]) {
      mySet[item] = 1;
    } else {
      return item;
    }
  }
}

console.log(findFirstOcc(arr));
