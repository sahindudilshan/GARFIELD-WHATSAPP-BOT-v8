// 👈 You Can change this your choice
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*〲ꜱʜᴀɴ⃜│⦁⃝〽️⃯⃖❤️ᷤ*
*I am 18 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Join My whatsapp group - https://chat.whatsapp.com/LvBi39qA9eSEG66OzQR768*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+94704227434'] //👈  Enter Your number
global.premium =  ['+94704227434'] //👈  Enter Your number
global.ownernomer = '+94704227434' //👈  Enter Your number
global.ownername = '〲ꜱʜᴀɴ⃜│⦁⃝〽️⃯⃖❤️ᷤ' //👈 Enter Your name
global.botname = '〲ꜱʜᴀɴ⃜│⦁⃝〽️⃯⃖❤️ᷤ ＢＯＴ' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 〲ꜱʜᴀɴ⃜│⦁⃝〽️⃯⃖❤️ᷤ 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://github.com/〲ꜱʜᴀɴ⃜│⦁⃝〽️⃯⃖❤️ᷤ/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'Sri Lankan,Buddhist' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now) 
global.myweb = 'https://www.facebook.com/garfieldbots/' // 👈 Enter your Social media link to follow now button
global.packname = '〲ꜱʜᴀɴ⃜│⦁⃝〽️⃯⃖❤️ᷤ'  // 👈 You Can change this your choice 
global.author = '〲ꜱʜᴀɴ⃜│⦁⃝〽️⃯⃖❤️ᷤ ✭DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
