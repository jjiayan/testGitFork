import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0으로 바인딩 → 외부에서도 접근 가능
    port: 5173, // 포트 번호 (원하면 바꿀 수 있음)
    cors: true, // 다른 출처(CORS)에서도 접근 가능하게
  },
});
