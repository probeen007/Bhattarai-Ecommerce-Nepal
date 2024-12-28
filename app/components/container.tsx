import React from "react";

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
    
        <div className="
        max-w-[1920px]
        mx-auto 
        px-4 
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-16
    ">
        {children}
    </div>
    
);
}

export default Container;