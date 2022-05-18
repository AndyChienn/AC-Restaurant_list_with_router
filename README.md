# 餐廳清單
![Restaurant List](./public/image/readmeImg.png)

## 介紹
使用者可以在首頁看到所有餐廳與它們的簡單資料,再點進去看餐廳的詳細資訊
### 功能

基本功能：

- 使用者可以新增一家餐廳
- 使用者可以瀏覽一家餐廳的詳細資訊
- 使用者可以瀏覽全部所有餐廳
- 使用者可以修改一家餐廳的資訊
- 使用者可以刪除一家餐廳

- 使用者可以透過搜尋餐廳名稱及美食種類來找到特定的餐廳

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```
4.MongoDB 路由設定(終端機)
   ```bash
   export MONGODB_URI="<根據自己的MONGODB_URI及帳號密碼做設定>"
   ```

5.使用以下方法使種子資料初始化
   ```bash
   npm run seed
   ```
   ```bash
   node models/seeds/restaurantSeeder.js
   ```

6. 安裝及設置完畢後，繼續輸入：

   ```bash
   npm run start
   ```

7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

8. 暫停使用

   ```bash
   ctrl + c
   ```
## 開發工具

- Node.js 14.16.0
- Express 4.16.4
- Express-Handlebars 3.0.0
- Bootstrap 4.3.1
- Font-awesome 5.8.1

- MongoDB
- mongoose 6.3.3
