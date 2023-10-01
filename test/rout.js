const { default: axios } = require("axios");

axios
  .post("https://uptight-hosiery-ox.cyclic.cloud/telegram")
  .then(({ data }) => {
    console.log(data);
  });
