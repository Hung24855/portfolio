"use client";
import AOS from "aos";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";

function AppProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const initAOS = async () => {
            AOS.init({
                duration: 600,
                easing: "ease-in-out",
                once: false,
                mirror: false,
                anchorPlacement: "top-bottom"
            });
        };

        initAOS();
    }, []);
    return <MotionConfig transition={{ duration: 1 }}>{children}</MotionConfig>;
}

export default AppProvider;
