let handler = async (m, { conn }) => {
let caption = `*(￣ヘ￣）HEMM*`

conn.sendButton( m.chat, caption, `©️ Ex-Botz`, `Menu`, `.?`, m)

       }
       
handler.customPrefix = /^(bot|botwa|tes|robot)/i
handler.command = new RegExp
module.exports = handler
