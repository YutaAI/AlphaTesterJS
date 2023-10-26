require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const mongoose = require('mongoose');
const path = require('path');

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers], // Your bot's intents here
});

new CommandHandler({
  client, // Discord.js client object | Required by default
  commandsPath: path.join(__dirname, 'commands'), // The commands directory
  eventsPath: path.join(__dirname, 'events'), // The events directory
  validationsPath: path.join(__dirname, 'validations'), // Only works if commandsPath is provided
  charactersPath: path.join(__dirname, 'characters'), // The characters directory
  testServer: '1102189685511565334', // To register guild-based commands (if it's not provided commands will be registered globally)
});

(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB.');

    client.login(process.env.TOKEN);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();