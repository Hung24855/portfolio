import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                "primary-light": "var(--primary-light)",
                secondary: "var(--secondary)",
                background: "var(--background)",
                block: "var(--block)",
                "primary-typo": "var(--primary-typo)",
                "secondary-typo": "var(--secondary-typo)",
                "background-android": "#f2f2f2",
                placeholder: "var(--placeholder)"
            },
            keyframes: {
                "fade-in-down": {
                    "0%": { opacity: "0", transform: "translate(-50%,-10px)" },
                    "100%": { opacity: "1", transform: "translate(-50%,0)" }
                },
                "zoom-in": {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" }
                },
                typing: {
                    "0%": { width: "0" },
                    "100%": { width: "100%" }
                },
                "move-up-down": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(30px)" }
                }
            },
            animation: {
                "fade-in-down": "fade-in-down 0.2s ease-out",
                "zoom-in": "zoom-in 0.3s ease-out",
                "typing-text": "typing 2.5s infinite",
                "move-up-down": "move-up-down 2s infinite ease-in-out"
            }
        },
        screens: {
            mobx: "480px",
            tab: "730px",
            tabx: "830px",
            tabxx: "960px",
            lap: "1080px",
            lapx: "1280px",
            desk: "1440px",
            deskx: "1536px"
        }
    },
    plugins: []
};

export default config;
