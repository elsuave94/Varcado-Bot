const {Client, GatewayIntentBits} = require(`discord.js`)
const client = new Client({intents: [GatewayIntentBits.GuildMembers]})
const path = require(`node:path`)

const {botToken} = require(`./botSettings/manualSettings.json`)

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute(client, ...args));
	}
}

client.login(botToken)