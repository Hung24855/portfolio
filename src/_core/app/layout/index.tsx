import clsx from "clsx";
import { HEADER_HEIGHT } from "../constant/header";
import Footer from "./Footer";
import Header from "./Header";
import Block from "../components/Block";
import Social from "../components/Social";

interface LayoutProps {
    children: React.ReactNode;
    isShowHeader?: boolean;
    isShowFooter?: boolean;
    isShơwSocial?: boolean;
    className?: string;
}

const Layout = ({
    children,
    isShowFooter = true,
    isShowHeader = true,
    className,
    isShơwSocial = true
}: LayoutProps) => {
    return (
        <Block>
            <main className={clsx("min-h-screen relative w-full", className)}>
                {isShowHeader && (
                    <>
                        <Header />
                        <div style={{ height: HEADER_HEIGHT }}></div>
                    </>
                )}
                {children}
                {isShowFooter && <Footer />}
                {isShơwSocial && <Social />}
            </main>
        </Block>
    );
};

export default Layout;
