let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : ZyyXd
║│➸ ```UMUR``` : 15
║│➸ ```ASAL``` : MEDAN
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/Hoiw17HdXfMDV8Pagsi4UG
║│➸ ```INSTAGRAM``` : http://instagram.com/jojo_wibu
║│➸ ```WHATSAPP``` : http://wa.me/6285924761802
╰────────❉
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
