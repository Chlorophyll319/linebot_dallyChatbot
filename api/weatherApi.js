// mvp功能
// 匯入區
import axios from "axios";
import apiList from "../data/info/apiList.json";

// ??是否需要return
// ??可以export那麼多東西嗎@@ 我依稀記得好像什麼時候可以很多個麼時候只能一個來著@@

// 鄉鎮天氣預報-台灣未來1週天氣預報API
export async function 全台1W天氣預報() {
  try {
    const url = apiList["天氣預報"][0].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][0].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][0].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 鄉鎮天氣預報-台灣未來3天天氣預報API
export async function 全台3D天氣預報() {
  try {
    const url = apiList["天氣預報"][1].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][1].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][1].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 鄉鎮天氣預報-臺北市未來3天天氣預報API
export async function 台北市3D天氣預報() {
  try {
    const url = apiList["天氣預報"][2].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][2].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][2].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 天氣特報-各別天氣警特報之內容及所影響之區域API
export async function 天氣警報() {
  try {
    const url = apiList["天氣預報"][3].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][3].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][3].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 現在天氣觀測報告API
export async function 現在天氣() {
  try {
    const url = apiList["天氣預報"][4].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][4].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][4].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 一般天氣預報-今明36小時天氣預報API
export async function 今明36H天氣預報() {
  try {
    const url = apiList["天氣預報"][5].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][5].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][5].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 自動雨量站-雨量觀測資料API
export async function 雨量觀測() {
  try {
    const url = apiList["天氣預報"][6].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][6].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][6].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 健康氣象-熱傷害指數及警示全台各鄉鎮五日逐三小時預報API
export async function 熱傷害5D() {
  try {
    const url = apiList["天氣預報"][7].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][7].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][7].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 健康氣象冷傷害指數及警示全臺各鄉鎮五日預報API
export async function 冷傷害5D() {
  try {
    const url = apiList["天氣預報"][8].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][8].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][8].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 健康氣象冷傷害指數及警示全臺各鄉鎮未來72小時逐3小時預報API
export async function 冷傷害72H() {
  try {
    const url = apiList["天氣預報"][9].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][9].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][9].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 健康氣象-溫差提醒指數及警示全臺各鄉鎮五日預報API
export async function 溫差提醒5D() {
  try {
    const url = apiList["天氣預報"][10].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][10].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][10].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 健康氣象-溫差提醒指數及警示全臺各鄉鎮未來72小時逐3小時預報API
export async function 溫差提醒72H() {
  try {
    const url = apiList["天氣預報"][11].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][11].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][11].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 自動氣象站-氣象觀測資料API
export async function 自動氣象站() {
  try {
    const url = apiList["天氣預報"][12].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][12].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][12].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}

// 紫外線指數-每日紫外線指數最大值API
export async function 紫外線指數() {
  try {
    const url = apiList["天氣預報"][13].url;
    const api = await axios.get(url);
    console.log(apiList["天氣預報"][13].apiName);
    return api.data;
  } catch (err) {
    console.log(err.message);
    console.log(apiList["天氣預報"][13].apiName);
    console.log("救命啊，有🐛");
    return null;
  }
}
