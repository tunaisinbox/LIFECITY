const views = {
  home: ["ホーム","施設案内","LIFE CITY","施設を探す","この施設は準備中です。"],
  board: ["掲示板","交流・コミュニケーション","掲示板","話題を見つけよう","掲示板機能は今後実装します。"],
  games: ["ゲームセンター","2D・3Dゲーム","ゲームセンター","遊びたいゲームを選ぼう","ゲームルームとゲーム本体は今後実装します。"],
  library: ["図書館","知識・資料","図書館","知りたいことを探そう","資料検索機能は今後実装します。"],
  studio: ["創作室","作品・クリエイティブ","創作室","作ったものを見せよう","作品投稿機能は今後実装します。"],
  community: ["コミュニティ","趣味・グループ","コミュニティ","好きなことからつながろう","コミュニティ機能は今後実装します。"],
  events: ["イベント","街のイベント","イベント","みんなで楽しもう","イベント機能は今後実装します。"],
  profile: ["マイページ","プロフィール","マイページ","自分のページ","アカウント機能は今後実装します。"],
  settings: ["設定","アカウント・環境設定","設定","自分に合った設定に","設定機能は今後実装します。"],
  ai: ["LIFE CITY AI","AIコンパニオン","LIFE CITY AI","いつでも、気軽にお話ししよう。","AI会話機能は現在準備中です。"]
};
function showView(key){
  const data=views[key]||views.home;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const target=document.getElementById(key==="home"?"view-home":key==="ai"?"view-ai":"view-generic");
  target.classList.add("active");
  document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===key));
  document.getElementById("breadcrumbs").innerHTML=`${data[0]} <span>/</span> ${data[1]}`;
  if(key!=="home"&&key!=="ai"){
    document.getElementById("view-eyebrow").textContent=data[1].toUpperCase();
    document.getElementById("view-title").textContent=data[0];
    document.getElementById("view-description").textContent=data[4];
    document.getElementById("placeholder-title").textContent=data[3];
    document.getElementById("placeholder-copy").textContent=data[4];
    document.getElementById("placeholder-symbol").textContent=key==="games"?"▣":key==="board"?"▤":"✦";
  }
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-view]");if(b){e.preventDefault();showView(b.dataset.view)}});
