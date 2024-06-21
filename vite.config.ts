import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        port: 8080,
        strictPort: true,
    },
    server: {
        port: 8080,
        strictPort: true,
        host: true,
        origin: "http://localhost:8080",
    },
    optimizeDeps: {
        exclude: [
            "@uiw/react-codemirror",
            "@codemirror/lang-cpp",
            "@codemirror/language",
            "@codemirror/legacy-modes",
            "@codemirror/view", "@codemirror/state",
            "@codemirror/autocomplete",
            "@uiw/codemirror-theme-github",
            "@types/codemirror"
        ],
    },
    //  base: `/${process.env.VITE_PREFIX_URL || ""}/`,
})
