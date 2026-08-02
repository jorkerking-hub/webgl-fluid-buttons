# WebGL Fluid Buttons

四个可复用的胶囊形 WebGL 流体按钮。流体持续从右侧向左流动，鼠标悬停或键盘聚焦时，按钮会放大并加快流速。每个按钮都有独立的主色和含蓄的混色配方。

效果基于 [PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) 改造，针对按钮尺寸、持续单股流体、柔和边界、入场速度和悬停反馈做了定制。

## 立即使用

无需安装依赖。直接双击 `index.html`，即可在支持 WebGL 的现代浏览器中查看。

也可以启动本地服务器：

```bash
npm run preview
```

然后打开 <http://localhost:4173>。

## 修改与重新构建

- 页面布局、按钮文字和交互：`src/index.template.html`
- 流体模拟、配色和速度：`src/fluid.js`
- 生成独立页面：`scripts/build.mjs`

修改源码后运行：

```bash
npm run build
```

构建会把流体脚本内嵌进根目录的 `index.html`。生成后的页面不依赖 CDN、框架或网络连接，因此用 `file://` 打开也能正常显示。

## 自定义按钮

在 `src/index.template.html` 中复制一个按钮，并为 iframe 设置 `data-variant`：

```html
<button>
  <span class="copy">
    <strong>按钮标题</strong>
    <small>BUTTON LABEL</small>
  </span>
  <span class="field">
    <iframe data-variant="0" title="按钮流体效果"></iframe>
  </span>
</button>
```

`data-variant` 会选择 `src/fluid.js` 中对应的颜色方案。悬停状态由父页面通过 `postMessage` 传给流体画布。

## 浏览器兼容

需要 WebGL 支持。macOS、Windows、iOS 和 Android 上的新版 Chrome、Edge、Safari、Firefox 均可使用。系统开启“减少动态效果”时，按钮缩放动画会被关闭。

## 授权

本项目采用 MIT License。流体模拟改编自 Pavel Dobryakov 的 MIT 项目；完整第三方声明见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

---

## English

Reusable pill-shaped WebGL fluid buttons. The fluid continuously travels from right to left; hover or keyboard focus enlarges the button and accelerates the flow. Each button uses its own restrained multicolor palette.

No runtime dependency or CDN is required. Open `index.html` directly, or run `npm run preview`. Edit files under `src/`, then regenerate the standalone page with `npm run build`.
