module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61559716922704") {
    var aid = ["61559716922704"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Boss ko mention mat karo busy hai wo", "YAR ALISHA BUSY HAI KYU BULA RAHE HO USKO🙄🙄🙄", "Abee Mere se baat Kar ..use mention kyu kar rhe ho😒", "Kya Hua Boss ko q Bula Rhe Ho?", "Wo Shayad Busy h😐🙄", "Tujhe sunai nhi deta mere admin ko tang na kr😒😒", "Mere boss ko tang naa karo", "Abee Bola na mere Admin ko bar bar mention mat karo ek bar me nahi smjh nahi ata", "Kya kaam hai mujhe bol", "Ek Baar me samjh ni ata , kyu mention kar rhe ho use" , "Mere Boss ko tang mt kiya kro smjhe😒"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
