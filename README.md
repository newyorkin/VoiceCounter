# VoiceCounter
It's Discord bot for count max online in voice channels today.

For start you need:
1) Create Discord Bot (https://discord.com/developers/applications)
2) Invite him on your server
3) Create && fill config.json

config.json is something like:
    
{
    
    "token": "###_DISCORD_API_TOKEN_###",
    "server": "###_DISCORD_SERVER(GUILD)_ID###",
    "voice_channels": [
    "###_VOICE_CHANNELS_ID_AS_ARRAY_###"
     ],
    "text_channel": "###_TEXT_CHANNEL_ID###"
}
    
4) docker-compose up .
5) ???
6) PROFIT!



"token": "###_DISCORD_API_TOKEN_###" - its https://discord.com/developers/applications/*YOUR_APPLICATION*/bot, then tab "Bot", button - "Reset token", if you forgot your token.
"server": "###_DISCORD_SERVER(GUILD)_###" u can find it if open discord in browser and go to your server https://discord.com/channels/XXXXXXXXXXXXXXXXXXXX/YYYYYYYYYYYYYYY, XXXXXXXXXXXXXXXXXXXX is server_id
"text_channel": last number in url YYYYYYYYYYYYYYY is channel id
"voice_channels": is similar text channel, but u need open text chat to see YYYYYYYYYYYYYYY id 

May need to recreate image with command "docker-compose up --build", if you put wrong token, then receive error lika
"Error [TOKEN_INVALID]: An invalid token was provided."
Then change token in config.json, but nothing change.


