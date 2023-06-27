# Gulp  - Tailwind 版本

> 包含 Gsap, Swiper, Flowbit

## 指令列表

- `gulp` - 執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)
  - 若沒有自動開啟瀏覽器則可手動在瀏覽器上輸入 `http://localhost:8080/` 即可。
  - 假使監聽功能無效的話，可以檢查一下是否修改到資料夾的名稱等。
- `gulp build` - 執行編譯模式(不會開啟瀏覽器)
- `gulp clean` - 清除 dist 資料夾
- `gulp deploy` - 將 dist 資料夾部署至 GitHub Pages
  - 若無法部署到 GitHub Pages 的話，可以確定一下是否已經初始化專案等。

> 請務必確保已經在本機上輸入過 `npm install -g gulp`，否則電腦會不認識 `gulp` 指令哦。

## 說明

Tailwind 版本為 3.3.2

載入Tailwind 相關套件

1. @tailwindcss/typography
2. @tailwindcss/forms

若有需要調整相關路徑參數可在 `envOptions.js` 中調整，但建議不要隨意調整導致 Gulp 無法正常運行。

假使對於 Gulp 不熟悉會建議不要任意調整 `gulpfile.js` 底下的資料任一檔案，避免出現無法正常運作之問題。

## 資料夾結構

- App # 原始碼
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - js # JavaScript 放置處
    - style # 樣式放置處
      - all.css # Tailwind CSS 撰寫位置
  - index.html # 首頁 HTML
  - layout.ejs # Layout ejs
- gulpfile.js # Gulp 原始碼
  - envOptions.js # Gulp 路徑變數
  - index.js # Gulp 核心原始碼
- tailwind.config.js # Tailwind 設定檔
- postcss.config.js # PostCss 設定檔

### 注意事項

`assets` 底下的資料夾名稱建議不要任意修改，例如：`stlye` 改成 `styles` 又或者是 `scss` 等非原始資料夾名稱。

最主要原因是 Gulp 預設是監聽 `style`、`js`、 `images` 這幾個資料夾路徑底下的檔案，因此若任意修改名稱將可能導致 Gulp 的監聽功能失效或其他不可預期之問題發生。

若本身已經對於 Gulp 有一定掌握度則可進入 `gulpfile.js/envOptions.js` 修改相關路徑即可。

Gulp 的自動更新行為是必須持續開著終端機的，因此若關閉終端機則會失去監聽與自動更新效果，因此在開專案時，請不要關閉運行中的終端機。

## 支援的監聽

目前支援 HTML、ejs、JavaScript、Images、Tailwind 監聽並自動重新刷新。

圖片新增時也會自動刷新。

因此是不用使用 `Live Sass Compiler` 的 `Watch SCSS` 功能或是 `Prepros` 等工具來編譯 SCSS。

除此之外 Gulp 本身有支援模擬伺服器，因此不用再次使用一些模擬伺服器的套件，例如：`Preview on Web Server` 套件等。

## 部署 gh-pagse 流程說明

部署前請務必先將該 Gulp 原始碼上傳到 GitHub Repositories 也就是初始化 GitHub，因此通常第一步驟會輸入以下指令

```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git remote add origin [GitHub Repositories Url]
git push -u origin master // 僅限第一次輸入，往後只需要輸入 git push
```

當將 Gulp 原始碼初次部署到 GitHub 之後就可以輸入 `gulp build` 進入生產模式，當生產完畢之後接下來只需要輸入 `gulp deploy` 即可完成 GitHub Pages 部署。


## 學習資源

若對於 Gulp 有一定興趣的話，以下這邊提供學習資源

- [使用 Gulp 進行網頁前端自動化](https://courses.hexschool.com/p/gulp)
- [這是在講 Gulp 不是飲料是任務自動化工具這件事](https://hsiangfeng.github.io/tags/%E9%80%99%E6%98%AF%E5%9C%A8%E8%AC%9B-Gulp-%E4%B8%8D%E6%98%AF%E9%A3%B2%E6%96%99%E6%98%AF%E4%BB%BB%E5%8B%99%E8%87%AA%E5%8B%95%E5%8C%96%E5%B7%A5%E5%85%B7%E9%80%99%E4%BB%B6%E4%BA%8B/page/2/)
- [試著把切版專案升級到 gulp4.0 吧](https://ithelp.ithome.com.tw/users/20104132/ironman/2921)
