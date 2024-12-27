// api/discord.js
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.login(process.env.DISCORD_TOKEN);

module.exports = async (req, res) => {
  // Проверка на авторизацию или другие условия
  if (!req.query.userId) {
    return res.status(400).send('User ID is required');
  }

  const userId = req.query.userId;
  const guildId = process.env.GUILD_ID;
  const roleId = process.env.ROLE_ID;

  try {
    const guild = await client.guilds.fetch(guildId);
    const member = await guild.members.fetch(userId);
    await member.roles.add(roleId);
    res.status(200).send('Role added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding role');
  }
};
