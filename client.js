const net = require("net");
const readline = require("readline");
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.47",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ABC");
    conn.write("Move: up");
  });
  return conn;
};

module.exports = {connect};