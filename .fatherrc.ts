import { defineConfig } from 'father';

export default defineConfig({
  // 以下为 esm 配置项启用时的默认值，有自定义需求时才需配置
  esm: {
    output: 'dist',
  },
});
