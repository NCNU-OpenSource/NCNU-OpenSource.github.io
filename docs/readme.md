# Source markdown docs

## Describe
本專案搜集了過往 NCNU LSA 及 OSA 歷年所有共筆紀錄。

## About collaborative writing backup

1. 新建新分支並建立該學期資料夾，例如：108 上學期則建立 1081 資料夾

2. 將各周 hackmd 筆記以 `Week周次.md` 儲存於該資料夾中

3. !Important! 請檢查所有檔案並檢查下列項目
    - 共筆中移除個資相關資訊，例如：分組學號及姓名
    - 移除任何可能會導致 MDX 及 JSX 錯誤之文字
        - 可能會誤判的 Html tag 符號
        - font 元素後添加空白 [Refer Issue](https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/pull/3)

4. 更新 `sidebars.js` 照 `someSidebar` 內格式新增對應的連結

5. 將分支 merge 到分支 src 並推到 Github 上，可順便移除本機已 merge 分支 (使用 -d 只會移除已 merge 的分支)
```
git merge 分支名稱 && git branch -d 分支名稱
```

6. Travis-CI 會自動進行 deploy，但仍建議檢查一下是否有 Parsing Error 等問題 [Travis-CI](https://travis-ci.org/)
