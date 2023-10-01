const { default: axios } = require("axios");

// axios
//   .post("https://uptight-hosiery-ox.cyclic.cloud/telegram")
//   .then(({ data }) => {
//     console.log(data);
//   });

axios
  .get(
    `https://api.telegram.org/bot6488676757:AAFIpu7lKNmgrH60kWuldKHMzWJ64dy3mXw/setWebhook?url=https://uptight-hosiery-ox.cyclic.cloud/telegram`
  )
  .then(({ data }) => {
    console.log(data);
  });
