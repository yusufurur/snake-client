const {connect}  = require("./client.js");
const {setupInput} = require("./input.js");
// establishes a connection with the game server

console.log("Connecting ...")
setupInput(connect());