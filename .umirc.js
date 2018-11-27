
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'aiyu-wallet-admin-ui',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  theme: {
    "primary-color": "#FFB923",
    "text-color":"#333333",
    "border-radius-base":"4px", // 组件/浮层圆角
    "border-color-base":"#d9d9d9" // 边框色
  },
  proxy: {
    "/admin": {
      "target": "http://10.1.1.118:8090/",
      "changeOrigin": true,
      "pathRewrite": { "" : "" }
    },
  },
}
