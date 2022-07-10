# VoiceCounter
It's Discord bot for count max online in voice channels

For start you need:
1) Create Discord Bot (https://discord.com/developers/applications)
2) Invite him on your server
3) Create && fill config.json

config.json is something like:
    
{
    
    "token": "###_DISCORD_API_TOKEN_###",
    "server": "###_DISCORD_SERVER(GUILD)_###",
    "voice_channels": [
    "###_VOICE_CHANNELS_AS_ARRAY_###"
     ],
    "text_channel": "###_TEXT_CHANNEL_###"
}
    
4) docker-compose up .
5) ???
6) PROFIT!



"token": "###_DISCORD_API_TOKEN_###" - its https://discord.com/developers/applications/*YOUR_APPLICATION*/bot, then tab "Bot", button - "Reset token", if you forgot your token.

May need to recreate image with command "docker-compose up --build", if you put wrong token, then receive error lika
"Error [TOKEN_INVALID]: An invalid token was provided."
Then change token in config.json, but nothing change.
