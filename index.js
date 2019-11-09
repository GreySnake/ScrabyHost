const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log("Logged in as " + client.user.tag)
  client.user.setActivity("g!help", {type: "Listening"})
  client.login("NTMyMjE3NzUyMzA4Njc4NjU3.XbsGQg.HpM51V5jVmyq0yPCjGYEvANr3RM")
  //console.log("Servers who I am:")
    //client.guilds.forEach((guild) => {
      //  console.log(" - " + guild.name)
    })    

client.on("message", msg => {
  if (msg.content === "g!ping") {
    const Embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription("Pong!")
    msg.channel.send(Embed)
    console.log("A server has typed command g!pong")
  }
});

client.on("message", msg => {
	if (msg.content === "g!help") {
		const Embed = new Discord.RichEmbed()
		.setColor("#01FFF7")
		.addField("Info about Scraby:", "``Maked by GreySnake#0253 and Antrax#3322``", true)
		.setTitle("**Click here to invite**")
		.setTitle("Discord Server")
		.setURL("https://discord.gg/BDBrehK")
		.setAuthor("Welcome to Scraby Bot!")
		.setDescription("``Hi user! My name is Scraby and I am a nice bot! Don't forget to invite me!``")
		.setFooter("Thanks because you read this!")
		.setTimestamp()
		msg.channel.send(Embed)
		console.log("A server has typed command g!help")


	}
});
client.on("message", msg => {
	if (msg.content === "g!prefix") {
		msg.channel.send("my prefix is __**g!**__. This prefix __**CAN'T**__ be changed.")
		console.log("A server has typed command g!prefix")
	}

});
client.on("message", msg => {
	if (msg.content === "g!cmds") {
		const Embed = new Discord.RichEmbed()
		.setColor("#3BFF01")
		.addField("**Usefull commands**", "``g!help``, ``g!prefix``, ``g!servers``, ``g!news``, ``g!invite``, ``g!info``")
		.addField("**Fun commands**", "``g!ping``, ``g!number``")
		.addField("**Image commands**", "``g!avatar g!fucku``")
		.setFooter("Thanks because you read this!")
		.setTimestamp()
		msg.channel.send(Embed)
		console.log("A server has typed command g!cmds")
	}
});
client.on("message", msg => {
	if (msg.content === "g!news") {
		const Embed = new Discord.RichEmbed()
		.setColor("#CC0022")
		.setTitle("What's new to the bot?")
		.setDescription("**New command:** ``g!info`` for information of the bot")
		.setFooter("Thanks because you read this!")
		.setTimestamp()
		msg.channel.send(Embed)
		console.log("A server has typed command g!news")
	}
});
client.on("message", msg => {
	if (msg.content === "g!servers") {
		msg.channel.send("Servers who I am:")
    	client.guilds.forEach((guild) => {
        msg.channel.send(" - " + guild.name)
        console.log("A server has typed command g!servers")

 	   })
	}
});
client.on("message", msg => {
	if(msg.content === "g!number") {
		var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]; //
		var random = number[Math.floor(Math.random()*number.length)];
		const Embed = new Discord.RichEmbed()
		.setColor("#FFF8DC")
		.setTitle("Random Number")
		.setDescription("Your random number is " + random)
		msg.channel.send(Embed)
		console.log("A server has typed command g!number")

	}

});
client.on("message", message => {
	if(message.content === "g!info") {
		const Embed = new Discord.RichEmbed()
		.setColor("#FFFFFF")
		.addField("**Bot Creator**", "``GreySnake#0253``", true)
		.addField("**Data launched**", "``10/31/2019``", true)
		.addField("**Problems with bot**", "Command **g!follow** has problem, trying to fix him", true)
		.setTimestamp()
		message.channel.send(Embed)
	}
});
client.on("message", message => {
  if (message.content === "g!avatar") {
    const Embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("No image? Click here")
    .setURL(message.author.avatarURL)
    .setImage(message.author.avatarURL)
    .setTimestamp()
    message.channel.send(Embed)
    console.log("A server has typed command g!avatar")
	}
});
client.on("message", message => {
   if(message.content === "g!invite") {
    const Embed = new Discord.RichEmbed()
    .setColor("#00FF00")
    .setTitle("Click here to invite")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=532217752308678657&scope=bot&permissions=2146958591")
    .setTimestamp()
    message.channel.send(Embed)
    console.log("A server has typed command g!invite")
	}
});
client.on("message", message => {
   if(message.content === "g!fucku") {
 	const Embed = new Discord.RichEmbed()
 	.setColor("#FFFFFF")
 	.setTitle("No image? Click here")
	.setURL("https://imgur.com/a/0DsdyvE")
	.setImage("https://imgur.com/a/0DsdyvE")
	.setTimestamp()
	message.channel.send(Embed)
  	console.log("A server has typed command g!fucku")
   	}
});
client.on("message", message => {
   if (message.content === "g!follow") {
   	message.channel.send("no, can't send the command. reason: working")
   }
});
