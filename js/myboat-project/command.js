import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('PASTE TOKEN HERE');

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(1184734258523287563), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }