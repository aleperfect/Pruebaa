let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `🤠Quieres tambien un bot en tu grupo?‼️ Escribeme wa.me/51992621601
*⺀👻Te acercaste a mi y me quede sin palabras y sin respirar asi que bañate porfavor ⺀*\n\n❄️ ${oi}\n\n❄️ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `🇨🇳🐺 @${mem.id.split('@')[0]}\n`}
teks += `└𝐑𝐞𝐚𝐝𝐳 𝐀𝐥𝐞𝐢𝐳𝐧`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler