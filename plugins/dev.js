const { lite, commands } = require('../lite');
const config = require('../settings'); // Make sure MENU_IMAGE_URL is defined in settings.js

lite({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ *DOLLAR-MD DEV* ⌋
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *the owner* of a multifunctional
│    WhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : DOLLAR
│ 🕯️ *Age* : +25
│ ☎️ *Contact* : wa.me/923404469538
│ ▶️ channel* :
│    https://whatsapp.com/channel/0029VbAZuFFCBtxLljSGkS05
│
│ ⚡ Powered by *DOLLAR*
╰───────────────`.trim();

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://telegra.ph/file/3b66b4f8bd5c0556d4fb9.jpg' },
            caption: text,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: 'channel',
                    newsletterName: '『 sᴜʜᴏ ᴍᴅ 』',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
