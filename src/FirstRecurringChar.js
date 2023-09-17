var arr = [2, 4, 5, 6, 2, 1, 2, 8, 4];
function findFirstOcc(data) {
  var mySet = {};
  for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    if (!mySet[item]) {
      mySet[item] = 1;
    } else {
      return item;
    }
  }
  return undefined;
}
console.log(findFirstOcc(arr));
