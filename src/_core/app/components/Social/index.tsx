"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Social = () => {
    return (
        <motion.div
            className="fixed bottom-4  flex flex-col gap-2"
            initial={{ right: -100, opacity: 0 }}
            animate={{ right: 16, opacity: 1 }}
        >
            <Link href={"https://www.facebook.com/hong.nghiem.2002/"}>
                <img src="social/facebook-circle.png" alt="img" className="size-10" />
            </Link>

            <Link href={"https://github.com/Hung24855"}>
                <div className="bg-white rounded-full">
                    <img src="social/github-circle.png" alt="img" className="size-10" />
                </div>
            </Link>
            <Link href={"https://www.tiktok.com/@nghiemhong8306?lang=vi-VN"}>
                <img src="social/tiktok-circle.png" alt="img" className="size-10" />
            </Link>
        </motion.div>
    );
};

export default Social;
