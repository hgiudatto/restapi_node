const app = require("./app");

const main = async () => {
  await app.listen(3000);
  console.log("Server is running...");
};

main();
