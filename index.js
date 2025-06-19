import "dotenv/config";
import linebot from "linebot";
import { Aweek } from "./Module/miniBot-weather.js";
import * as weatherTool from "./Library/weatherTool.js";
import * as weatherApi from "./Api/weatherApi.js";
import sheetDB from "./friends/sheetDB.js";

// 匯入環境檔
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

// 監聽文字訊息事件
// 💬 監聽訊息事件
/*
bot.on("message", async (event) => {
  const userMessage = event.message.text;
  const userID = event.source.userId;
  const msg = userMessage;

  if (msg === "一週天氣") {
    try {
      const say = await Aweek(userMessage, userID);
      return event.reply(say);
    } catch (err) {
      console.error("黛莉好暈好暈，要檢查啦👉 ", err);
    }
  }

  // 其他
});
*/

bot.on("message", async (event) => {
  console.log("✅ 收到訊息：", event.message.text); // Step 1：確認 webhook 有打進來

  const userMessage = event.message.text;
  const userID = event.source.userId;

  if (userMessage === "一週天氣") {
    try {
      const say = await Aweek();
      console.log("📨 機器人要說：", say); // Step 2：看看是不是空的
      return event
        .reply(say)
        .catch((err) => console.error("❌ 回傳失敗：", err)); // Step 3：確保有錯就印出
    } catch (err) {
      console.error("❌ 發生錯誤：", err);
      return event.reply("⚠️ 天氣查詢失敗，請稍後再試！");
    }
  }
});

// 黛栗啟動
bot.listen("/", 3000, () => {
  console.log("(呆栗測試中)呆栗聽到你在呼喚呆栗喔，呆栗已經起來ㄌ٩(ˊ〇ˋ*)و");
});
