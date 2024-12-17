// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///F:/code/%E6%8E%A5%E5%8F%A3%E5%92%8C%E4%BE%8B%E5%AD%90/v3_ts/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/code/%E6%8E%A5%E5%8F%A3%E5%92%8C%E4%BE%8B%E5%AD%90/v3_ts/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///F:/code/%E6%8E%A5%E5%8F%A3%E5%92%8C%E4%BE%8B%E5%AD%90/v3_ts/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///F:/code/%E6%8E%A5%E5%8F%A3%E5%92%8C%E4%BE%8B%E5%AD%90/v3_ts/vite.config.ts";
var vite_config_default = defineConfig({
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/assets/mixin.scss";'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxjb2RlXFxcXFx1NjNBNVx1NTNFM1x1NTQ4Q1x1NEY4Qlx1NUI1MFxcXFx2M190c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcY29kZVxcXFxcdTYzQTVcdTUzRTNcdTU0OENcdTRGOEJcdTVCNTBcXFxcdjNfdHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L2NvZGUvJUU2JThFJUE1JUU1JThGJUEzJUU1JTkyJThDJUU0JUJFJThCJUU1JUFEJTkwL3YzX3RzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgJy9hcGknOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbdnVlKCksIHZ1ZURldlRvb2xzKCldLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIC8vIGNzc1x1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFxyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgLy8gXHU1RjE1XHU1MTY1IG1peGluLnNjc3MgXHU4RkQ5XHU2ODM3XHU1QzMxXHU1M0VGXHU0RUU1XHU1NzI4XHU1MTY4XHU1QzQwXHU0RTJEXHU0RjdGXHU3NTI4IG1peGluLnNjc3NcdTRFMkRcdTk4ODRcdTVCOUFcdTRFNDlcdTc2ODRcdTUzRDhcdTkxQ0ZcdTRFODZcclxuICAgICAgICAvLyBcdTdFRDlcdTVCRkNcdTUxNjVcdTc2ODRcdThERUZcdTVGODRcdTY3MDBcdTU0MEVcdTUyQTBcdTRFMEEgO1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIkAvYXNzZXRzL21peGluLnNjc3NcIjsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlIsU0FBUyxlQUFlLFdBQVc7QUFFOVQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSjZILElBQU0sMkNBQTJDO0FBT3RNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQzlCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUE7QUFBQSxJQUVILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQTtBQUFBO0FBQUEsUUFHSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
