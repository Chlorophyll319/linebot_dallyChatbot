import "dotenv/config";
import linebot from "linebot";

// 匯入環境檔
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

bot.listen("/", 3000, () => {
  console.log("(呆栗測試中)呆栗聽到你在呼喚呆栗喔，呆栗已經起來ㄌ٩(ˊ〇ˋ*)و");
});
