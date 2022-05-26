// Given two sorted arrays A and B, find the merged sorted array C by merging A and B.
let a = [1, 2, 3, 4, 4];
let b = [2, 4, 5, 5];
// C: [1, 2, 2, 3, 4, 4, 4, 5, 5]

// Check elements of both array till both array has items in it and insert them into the result array, 
// then check the rest of the elements of the longer array and insert them into the result array.

function mergeArray(a, b) {
  let l1 = a.length;
  let l2 = b.length;

  let i = 0;
  let j = 0;
  let res = [];

  while (l1 > i && l2 > j) {
    if (a[i] > b[j]) {
      res.push(b[j++]);
    } else {
      res.push(a[i++]);
    }
  }

  while (l1 > i) {
    res.push(a[i++]);
  }

  while (l2 > j) {
    res.push(b[j++]);
  }
  return res;
}

console.log(mergeArray(a, b));
