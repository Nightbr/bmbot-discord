var Discord = require('discord.io');
var feed = require("feed-read");
var nconf = require('nconf');

// get conf
nconf.file('config.json');
var RSSFEED_BM = "http://dites.bonjourmadame.fr/rss";

// Init dicordBot
var bot = new Discord.Client({
    token: nconf.get('token'),
    autorun: true
});

// When bot is ready
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

// Send the retrieve Madame to the channelID
// random=true|false (if false, it will send the latest Madame)
function sendMadame(random, channelID){
    feed(RSSFEED_BM, function(err, articles) {
        var index = 0;
        if(random){
            index = Math.floor(Math.random() * (articles.length - 1));
        }
        var re = /<img[^>]+src="(http*:\/\/[^">]+)"/g;
        var results = re.exec(articles[index].content);
        var madame = results[1];

        bot.sendMessage({
            to: channelID,
            message: madame
        });
    });
}

// MAIN bot functions
bot.on('message', function(user, userID, channelID, message, event) {
    switch(message) {
        case "helpMadame":
            bot.sendMessage({
                to: channelID,
                message: "**helpMadame**: commands list\n**lastMadame**: show the last Madame\n**randomMadame**: show a random Madame"
            });
            break;
        case "lastMadame":
            sendMadame(false, channelID);
            break;
        case "randomMadame":
            sendMadame(true, channelID);
            break;
    }
});

// Connect the bot
bot.connect()

// Handle disconnect
if (process.platform === "win32") {
  require("readline")
    .createInterface({
      input: process.stdin,
      output: process.stdout
    })
    .on("SIGINT", function () {
      process.emit("SIGINT");
    });
}

process.on("SIGINT", function () {
  // graceful shutdown
  console.log("DOWN");
  bot.disconnect();
  process.exit();
});
