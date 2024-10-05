const { EmbedBuilder, Events } = require("discord.js");
const client = global.bot;
const bannedTag = require("../../../src/schemas/bannedTag");
const conf = require("../../../src/configs/sunucuayar.json");
const allah = require("../../../../../config.json");
const regstats = require("../../../src/schemas/registerStats");
const { star, green, red } = require("../../../src/configs/emojis.json")
const tagSystem = require("../../../src/configs/tagSystem.json")
module.exports = async (oldMember, newMember) => {
  if (oldMember.bot || newMember.bot || oldMember.globalName === newMember.globalName) return;
  const guild = client.guilds.cache.get(allah.GuildID);
  if (!guild) return;
  const member = guild.members.cache.get(oldMember.id);
  if (!member) return;
  const channel = client.channels.cache.find((x) => x.name == "family_log");
  const kanal = guild.channels.cache.get(conf.chatChannel);

  if (!channel) return;

  const guildTags = Array.isArray(conf.tag) ? conf.tag : tagSystem.tags;
  const hasOldTag = guildTags.some((tag) => oldMember.globalName.includes(tag));
  const hasNewTag = guildTags.some((tag) => newMember.globalName.includes(tag));

  if (hasOldTag && !hasNewTag) {
    const embed = new EmbedBuilder()
      .setAuthor({ name: client.guilds.cache.get(allah.GuildID).name, iconURL: client.guilds.cache.get(allah.GuildID).iconURL({ dynamic: true }) })
      .setThumbnail(member.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setDescription(`
        ${red} ${member.toString()} isimli eski taglımız, tagımızı <t:${Math.floor(Date.now() / 1000)}:R> bıraktı.
      `);

    channel.send({ content: `${member.toString()} [\`${member.id}\`]`, embeds: [embed] });

    if (!member.roles.cache.has(conf.vipRole) && !member.roles.cache.has(conf.boosterRolu)) return member.roles.set(conf.unregRoles);
  } else if (!hasOldTag && hasNewTag) {
    member.roles.add(conf.ekipRolu);

    const embed = new EmbedBuilder()
      .setAuthor({ name: client.guilds.cache.get(allah.GuildID).name, iconURL: client.guilds.cache.get(allah.GuildID).iconURL({ dynamic: true }) })
      .setThumbnail(member.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setDescription(`
        ${green} ${member.toString()} isimli üye ailemize katıldı, tagımızı <t:${Math.floor(Date.now() / 1000)}:R> aldı.
      `);

    channel.send({ content: `${member.toString()} [\`${member.id}\`]`, embeds: [embed] });
  }
};

module.exports.conf = { name: Events.UserUpdate };