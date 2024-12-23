interface HeadingProps {
    title: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center }) => {
    return (
        <div>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 hover:text-blue-500 tracking-tight leading-tight">
                {title}
            </h1>
        </div>
    );
};

export default Heading;