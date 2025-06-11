// mvp功能
import { 一週各縣市 } from "../api/weatherApi.js";
import { Setting } from "../Data/info/friends.js";
import { cityIndex } from "../Data/info/weatherApiCityIndex.js";

/**
 * @property {Object} raw 原始資料
 */

/**
 * 全台一週天氣預報 API 結構
 *
 * @typedef {Object} WeatherForecast
 * @property {string} cwaopendata.dataset.datasetInfo.datasetDescription - 資料名稱
 * @property {string} cwaopendata.dataset.datasetInfo.issueTime - API 獲取時間
 * @property {string} cwaopendata.dataset.datasetInfo.update - API 上傳時間
 *
 * @property {Object[]} cwaopendata.dataset.location - 地點陣列
 * @property {string} cwaopendata.dataset.location[].locationName - 地點名稱（使用 index 切換地點，縣市為固定 index 需整理）
 *
 * @property {Object[]} cwaopendata.dataset.location[].weatherElement - 該地點天氣預報分類
 * @property {string} cwaopendata.dataset.location[].weatherElement[].elementName - 天氣元素名稱：Wx（天氣現象）、MaxT（最高氣溫）、MinT（最低氣溫）
 * → index 0: Wx
 * → index 1: MaxT
 * → index 2: MinT
 *
 * @property {Object[]} cwaopendata.dataset.location[].weatherElement[].time - 各天氣預報時間區間（共14筆，從舊到新）
 * @property {string} cwaopendata.dataset.location[].weatherElement[].time[].startTime - 預測開始時間
 * @property {string} cwaopendata.dataset.location[].weatherElement[].time[].endTime - 預測結束時間
 *
 * @property {Object} cwaopendata.dataset.location[].weatherElement[].time[].parameter - 天氣描述資料
 * @property {string} cwaopendata.dataset.location[].weatherElement[].time[].parameter.parameterName - 描述名稱
 * @property {string} cwaopendata.dataset.location[].weatherElement[].time[].parameter.parameterValue - 描述代號
 */

// 全台一週天氣預報
// 格式化（洗資料、拆資料）
/* function parseTwAweek(Setting, raw) {
  // 抓這名使用者的預設城市
  const 
  // 根據使用者資料之預設地點抓出對應的index
  const local = cwaopendata.dataset.location[];

  // 預定 return 內容
  return "窩不行了";
} */
// 資料重組（組裝）

// 各縣市小幫手系列
// 格式化
// 資料重組

// 測試用 function：印出一週各縣市 API 的全部內容
async function testPrintAllWeekWeather() {
  const data = await 一週各縣市();
  return console.log("一週各縣市內容：", data.cwaopendata.dataset.location);
}
console.log(testPrintAllWeekWeather());
