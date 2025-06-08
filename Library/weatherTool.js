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
 *
 * 各天氣預報時間
 * → 0 ~ 13 共 14 筆，舊 ~ 新
 * 天氣預報分類
 * cwaopendata.dataset.location[0].weatherElement[0].elementName
 * 值：Wx 天氣現象 / MaxT 最高氣溫 / MinT 最低氣溫
 *
 */

// 全台一週天氣預報，共通點：篩出縣市 → 區分天 → 篩出時間段 → 取得內容（WX/MaxT/MinT）
function apiCity() {
  // 預定 return 內容
}

//

// 小幫手系列：篩內容
