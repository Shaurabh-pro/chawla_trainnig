const { Client, GatewayIntentBits, Message, InteractionCollector } = require("discord.js")
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent] });

client.on('messageCreate', (Message) => {
    if(Message.author.bot) return;
    Message.reply('hye how can i help you..')
})

client.on('interactionCreate', (Interaction) => {
    console.log(Interaction);
    Interaction.reply('pong..!')
})

client.login('MTE4NDczNDI1ODUyMzI4NzU2Mw.GtgwZW.eb1XCp0wtls_SC9lMrouKF0fyKLKv5i6BkCsqw');