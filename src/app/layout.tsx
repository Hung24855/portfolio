import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../style/globals.css";
import "react-multi-carousel/lib/styles.css";
import AppProvider from "@/_core/app/components/AppProvider";

const font = Sora({ weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nghiêm Hồng Portfolio",
    description: ""
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            </head>
            <body className={font.className}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
