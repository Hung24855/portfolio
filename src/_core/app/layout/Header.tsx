"use client";
import Link from "next/link";
import { HEADER_HEIGHT } from "../constant/header";
import { useEffect, useState } from "react";
import clsx from "clsx";

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
        name: "Skills",
        href: "#skills",
        id: "skills"
    },
    {
        name: "Projects",
        href: "#projects",
        id: "projects"
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

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = window.innerHeight * 0.12; // 12vh
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
    };

    return (
        <div
            style={{ height: HEADER_HEIGHT }}
            className={clsx(
                "fixed z-30 inset-0 transition-all duration-150",
                isBgNav ? "bg-[#240B39]/80 backdrop-blur-md" : "bg-transparent"
            )}
        >
            <div className="flex justify-center responsive-layout h-full text-white">
                <div className="h-full flex gap-12 items-center">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.id)}
                            className="text-lg nav-link-item cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
