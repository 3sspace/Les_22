const c = [5, 3, 8, 5, 3, 2, 1, 2];
const d = [];

c.forEach((item) => {
  if (d.includes(item)) {
    return;
  } else {
    d.push(item);
  }
});
console.log(d);