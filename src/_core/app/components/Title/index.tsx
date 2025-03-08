interface Props {
    title: string;
}

const Tittle = ({ title }: Props) => {
    return (
        <div className="relative mb-12 -rotate-6">
            <h1 className="text-4xl font-bold text-center">
                <span className="inline-block relative">
                    <span className="relative z-10 text-white">{title}</span>
                    <span className="absolute -bottom-1 -left-2 -right-2 h-5 bg-emerald-400 -rotate-1 z-0 opacity-70 rounded"></span>
                </span>
            </h1>
        </div>
    );
};

export default Tittle;
