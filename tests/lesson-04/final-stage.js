/*
Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 có tổng chia hết cho 17
*/

let count = 0;

for (let a = 1; a <= 100; a++) {
  for (let b = a; b <= 100; b++) {
    if ((a + b) % 17 === 0) {
      console.log(`(${a}, ${b})`);
      count++;
    }
  }
}

console.log(`Tổng số cặp (a, b) thỏa mãn điều kiện: ${count}`);
