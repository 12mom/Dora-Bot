module.exports.config = {
  name: "اوامر",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "حمودي سان 🇸🇩",
  description: "قائمة الأوامر كاملة بأسلوب Dora Bot 🍭🍬",
  commandCategory: "النظام",
  usages: "[Name module]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    module.exports.config = {
  name: "اوامر",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "حمودي سان 🇸🇩",
  description: "قائمة الأوامر كاملة بأسلوب Dora Bot 🍭🍬",
  commandCategory: "النظام",
  usages: "[Name module]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};

module.exports.languages = {
  "en": {
    "moduleInfo": "🍭✨ 「 %1 」 ✨🍬\n🍬 %2 🍭\n\n📌 Usage: %3\n📂 Category: %4\n⏳ Waiting time: %5 seconds\n👑 Permission: %6\n\n🍭 Coded with love by %7 🍬",
    "helpList": "🍬🍭 هناك %1 أمر ممتع في Dora Bot! 🍭🍬\nاستخدم: ✨ “%2help nameCommand” ✨ لمعرفة كيفية استخدام كل أمر! 🍬\n━━━━━━━━━━━━━━━━━━━",
    "user": "🍭 مستخدم لطيف 🍬",
    "adminGroup": "🍬 أدمن المجموعة 🍭",
    "adminBot": "👑 أدمن البوت السحري 👑"
  }
};

module.exports.run = function ({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[
