module.exports.config = {
        name: "leave",
        eventType: ["log:unsubscribe"],
        version: "1.0.0",
        credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
        description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "leaveGif", "randomgif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
        if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const { join } =  global.nodemodule["path"];
        const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Kolkata").format("HH");
        const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
        const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
        const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave" : "managed";
        const path = join(__dirname, "events", "123.mp4");
        const pathGif = join(path, `${threadID}123.mp4`);
        var msg, formPush

        if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "𝐖𝐞𝐋𝐜𝐨𝐌𝐞 𝐓𝐨 𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮 𝐁𝐨𝐭\n──────────────────\n\n {name} \n\n──────────────────\n𝐊𝐨 𝐁𝐡𝐚𝐆𝐚 𝐃𝐢𝐘𝐚\n──────────────────\n {type} \n──────────────────\n𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮\n──────────────────\n {name} \n──────────────────\n𝐁𝐄𝐇𝐓𝐈 𝐇𝐀𝐖𝐀 𝐒𝐀 𝐓𝐇𝐀 𝐖𝐎 😥 𝐔𝐃𝐓𝐈 𝐏𝐀𝐓𝐍𝐆 ✨✨ 𝐒𝐀𝐀 𝐓𝐇𝐀 𝐖𝐎𝐎 ♥ 𝐊𝐀𝐇𝐀 𝐆𝐀𝐘𝐀 𝐔𝐒𝐄 𝐃𝐇𝐎𝐎𝐍𝐃𝐇𝐎\n──────────────────\n\n[❤️‍🔥] 🖤🖤😥😥...Good {session} || {time}" : msg = data.customLeave;
        msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝘼𝙛𝙩𝙚𝙧𝙉𝙤𝙤𝙣" :
    hours > 12 && hours <= 18 ? "𝙀𝙫𝙚𝙣𝙞𝙣𝙜" : "𝙉𝙞𝙜𝙝𝙩").replace(/\{time}/g, time);  

        const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
        else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom) }
        }
        else formPush = { body: msg }

        return api.sendMessage(formPush, threadID);
                            }