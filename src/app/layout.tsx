import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../style/globals.css";

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
            <body className={font.className}>{children}</body>
        </html>
    );
}
