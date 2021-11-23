const teams = [
  "Bella",
  "Bryan",
  "Joy",
  "Judy",

  "Yujhin",
  "Joe",
  "Sean",
  "Hailey",

  "Danna",
  "Matthew",
  "Benjamin",
  "Sebastian",
  "jay",
];

function randomfFunc(data, index) {
  let answer = [];
  let n = 0;

  while (n <= 3) {
    const idx = Math.floor(Math.random() * data.length);

    answer.push(data[idx]);
    data.splice(idx, 1);
    n += 1;

    if ("jay" === answer[0]) {
      answer.shift();
      answer.push("jay");
    }
  }
  //   console.log('data:::',data)
  if (data.length === 1) {
    answer.push(data[0]);
  }
  console.log(`${index} 조 팀장 :: `, answer[0]);
  return answer;
}

console.log(randomfFunc(teams, 1));
console.log(randomfFunc(teams, 2));
console.log(randomfFunc(teams, 3));
