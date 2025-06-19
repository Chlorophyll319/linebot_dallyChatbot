// mvp功能
// 天氣預報
import { 一週各縣市 } from "../api/weatherApi.js";
// 天氣預報api各城市對照
import { cityIndex } from "../Data/info/weatherApiCityIndex.js";
// 小機器人話術
import { weatherTalkMap } from "../Data/miniBotPhrases/weather/weatherTalkMap.js";

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
// 1. 格式化（洗資料、拆資料）
// - 使用者預設
export function userInfo(userCity, raw) {
  // 使用者預設城市index
  const x = cityIndex[userCity];
  // 根據使用者資料之預設地點抓出對應的index
  return raw.cwaopendata.dataset.location[x]; // 陣列
}

// - 提取地名與 Wx / MinT / MaxT 結構
export function parseTwAweek(userSet) {
  // 地點
  const userPlace = userSet.locationName;
  // 天氣現象 wx
  const wxArray = userSet.weatherElement[0];
  // 最高溫
  const maxTArray = userSet.weatherElement[1];
  // 最低溫
  const minTArray = userSet.weatherElement[2];

  return {
    userPlace,
    wxArray,
    minTArray,
    maxTArray,
  };
}

// - 切分時間工具成物件

export function splitByDate(dataObj) {
  // 已整理後的資料存放區，key為日期
  // { key日期: {  凌晨: index,白天: index,晚上: index  } ;};
  const weatherObj = {};
  // 1. 索引 0 ~ 13 每一筆都取出
  for (let i = 0; i < dataObj.time.length; i++) {
    let index = i;
    // 只留下前十個字為 年月日 .slice(0,10)
    let startDate = dataObj.time[i].startTime.slice(0, 10);
    let endDate = dataObj.time[i].endTime.slice(0, 10);
    // 2. 初始化資料結構
    // 每個日期先放三個欄位，值為null
    if (!weatherObj[startDate]) {
      weatherObj[startDate] = { 凌晨: null, 白天: null, 夜晚: null };
    }
    if (!weatherObj[endDate]) {
      weatherObj[endDate] = { 凌晨: null, 白天: null, 夜晚: null };
    }

    // 3. 依照 開始時間 與 結束時間 排序
    // - 開始時間 與 結束時間 一致 為 該天 早上
    // - 開始時間 與 結束時間 不一致 開始時間 為該天凌晨；結束時間 為該天晚上
    if (startDate === endDate) {
      weatherObj[startDate]["白天"] = index;
    } else {
      weatherObj[startDate]["夜晚"] = index;
      weatherObj[endDate]["凌晨"] = index;
    }
  }
  return weatherObj;
}

// ------------------------------//
// 2. 資料重組（組裝）
// function reformTwAweek() {}

// 各縣市小幫手系列
// 1. 格式化
// 2. 資料重組

// ※測試用 function： A.抓出使用者ID的預設城市的與API的對應索引 B.從來源API中抓預設城市的資訊 C.分割整理各項目（天氣現象/最高溫/最低溫）資訊，以日期為 D.整理檔案
async function testFunc() {
  const raw = await 一週各縣市();
  const userCity = "新北市";
  // A. 取得預設城市的 API 對應索引
  const stepA = userInfo(userCity, raw);
  // B. 取得該城市的天氣資訊
  const stepB = parseTwAweek(stepA);
  // console.log("stepB (parseTwAweek):", stepB);
  // C. 以日期分割整理 Wx/MinT/MaxT
  const wxByDate = splitByDate(stepB.wxArray);
  console.log("wxByDate:", wxByDate);
  // const minTByDate = splitByDate(stepB.minTArray);
  // const maxTByDate = splitByDate(stepB.maxTArray);
  // console.log("minTByDate:", minTByDate);
  // console.log("maxTByDate:", maxTByDate);
  // D. 合併（物件）
  // const stepD = reformTwAweek(stepC);
  // console.log("stepD (reformTwAweek):", stepD);
}

testFunc();
