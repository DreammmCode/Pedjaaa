const Discord = require("discord.js")
const client = new Discord.Client()

module.exports = (client) => {
  const isInvite = async (guild, code) => {
    return await new Promise((resolve) => {
      guild.fetchInvites().then((invites) => {
        for (const invite of invites) {
          if (code === invite[0]) {
            resolve(true)
            return
          }
        }

        resolve(false)
      })
    })
  }
  /* Funkcija za poruke koje počinju sa discord.gg/ */
  client.on('message', async (message) => {
  const { 
    guild, member, content
   } 
   = message
  const code = content.split('discord.com/')[1]
  console.log('CODE:', code)
  /* Funkcija koja govori Pedji da ne kažnjava ako je naš invite link */
  if (
    content.includes('discord.com/')) {
    const isOurInvite = await isInvite(
    guild, code
      )
    if(
    !isOurInvite
    ) 
    {
  /* Radnja koju Pedja odradi nakon slanja tuđeg invitea */
  message.channel.send(
    "Pod mač bato!"
  )
  message.delete()
  member.ban()
  client.channels.cache
  .get("807978146384052255")
  .send((new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor("#7f0000")
  .setTitle("BAN")
  .addFields(
    {name: "Korisnik", value: `${message.author}`},
    {name: "Moderator", value: `Pedja`},
    {name: "Razlog", value: `Postavljanje invite-ova`}
  )))
}}
})}