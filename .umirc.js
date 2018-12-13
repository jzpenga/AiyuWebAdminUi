
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      title: 'aiyu-wallet-admin-ui',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  history:'hash',
  theme: {
    "primary-color": "#FFB923",
    "text-color":"#333333",
    "border-radius-base":"4px", // 组件/浮层圆角official
    "border-color-base":"#d9d9d9" // 边框色
  },
  proxy: {
    "/api": {
      //"target": "http://192.168.43.54:8090/",
      "target": "http://39.98.40.7:8090/",
      "changeOrigin": true,
      "pathRewrite": { "/api" : "" }
    },
  },
}
