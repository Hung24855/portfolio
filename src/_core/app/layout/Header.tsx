"use client";
import { HEADER_HEIGHT } from "../constant/header";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const NavLinks = [
    {
        name: "Home",
        href: "/",
        id: "banner"
    },
    {
        name: "About",
        href: "#about",
        id: "about"
    },
    {
        name: "Experience",
        href: "#experience",
        id: "experience"
    },
    {
        name: "Projects",
        href: "#projects",
        id: "projects"
    },
    {
        name: "Skills",
        href: "#skills",
        id: "skills"
    }
];

const Header = () => {
    const [isBgNav, setIsBgNav] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 90) setIsBgNav(true);
            else setIsBgNav(false);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = window.innerHeight * 0.12; // 12vh
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
            // router.push(`#${id}`);
        }
    };

    return (
        <div
            style={{ height: HEADER_HEIGHT }}
            className={clsx(
                "fixed z-30 inset-0 transition-all duration-150",
                isBgNav ? " backdrop-blur-lg" : "bg-transparent"
            )}
        >
            <div className="flex justify-center responsive-layout h-full text-white">
                <div className="h-full flex gap-12 items-center">
                    {NavLinks.map((link) => (
                        <div
                            key={link.id}
                            onClick={(e) => handleScroll(e, link.id)}
                            className={clsx("text-lg nav-link-item cursor-pointer")}
                        >
                            {link.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
