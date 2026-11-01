# LIFE CITY Web Starter

これはLIFE CITYの初期フロントエンド試作です。

## 内容
- PC向けサイドバー / スマートフォン向け下部ナビゲーション
- 白・水色を基調にしたホーム画面
- 施設カードと画面切り替え
- LIFE CITY AIの紹介画面（会話AIそのものは未接続）
- 各施設の準備中画面

## Cloudflare Webダッシュボードから公開
1. Cloudflareにブラウザでログインします。
2. Workers & Pages を開きます。
3. Create application から Pages の Direct Upload / Upload assets を選びます。
4. このZIPを解凍し、`index.html` と `style.css` と `app.js` が入っているフォルダーをアップロードします。
5. プロジェクト名を設定してデプロイします。

※画面上の名称はCloudflareのUI更新で多少異なる場合があります。
※この試作は静的Webサイトです。ログイン、データベース、投稿、リアルタイムチャット、3Dルーム、アイテムアップロード、AI会話はまだ実装していません。
※AI APIキーなどの秘密情報をフロントエンドに書かないでください。

## 次の開発段階
1. Cloudflare D1でユーザー・投稿・施設データを管理
2. WorkersでAPIと認証を実装
3. R2で画像・アバターアイテムを保管（アップロード検査を追加）
4. Durable Objectsでゲームルームとリアルタイム通信
5. AI会話をサーバー経由で接続
