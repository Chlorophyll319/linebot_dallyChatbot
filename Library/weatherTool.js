// mvp功能
import { 一週各縣市 } from "../api/weatherApi.js";

/**
 * @param {raw} 未處理的API資料 - 一整坨
 * @param {string}  api名字確認
 * @returns {} 輸出的東西
 */

/**
 * 全台一週天氣預報 Api結構
 * 資料名稱：cwaopendata.dataset.datasetInfo.datasetDescription.value
 * api獲取時間：cwaopendata.dataset.datasetInfo.issueTime
 * api上傳時間：cwaopendata.dataset.datasetInfo.update
 * 地點名字：cwaopendata.dataset.location[0].locationName
 * 在 location[0] 改 index 換地點
 * ※縣市為固定 index 需整理
 *
 * 天氣預報分類
 * cwaopendata.dataset.location[0].weatherElement[0].elementName
 * → 0 ~ 2 ，共 3 筆資料
 * → 值： 0 Wx 天氣現象 / 1 MaxT 最高氣溫 / 2 MinT 最低氣溫
 * → 在 weatherElement[0] 改index 換 天氣現象
 *
 * 各天氣預報時間
 * cwaopendata.dataset.location[0].weatherElement[0].time[0]
 * → 0 ~ 13 共 14 筆，舊 ~ 新
 * → 在 time[0] 改 index 換時間區間
 *
 * 預測區間
 * 開始時間：cwaopendata.dataset.location[0].weatherElement[0].time[0].startTime
 * 結束時間：cwaopendata.dataset.location[0].weatherElement[0].time[0].endTime
 *
 * 天氣描述資料
 * 名稱：cwaopendata.dataset.location[0].weatherElement[0].time[1].parameter.parameterName
 * 代號：cwaopendata.dataset.location[0].weatherElement[0].time[1].parameter.parameterValue
 *
 */

// 全台一週天氣預報，共通點：篩出縣市 → 區分天 → 篩出時間段 → 取得內容（WX/MaxT/MinT）
function apiCity() {
  // 預定 return 內容
}

//

// 小幫手系列：篩內容
