# vue-visual-tracking

> 针对 Vue 移动端项目的的可视化埋点探索。

> 在可视化界面中圈选需要埋点的 DOM 元素，选择埋点方式，生成外部 JS 文件，在 VUE 项目中无痕引入。

#### 运行/打包方法

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# lint all JS/Vue component files in `src/`
npm run lint

```

#### 使用方法
1. 页面顶部地址栏中输入 Vue 项目地址
2. 点击中部的箭头图标，在页面中指向需要添加埋点的DOM元素，按下 Ctrl+Q 快捷键
3. 在弹框中输入相关埋点信息后保存
4. 重复第2、3步，直到整个项目的埋点添加完成
5. 点击右侧保存图标，生成 JS 文件
6. 在对应 VUE 项目中引入生成的 JS 文件，完成可视化无痕埋点

#### 备注
1. 目前仅支持 Vue 项目，且 Vue 项目仅支持 hash 路由模式
