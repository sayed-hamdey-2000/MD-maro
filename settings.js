//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = '𝑇𝐻𝐸 𝑀𝐴𝑅𝛩 𝐵𝛩𝑇' //ur bot name
global.ownernumber = ['994400324930','201208386317','201080898312','201119571169']//ur owner number, dont add more than one
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://youtu.be/Ljt4MaHq1LM"
global.wagc = "https://whatsapp.com/channel/0029VaJxI9uJkK7BedTH0D11"
global.themeemoji = '🪀'
global.wm = "𝑇𝐻𝐸 𝑀𝐴𝑅𝛩 𝐵𝛩𝑇"
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD13' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+994400324930"
global.creator = "994400324930@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["994400324930"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
