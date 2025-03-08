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
            }
        },
        screens: {
            // mob: "0px", // mobile - default - main support at 384px
            mobx: "480px", // mobile

            tab: "730px", // small tablet,
            tabx: "830px", // medium tablet - main support break point
            tabxx: "960px", // large tablet

            lap: "1080px", // small laptop,
            lapx: "1280px", // medium laptop - main support break point

            desk: "1440px",
            deskx: "1536px"
        }
    },
    plugins: []
};
export default config;
