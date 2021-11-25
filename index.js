const axios = require("axios").default;
require("dotenv").config();
console.log(process.env.WEBHOOKURL);

const sendMsg = async () => {
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

  function randomfFunc(data) {
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
    if (data.length === 1) {
      answer.push(data[0]);
    }
    return `👑 Leader_${answer[0]} 👑 [${answer}]`;
  }

  const randoms = [`CoffeeTime Teams : ${randomfFunc(teams)}, ${randomfFunc(teams)}, ${randomfFunc(teams)}`];

  console.log(randoms);

  try {
    await axios.post(process.env.WEBHOOKURL, {
      teams: JSON.stringify(randoms),
    });
    console.log("sent");
  } catch (error) {
    console.log(error.response);
  }
};

sendMsg();
