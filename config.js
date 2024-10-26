const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "─̻ͥ─ᷧ͢─ⷨ ᴛɪᴋ ᴛᴏᴋꪶᴅʜᴇᴠ" ʜ" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94766494699";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94766494699";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_18_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1xcXRGNUQvQmRzWEhGZHU3aVFTNzJ0Ym55cDBmclhsQU9qVSs3WFg0QWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1Rd3lWUGNHVDFTd1hldjV1Z3FJV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjE4MjZhNDAtZjRlZC00YTEzLThiZDAtODY3OWVmYTVkZmY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTA5LFxuICAgICAgNjIsXG4gICAgICA0NyxcbiAgICAgIDEzOSxcbiAgICAgIDI1NSxcbiAgICAgIDE5MyxcbiAgICAgIDEwMCxcbiAgICAgIDcsXG4gICAgICAxNTMsXG4gICAgICAyMDksXG4gICAgICAxMzMsXG4gICAgICAyNixcbiAgICAgIDk5LFxuICAgICAgMjA1LFxuICAgICAgMTE2LFxuICAgICAgNzgsXG4gICAgICAxODcsXG4gICAgICAzNixcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxNTIsXG4gICAgICAxNDYsXG4gICAgICA0NSxcbiAgICAgIDEyMyxcbiAgICAgIDIzNyxcbiAgICAgIDE1NixcbiAgICAgIDg0LFxuICAgICAgMjE0LFxuICAgICAgMjM1LFxuICAgICAgMjM5LFxuICAgICAgOTMsXG4gICAgICAxMjksXG4gICAgICA1OSxcbiAgICAgIDYzLFxuICAgICAgNzgsXG4gICAgICAyMjgsXG4gICAgICAxNTAsXG4gICAgICAyMjksXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFZFTE1GUVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY2NDk0Njk5OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzY2MTg3NDA5NTcyOTU6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJUaGJvQkVQYkk5TGdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVTVhOQUMyaG9Sb0tLZVQ5WEdKOUgrNVppWUlSelhuSXk3ZTBNQWRHUEdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRHYmdhUFRtWXBtdFZaZ1VmSUlEdWFvdlpKSDZrZHFPL2hOTGlMRDg3R0tKczM4aFdLL0RkOVAvRzAyVml6RHN3N2xrTy9vYXhIb3hScXFSRTRQOERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImowTUFQTW83Vk1kL3djSVcvUGlZc0MzVkxIZXo0QWpscWxTY1hrQmdvcWhsRDNDMytOVWVPTG1TenBiSlkrZlBHc2pvZWVoeHRoaTNrTlVvV0MwSUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY2NDk0Njk5OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTk2MzEyOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "MADE BY 𝐎𝐋𝐃 𝐃𝐡𝐞𝐯 𝐗 𝐁𝐞𝐚💗" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SUHAIL MD",
  ownername:process.env.OWNER_NAME|| "─̻ͥ─ᷧ͢─ⷨ ᴛɪᴋ ᴛᴏᴋꪶᴅʜᴇᴠ" ʜ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
