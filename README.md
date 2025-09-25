### VoiceCounter

A Discord bot that tracks the peak online users in voice channels for the current day.

## Quick Start

1.  **Create a bot** on the [Discord Developer Portal](https://discord.com/developers/applications)
2.  **Invite it to your server**
3.  **Fill a `config.json`** file using the template below
4.  **Run:** `docker-compose up -d`

## Config (`config.json`)

```json
{
    "token": "YOUR_BOT_TOKEN",
    "server": "YOUR_SERVER_ID",
    "voice_channels": ["VOICE_CHANNEL_ID_1","VOICE_CHANNEL_ID_2", ... ],
    "text_channel": "TEXT_CHANNEL_ID"
}
```

## How to get IDs

*   **Token:** Discord Dev Portal → Your Application → Bot → Reset Token
*   **Server ID:** Enable Developer Mode in Discord → Right-click server name → "Copy Server ID"
*   **Channel IDs:** Right-click on the channel → "Copy ID"
Tip: You can also copy Server and Channel IDs from the address bar in the Discord web app.

## Troubleshooting

Getting `TOKEN_INVALID`? Update the token in `config.json` and rebuild the container:

```bash
docker-compose up --build
```
