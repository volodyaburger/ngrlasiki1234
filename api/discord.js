// /api/giveRole.js

import { Client, GatewayIntentBits } from 'discord.js';

// Инициализация бота
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const ROLE_ID = process.env.ROLE_ID;

client.login(DISCORD_TOKEN);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId } = req.body;

    try {
      const guild = await client.guilds.fetch(GUILD_ID);
      const member = await guild.members.fetch(userId);

      if (!member.roles.cache.has(ROLE_ID)) {
        await member.roles.add(ROLE_ID);
        res.status(200).json({ message: 'Role added successfully' });
      } else {
        res.status(400).json({ message: 'User already has the role' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add role' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
