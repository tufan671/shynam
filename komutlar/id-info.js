const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');


exports.run = async (client, message, args) => {// Can°B#1308 & ByMayFe_0#0043
if(!message.guild.members.cache.get(client.user.id).hasPermission('BAN_MEMBERS')) return message.channel.send("I need the **Ban Members** authority.")

message.guild.members.ban(args[0]).then(async (member) => {
let user;
if(member instanceof Discord.GuildMember) { user = member.user; }
else if(member instanceof Discord.User) { user = member; }
else { user = await client.users.fetch(member) };
message.guild.members.unban(args[0]);

message.channel.send(new Discord.MessageEmbed().setTitle(user.tag).setColor('GREEN').setThumbnail(user.avatarURL({dynamic: true}))
.addField(`Information \n`, `**• Hesap Oluşturulma Tarihi:** ${moment(user.createdAt).format('DD/MM/YYYY')}

**• Kullanıcı Adı:** ${user.username}

**• Discriminator:** ${user.discriminator}`));
});

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ui','kb','kullanıcıbilgi','kullanıcı-bilgi','user-info','userinfo','user-information'],
  permLevel: 0
}

exports.help = {
  name: 'user-information'
};