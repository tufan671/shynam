const Discord = require('discord.js');

exports.run = async (client, message, args) => {// can#0002

let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
.setTitle('Buyur ;')
.setColor('#25012')
.setFooter('✧ - ATHANASIA')
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 })));
                     
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['av','pp'],
  permLevel: 0
};
 
exports.help = {
  name: 'avatar'
};// codare 