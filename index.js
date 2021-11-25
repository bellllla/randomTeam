const axios = require("axios").default;
require("dotenv").config();

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
    return `👑 Leader_${answer[0]} : ${answer} `;
  }

    const randoms = `👨‍👨‍👧‍👧Team A ${randomfFunc(teams)}👨‍👨‍👧‍👧      👨‍👨‍👧‍👧Team B ${randomfFunc(teams)}👨‍👨‍👧‍👧      👨‍👨‍👧‍👧Team C ${randomfFunc(teams)}👨‍👨‍👧‍👧 `;

  //   {
  //   	"blocks": [
  //   		{{
  // 	"type": "divider"
  // },
  //   			"type": "section",
  //   			"text": {
  //   				"type": "mrkdwn",
  //   				"text": "*Farmhouse Thai Cuisine*\n:star::star::star::star: 1528 reviews\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here"
  //   			},
  //         }
  //     }

//   const randoms = {
//     "blocks": [
//       {
//         "type": "divider",
//       },
//       {
//         "type": "section",
//         "text": {
//           "type": "mrkdwn",
//           "text":
//             "☕️  *CoffeeTime Teams* ☕️ \n " +
//             randomfFunc(teams) +
//             "\n" +
//             randomfFunc(teams) +
//             "\n" +
//             randomfFunc(teams) +
//             "\n",
//         },
//       },
//     ],
//   };

    // console.log(randoms.blocks[1].text.text);

  try {
    await axios.post(process.env.WEBHOOKURL, {
      teams: randoms.toString(),
    //   teams: JSON.stringify(randoms.blocks[1].text.text),
    });
  } catch (error) {
    console.log(error.response);
  }
};

sendMsg();
