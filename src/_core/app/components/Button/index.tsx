import clsx from "clsx";

interface AppButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    block?: boolean;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean;
    disabled?: boolean;
}

export default function AppButton({
    onClick,
    className,
    children,
    block = false,
    type = "button",
    isLoading = false,
    disabled = false
}: AppButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={isLoading || disabled}
            className={clsx(
                "px-4 py-3 bg-primary text-white rounded-md flex-center gap-1 h-12",
                className,
                block && "w-full",
                isLoading && "opacity-50 cursor-not-allowed",
                disabled && "opacity-50 cursor-not-allowed"
            )}
        >
            {isLoading && (
                <div
                    className={clsx(
                        "size-4 min-w-4 min-h-4 flex items-center justify-center rounded-full border border-t-transparent animate-spin"
                    )}
                ></div>
            )}
            {children}
        </button>
    );
}
