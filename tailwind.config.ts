import type {Config} from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import {nextui} from "@nextui-org/theme";


const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "Jakarta": ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
                "Lora": ["Lora", ...defaultTheme.fontFamily.sans],
                "Inter": ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "progressSpinner": '#0CBD68',
            },
            backgroundImage: {
                "graph": "url('/graph.png')",
                "radio": "url('/radio.svg')",
                "radioChecked": "url('/circle_check.svg')",
            }
        },
    },
    plugins: [nextui()],
};
export default config;
