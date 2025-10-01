// 地図を初期化
let map;
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 26.5, lng: 127.9 }, // 沖縄全体が見える位置
    zoom: 9,
  });

  applyFilters(); 
}

 
const facilities = [
  {
    "施設名": "沖縄心理カウンセリング波詩",
    "住所": "沖縄県那覇市繁多川1丁目13-11 サンフラワー桜花101",
    "HP": "https://naminouta.okinawa/",
    "緯度": 26.21165,
    "経度": 127.70585,
    "地域": "南部",
    "対象者": "個人",
    "特定の対象者": "観光客, 指定なし",
    "サービス": "カウンセリング, 心理検査",
    "相談内容": "DV被害, 虐待, ハラスメント, トラウマ",
　　"カウンセリング手法": "認知行動療法, 催眠療法, ヒプノセラピー, FAP療法, カップルセラピー",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
  },
  {
    "施設名": "くくるカウンセリングルーム",
    "住所": "沖縄県国頭郡うるま市石川3170-500",
    "HP": "https://kukuru-oki.com/",
    "緯度": 26.44609,
    "経度": 127.83801,
    "地域": "中部",
    "対象者": "個人",
　　"特定の対象者": "指定なし",
　　"サービス": "カウンセリング",
    "相談内容": "こころの悩み全般",
　　"カウンセリング手法": "指定なし",
　　"カウンセリングのオンライン対応": "不可",
　　"予約": "要"
  },
  {
    "施設名": "カウンセリングスペース ココロおき楽",
    "住所": "沖縄県島尻郡南風原町神里55",
    "HP": "http://cocoro-okinawa.com/",
    "緯度": 26.17449,
    "経度": 127.73041,
    "地域": "南部",
    "対象者": "個人, 行政・企業",
　　"特定の対象者": "指定なし",
　　"サービス": "カウンセリング, 心理検査,",
    "相談内容": "不安全般, うつ, 恐怖, 人間関係, こころの悩み全般",
    "カウンセリング手法": "認知行動療法",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
  },
  {
    "施設名": "さめしま心理相談室",
    "住所": "〒904-0105 沖縄県中頭郡北谷町",
    "HP": "https://www.same-counselor.com/",
    "緯度": 26.31765,
    "経度": 127.77557,
    "地域": "中部",
    "対象者": "個人",
　　"特定の対象者": "指定なし",
　　"サービス": "カウンセリング, 心理検査",
    "相談内容": "心の悩み全般",
　　"カウンセリング手法": "来談者中心療法, 家族療法, 解決志向アプローチ, プレイセラピー",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
　},
  {
　　"施設名": "カウンセリングオフィスKANASA",
    "住所": "沖縄県島尻郡南風原町新川507−1  2F",
    "HP": "https://kanasa.jp/",
    "緯度": 26.21331,
    "経度": 127.72803,
    "地域": "南部",
    "対象者": "個人",
　　"特定の対象者": "成人女性",
　　"サービス": "カウンセリング",
    "相談内容": "不安, トラウマ, こころの悩み全般",
　　"カウンセリング手法": "EMDR, ブレインスポッティング, ポトグラフィートーク, 思考場療法, 自立訓練法",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
　},
  {
　　"施設名": "うるま心理カウンセリング相談室ココロン",
    "住所": "沖縄県うるま市みどり町1丁目1−1",
    "HP": "https://note.com/kokoronuruma",
    "緯度": 26.37921,
    "経度": 127.85737,
    "地域": "オンライン",
    "対象者": "個人",
　　"特定の対象者": "指定なし",
　　"サービス": "カウンセリング",
    "相談内容": "不安全般, トラウマ, 不登校, こころの悩み全般",
　　"カウンセリング手法": "来談者中心療法, 精神分析的心理療法, EMDR, 家族療法, メンタライゼーションベイスドセラピー, 内的家族システム療法, ブレインスポッティング, 思考場療法, フラッシュテクニック",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
　},
  {
　　"施設名": "心理カウンセリングルームRERA",
    "住所": "沖縄県那覇市泉崎1丁目2-2",
    "HP": "https://rera-okinawa.com/",
    "緯度": 26.21246,
    "経度": 127.68064,
    "地域": "オンライン",
    "対象者": "個人, 行政・企業",
　　"特定の対象者": "子供(18歳未満), 親",
　　"サービス": "カウンセリング, 心理検査, コンサルテーション, 研修・講演",
    "相談内容": "発達や発育, 子育ての悩み",
　　"カウンセリング手法": "指定なし",
　　"カウンセリングのオンライン対応": "可",
    "予約": "要"
　},
  {
　　"施設名": "沖縄CBTカウンセリング　こみち",
    "住所": " 沖縄県豊見城市高安４６０ 座安アパート 3階 302号室",
    "HP": "https://cbtcomichi.com/",
    "緯度": 26.178574,
    "経度": 127.684641,
    "地域": "南部",
    "対象者": "個人, 行政・企業",
    "特定の対象者": "指定なし",
　　"サービス": "カウンセリング, 研修・講演",
    "相談内容": "不安全般, 恐怖, 双極性, 強迫性, 不登校, こころの悩み全般 ",
　　"カウンセリング手法": "認知行動療法",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
   },
　 {
　　"施設名": "メンタルサポート＆コンサル沖縄",
    "住所": "沖縄県那覇市おもろまち4丁目8-1 新都心とみや505",
    "HP": "https://okimhsandc.com/",
    "緯度": 26.226332,
    "経度": 127.697458,
    "地域": "南部",
    "対象者": "行政・企業",
    "特定の対象者": "従業員",
　　"サービス": "カウンセリング, コンサルテーション, 研修・講演",
    "相談内容": "人間関係, キャリア・マネジメント, こころの悩み全般 ",
　　"カウンセリング手法": "指定なし",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
   },
   {
　　"施設名": "PlusOneLife",
    "住所": "沖縄県那覇市高良3丁目6-5 リッチモンドビル2階",
    "HP": "https://plus-one-life.com/plusonelife/",
    "緯度": 26.190255,
    "経度": 127.660069,
    "地域": "南部",
    "対象者": "個人, 行政・企業",
    "特定の対象者": "指定なし",
　　"サービス": "カウンセリング, ストレスチェック",
    "相談内容": "トラウマ, うつ, 不安全般, 人間関係, こころの悩み全般 ",
　　"カウンセリング手法": "認知行動療法, 来談者中心療法, 対人関係療法, 精神分析的心理療法, ゲシュタルト療法, 自我状態療法, プレイセラピー",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
  },
　{
　　"施設名": "PlusOneLife",
    "住所": "沖縄県浦添市牧港4丁目10-1-1102",
    "HP": "https://plus-one-life.com/plusonelife/",
    "緯度": 26.266823,
    "経度": 127.727624,
    "地域": "南部",
    "対象者": "個人, 行政・企業",
    "特定の対象者": "指定なし",
　　"サービス": "カウンセリング, ストレスチェック",
    "相談内容": "トラウマ, うつ, 不安全般, 人間関係, こころの悩み全般 ",
　　"カウンセリング手法": "認知行動療法, 来談者中心療法, 対人関係療法, 精神分析的心理療法, ゲシュタルト療法, 自我状態療法, プレイセラピー",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
  },
  {
　　"施設名": "一般社団法人　沖縄カウンセリングセンター",
    "住所": "沖縄県浦添市西原1-4-16松建ビル第二201",
    "HP": "https://www.okicc.com/",
    "緯度": 26.25198,
    "経度": 127.740416,
    "地域": "南部",
    "対象者": "個人,行政・企業",
    "特定の対象者": "指定なし",
　　"サービス": "カウンセリング, 心理検査, 研修・講演",
    "相談内容": "不安全般, 人間関係, うつ, ハラスメント, 強迫性, こころの悩み全般 ",
　　"カウンセリング手法": "来談者中心療法, 認知行動療法, カップルセラピー",
　　"カウンセリングのオンライン対応": "可",
　　"予約": "要"
 }
];
function applyFilters() {

  // 選択された絞り込み条件を取得
  const region = document.getElementById("filter-region").value;
  const target = document.getElementById("filter-target").value;
  const estarget = document.getElementById("filter-estarget").value;
  const service = document.getElementById("filter-service").value;
  const topic = document.getElementById("filter-topic").value;
  const method = document.getElementById("filter-method").value;
  const online = document.getElementById("filter-online").value;
  const reserve = document.getElementById("filter-reserve").value;

  // 既存のマーカーを削除
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  // 絞り込み
  const filtered = facilities.filter(facility => {
  return (!region || region === "すべて" || facility["地域"] === region) &&
         (!target || target === "すべて" || facility["対象者"].includes(target)) &&
         (!estarget || estarget === "すべて" || facility["特定の対象者"].includes(estarget)) &&
         (!service || service === "すべて" || facility["サービス"].includes(service)) &&
         (!topic || topic === "すべて" || facility["相談内容"].includes(topic)) &&
         (!method || method === "すべて" || facility["カウンセリング手法"].includes(method)) &&
         (!online || online === "すべて" || facility["カウンセリングのオンライン対応"] === online) &&
         (!reserve || reserve === "すべて" || facility["予約"] === reserve);
});


if (filtered.length === 0) {
  // ヒットなし → マップを初期位置に戻す
  map.setCenter({ lat: 26.2124, lng: 127.6809 }); // 那覇市あたり
  map.setZoom(9);

} else if (filtered.length === 1) {
  // 1件だけ → ちょうどいいズームで表示
  map.setCenter({
    lat: parseFloat(filtered[0]["緯度"]),
    lng: parseFloat(filtered[0]["経度"])
  });
  map.setZoom(14); // 建物や周辺道路が見えるくらい

} else {
  // 2件以上 → 全体が入るように表示
  const bounds = new google.maps.LatLngBounds();
  filtered.forEach(facility => {
    bounds.extend({
      lat: parseFloat(facility["緯度"]),
      lng: parseFloat(facility["経度"])
    });
  });
  map.fitBounds(bounds);
}


 // ピンを立てる
filtered.forEach(facility => {
  // 緯度・経度を数値に変換
  const lat = parseFloat(facility["緯度"]);
  const lng = parseFloat(facility["経度"]);

  // 数値でなければスキップ（データ不正対策）
  if (isNaN(lat) || isNaN(lng)) {
    console.warn("緯度または経度が不正です:", facility["緯度"], facility["経度"]);
    return;
  }

  // ピンを作成
  const marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: facility["施設名"]
  });

  markers.push(marker);

  // 情報ウィンドウ
  const infoWindow = new google.maps.InfoWindow({
    content: `
     <div>
      <strong>${facility["施設名"]}</strong><br>
      住所：${facility["住所"]}<br/>
      <a href="${facility["HP"]}" target="_blank">HPへ</a>
  </div>
 `
 });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
});
  });
}


// ボタン操作（これは forEach の外に！）
document.getElementById("searchButton").addEventListener("click", applyFilters);
document.getElementById("clearButton").addEventListener("click", () => {
  document.getElementById("filter-region").value = "";
  document.getElementById("filter-target").value = "";
  document.getElementById("filter-estarget").value = "";
  document.getElementById("filter-service").value = "";
  document.getElementById("filter-topic").value = "";
  document.getElementById("filter-method").value = "";
  document.getElementById("filter-online").value = "";
  document.getElementById("filter-reserve").value = "";

  // ピン削除
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  // マップを初期位置に戻す（必要なら）
  map.setCenter({ lat: 26.2124, lng: 127.6809 }); // 任意の中心地（那覇市）
  map.setZoom(9); // 任意のズームレベル

  // 絞り込みを再描画（空状態）
  applyFilters();
});