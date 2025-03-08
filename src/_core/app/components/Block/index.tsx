import clsx from "clsx";

export default function Block({ children, className }: { children?: React.ReactNode; className?: string }) {
    return <div className={clsx("min-h-screen responsive-layout", className)}>{children}</div>;
}
