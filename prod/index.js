"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const IntentOptions_1 = require("./config/IntentOptions");
(async () => {
    const BOT = new discord_js_1.Client({ intents: IntentOptions_1.IntentOptions });
    BOT.on("ready", () => {
        console.log("Connected to Discord With :dev!");
    });
    await BOT.login(process.env.BOT_TOKEN);
})();
