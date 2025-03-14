"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function DynamicModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const openModal = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        }
        setIsOpen(true);
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center relative">
            {/* Button mở modal */}
            <button
                ref={buttonRef}
                className="absolute left-0 top-[50%] bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
                onClick={openModal}
            >
                Open Modal
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        initial={{
                            x: position.x - window.innerWidth / 2,
                            y: position.y - window.innerHeight / 2,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        exit={{
                            x: position.x - window.innerWidth / 2,
                            y: position.y - window.innerHeight / 2,
                            opacity: 0,
                            scale: 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-6 rounded-lg shadow-xl w-96"
                    >
                        <h2 className="text-xl font-bold">Dynamic Modal</h2>
                        <p className="mt-2">This modal opens from the button position.</p>
                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
