let handler = async (m, { conn, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let cafirexos = `
_Optimice la implementación de *GataBot* mediante la integración en un servicio de alojamiento de alto rendimiento._

*🐈 Compatible con GataBot*
Aprovecha la compatibilidad y comienza usar GataBot en servidores de alto rendimiento. El Staff de GataBot y Cafirexos hacen posible que puedas ejecutar las funciones que tanto te gusta usar sintiendo una experiencia fluida y de calidad.

🔵 \`\`\`Información del Host\`\`\`

💻 *Página*
https://chat.whatsapp.com/FkX5wjbIci36Q0lHYKF5DD
✨ *Dashboard*
https://chat.whatsapp.com/FkX5wjbIci36Q0lHYKF5DD

⚙️ *Panel*
https://chat.whatsapp.com/FkX5wjbIci36Q0lHYKF5DD

📢 *Canal de WhatsApp*
https://chat.whatsapp.com/FkX5wjbIci36Q0lHYKF5DD

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/FkX5wjbIci36Q0lHYKF5DD

𝐑𝐞𝐚𝐝𝐳 𝐀𝐥𝐞𝐢𝐳𝐧

🧑‍💻 *Contacto (Aleizn)*
https://wa.me/51992621601
`
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'fantasy.jpg', cafirexos.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 C A F I R E X O S 🔵`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: accountsgb.getRandom(),
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })

}
handler.command = /^(cafirexos|prueba38)$/i
export default handler
