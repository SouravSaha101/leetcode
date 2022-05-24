// Given two sorted arrays A and B, find the merged sorted array C by merging A and B.
let a = [1, 2, 3, 4, 4];
let b = [2, 4, 5, 5];
// C: [1, 2, 2, 3, 4, 4, 4, 5, 5]

function mergeArray(a, b) {
  let l1 = a.length;
  let l2 = b.length;

  let i = 0;
  let j = 0;
  let k = 0;
  let res = [];

  while (l1 > i && l2 > j) {
    if (a[i] > b[j]) {
      res[k] = b[j++];
    } else {
      res[k] = a[i++];
    }
    k++;
  }

  while (l1 > i) {
    res[k++] = a[i++];
  }

  while (l2 > j) {
    res[k++] = b[j++];
  }
  return res;
}

console.log(mergeArray(a, b));
