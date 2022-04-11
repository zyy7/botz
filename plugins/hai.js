let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA EX-BOTZ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ Ex-Botz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|zif|zifa|zifabot|zifabotz|hai|hay|menu)/i
handler.command = new RegExp
module.exports = handler
