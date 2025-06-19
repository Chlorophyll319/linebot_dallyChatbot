// Google Sheets 操作工具（新版，金鑰從 .env 取得）
import { GoogleSpreadsheet } from "google-spreadsheet";
import dotenv from "dotenv";
dotenv.config();

// 讀取 Service Account 金鑰（字串）
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
// 宣告試算表
// 🧩 換成你自己的 Sheet ID（從網址中擷取）→已換
const SHEET_ID = "1SBOq0cG13AbJtrbXqHar_uPL2dWn1QTPITKFZHqVzdQ";
const doc = new GoogleSpreadsheet(SHEET_ID);

/**
 * 初始化試算表連線，登入並讀取第一個工作表。
 * @returns {Promise<GoogleSpreadsheetWorksheet>} 工作表實例
 */

// 初始化試算表（登入帳號 + 讀取）
// 📄「開啟這份表 → 登入帳戶 → 拿到可以操作的 sheet」的全自動流程
async function init() {
  // 使用金鑰登入 Google
  await doc.useServiceAccountAuth(serviceAccount);
  // 載入整張表單的資訊
  await doc.loadInfo();
  // 回傳第一個工作表（=工作表1）
  return doc.sheetsByIndex[0];
}

/**
 * 根據使用者 ID 查詢預設城市資料。
 * @param {string} userId - 使用者的 LINE ID 或識別碼
 * @returns {Promise<{userId: string, defaultCity: string} | null>} 使用者資料，若無則回傳 null
 */

// 查找使用者資料
async function getFriendData(userId) {
  const sheet = await init();
  // 把整張表列出來
  const rows = await sheet.getRows();
  // 找對應 userId
  const row = rows.find((r) => r.userId === userId);
  return row ? { userId: row.userId, defaultCity: row.defaultCity } : null;
}

/**
 * 儲存或更新使用者的設定資料（如預設城市）。
 * 若使用者不存在，則新增一筆；若已存在則更新指定欄位。
 *
 * @param {string} userId - 使用者的 LINE ID 或識別碼
 * @param {string} field - 欲儲存的欄位名稱，例如 "defaultCity"
 * @param {string} value - 欲儲存的值，例如 "台中市"
 * @returns {Promise<void>}
 */

// 儲存或更新使用者資料
async function saveFriendData(userId, field, value) {
  const sheet = await init();
  const rows = await sheet.getRows();
  const row = rows.find((r) => r.userId === userId);

  if (row) {
    row[field] = value;
    // 更新
    await row.save();
  } else {
    const data = { userId };
    data[field] = value;
    // 新增
    await sheet.addRow(data);
  }
}

export default { getFriendData, saveFriendData };
