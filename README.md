# BMBot-discord

A gently discord bot who will give you Madame from [Bonjour Madame](http://www.bonjourmadame.fr/) in Discord Channel.

## Bot commands

* `helpMadame`: commands list
* `lastMadame`: show the last Madame
* `randomMadame`: show a random Madame

## Install and configure the bot

Require NodeJs.

1. Clone the project
2. install node dependencies: `npm install`
3. Create a discord bot here <https://discordapp.com/developers/applications/me>
4. Activate the APP BOT USER and retrieve the bot Token
5. Create a `config.json` from `config.example.json` and add your bot token here
6. Start the bot: `npm start` or `node bmbot.js`

In order to invite the bot to your Discord server, build you OAuth url with the clientId of your bot:

    https://discordapp.com/oauth2/authorize?client_id=YOURBOTCLIENTID&scope=bot

You can use mine:

* Register the bot: [Click here!](https://discordapp.com/oauth2/authorize?client_id=198858169546440704&scope=bot)

## ToDo

* Send the new Madame each day at ~10am
* Cache system for the RSS Feeds
* Configure other Bonjour services
* Custom bot conf (avatar, emails, in game message, ...)
* Moar docs (pictures, ...)
* Static website to add the bot to a Discord Server
