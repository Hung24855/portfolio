"use client";
import AOS from "aos";
import { useEffect } from "react";

function AppProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const initAOS = async () => {
            AOS.init({
                duration: 800,
                easing: "ease-in-out",
                once: true,
                mirror: false,
                anchorPlacement: "top-bottom"
            });
        };

        initAOS();
    }, []);
    return <main>{children}</main>;
}

export default AppProvider;
