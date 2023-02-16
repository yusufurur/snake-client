const {connect}  = require("./client.js");
// establishes a connection with the game server


console.log("Connecting ...");
connect();

module.exports = {
  myNumber: 42,
  myString: "hello",
  myFunction: () => {
    // myFunction's code
  },
};