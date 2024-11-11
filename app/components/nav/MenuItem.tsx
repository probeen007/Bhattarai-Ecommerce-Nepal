import React from "react";

interface MenuItemProps{
    children: React.ReactNode;
    OnClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({children, OnClick}) => {
    return ( 
    <div onClick ={OnClick} className="px-4 py-3 hover:bg-neutral-100 transition">
        {children}
    </div> 
    );
}
 
export default MenuItem;