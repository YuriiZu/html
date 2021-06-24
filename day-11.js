// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

const areEqual = (s1, s2) =>
  s1.size === s2.size && [...s1].every((val) => s2.has(val));

const notEqual = (s1, s2) => !areEqual(s1, s2)

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

const process2Arrays = (arr1, arr2) => {
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);
  const both = new Set([...s1].filter((x) => s2.has(x))).size;
  const dif1 = new Set([...s1].filter((x) => !s2.has(x))).size;
  const dif2 = new Set([...s2].filter((x) => !s1.has(x))).size;
  const s1Remain = dif1 + dif2;
  const s2Remain = s2.size - both;
  return [both, s1Remain, dif1, s2Remain];
}
