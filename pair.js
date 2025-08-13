const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    Browsers,
    makeCacheableSignalKeyStore,
    jidNormalizedUser
} = require('@whiskeysockets/baileys');
const { upload } = require('./mega');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;

    async function GIFTED_MD_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);

        try {
            const items = ["Safari"];
            const randomItem = items[Math.floor(Math.random() * items.length)];

            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem),
            });

            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const { connection, lastDisconnect } = s;

                if (connection == "open") {
                    await delay(5000);

                    // Auto join groups
                    async function autoJoinGroups(sock) {
                        let inviteLinks = [
                            "https://chat.whatsapp.com/G6NnBdm9ZnvBCqy0OHi4It?mode=ac_t"
                        ];
                        for (const link of inviteLinks) {
                            let code = link.split('/').pop();
                            try {
                                await sock.groupAcceptInvite(code);
                                console.log(`✅ Joined group: ${code}`);
                            } catch (e) {
                                console.log(`❌ Failed to join group: ${code} - ${e.message}`);
                            }
                        }
                    }

                    // Auto follow channels
                    async function autoFollowChannels(sock) {
                        let channelLinks = [
                            "https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R"
                        ];
                        for (const link of channelLinks) {
                            try {
                                let inviteCode = link.split('/').pop();
                                let jid = `${inviteCode}@newsletter`;
                                await sock.subscribeChannel(jid);
                                console.log(`✅ Followed channel: ${jid}`);
                            } catch (e) {
                                console.log(`❌ Failed to follow channel: ${link} - ${e.message}`);
                            }
                        }
                    }

                    await autoJoinGroups(sock);
                    await autoFollowChannels(sock);

                    let rf = __dirname + `/temp/${id}/creds.json`;

                    try {
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "                        ? 'DENKI~MD~'+ megaUrl.split("https://mega.nz/file/")[1];
                        let code = await sock.sendMessage(sock.user.id, { text: md });

                        let desc = `𝗣𝗔𝗜𝗥 𝗖𝗢𝗗𝗘 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 
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
╚══════════════════════════❒`;

                        await sock.sendMessage(sock.user.id, {
                            text: desc,
                            contextInfo: {
                                externalAdReply: {
                                    title: "DENKI-MD",
                                    thumbnailUrl: "https://files.catbox.moe/phamfv.jpg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R",
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        }, { quoted: code });

                    } catch (e) {
                        let ddd = await sock.sendMessage(sock.user.id, { text: e.message || String(e) });
                        let desc = `*Don't Share with anyone this code use for deploying 𝕷𝕬𝕯𝖄𝕭𝖀𝕲 𝕸𝕯 1.0.0*\n\n ◦ *Github:* https://github.com/mrntandooofc/Ladybug-MD`;
                        await sock.sendMessage(sock.user.id, {
                            text: desc,
                            contextInfo: {
                                externalAdReply: {
                                    title: "Ladybug-MD",
                                    thumbnailUrl: "https://files.catbox.moe/frns4k.jpg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R",
                                    mediaType: 2,
                                    renderLargerThumbnail: true,
                                    showAdAttribution: true
                                }
                            }
                        }, { quoted: ddd });
                    }

                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} connected ✅ Restarting...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restarted");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }

    return await GIFTED_MD_PAIR_CODE();
});

module.exports = router;
