var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "Press the Buttons",
			assets : {
				large_image : "astronaut-logo-design-illustration_105179-74",
				large_text : "RehanPlayz"
			},
			buttons : [{label : "Youtube" , url : "https://www.youtube.com/channel/UC7QF1pb6AytDD5XWlSVwvAw"},{label : "Discord" , url : "https://discord.gg/9jvZ7MJ2xt"}]
		}
	})
})
client.login({ clientId : "832166601969106984" }).catch(console.error);
