const fs = require("fs");
module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝑺𝑯𝑨𝑨𝑵 𝑲𝑯𝑨𝑵", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "owner",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("OWNER")==0 || event.body.indexOf("owner")==0 || event.body.indexOf("/owner")==0 || event.body.indexOf("#owner")==0) {
    var msg = {
        body: "🫅 𝐎𝐖𝐍𝐄𝐑 𝐀𝐋𝐈𝐒𝐇𝐀 𝐑𝐎𝐇𝐀𝐁 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 🫅",
        attachment: 
fs.createReadStream(__dirname + `/noprefix/received_564304659837567.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
