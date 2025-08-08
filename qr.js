const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
 //   let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                	
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
              if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "DENKI~MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `𝗤𝗥 𝗖𝗢𝗗𝗘 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 
 𝗠𝗔𝗗𝗘 𝗪𝗜𝗧𝗛 ⚡ 𝐃𝐄𝐍𝐊𝐈 𝐌𝐃 ⚡ 

╔═════『 𝗩𝗜𝗦𝗜𝗧 𝗙𝗢𝗥 𝗛𝗘𝗟𝗣 』══════❒
║❒ 𝗢𝗪𝗡𝗘𝗥 : https://wa.me/2250143875869
║❒ 𝗥𝗘𝗣𝗢 : https://github.com/denki-arch/DENKI-MD
║❒ 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 :
║https://t.me/denkitech_hub 
║
║❒ 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 :
 https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R 
║
╚══════════════════════════❒

> *© Powered BY 𝑫𝑬𝑵𝑲𝑰 ᴰᴱᵛ`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: " 𝖇𝖔𝖙 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉",
thumbnailUrl: "https://files.catbox.moe/rful77.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `𝗤𝗥 𝗖𝗢𝗗𝗘 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 
 𝗠𝗔𝗗𝗘 𝗪𝗜𝗧𝗛 ⚡ 𝐃𝐄𝐍𝐊𝐈 𝐌𝐃 ⚡ 

╔═════『 𝗩𝗜𝗦𝗜𝗧 𝗙𝗢𝗥 𝗛𝗘𝗟𝗣 』══════❒
║❒ 𝗢𝗪𝗡𝗘𝗥 : https://wa.me/2250143875869
║❒ 𝗥𝗘𝗣𝗢 : https://github.com/denki-arch/DENKI-MD
║❒ 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 :
║https://t.me/denkitech_hub 
║
║❒ 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 :
 https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R 
║
╚══════════════════════════❒

> *© Powered BY 𝑫𝑬𝑵𝑲𝑰 ᴰᴱᵛ`; 
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: " 𝖒𝖉 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉 ✅  ",
thumbnailUrl: "https://files.catbox.moe/rful77.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await GIFTED_MD_PAIR_CODE();
});
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min
module.exports = router;
