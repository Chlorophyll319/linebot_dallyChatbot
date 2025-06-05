// mvp功能
// 匯入本地 JSON
import askGodData from "../data/info/AsakusaFortuneTelling.json";

// 取得淺草100籤資料
export async function askGod() {
  try {
    console.log(askGodData);
    console.log("淺草100籤");
    return askGodData;
  } catch (err) {
    console.log(err.message);
    console.log("淺草100籤");
    console.log("救命啊，有🐛");
    return null;
  }
}
