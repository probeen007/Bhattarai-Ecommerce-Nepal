"use client"

import { useCart } from "@/hooks/useCart";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
    const { cartTotalQty } = useCart();
    const router = useRouter();
    return (
        <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
            <div className="text-4xl mt-1">
                <CiShoppingCart />
            </div>
            <span className="absolute top-[-7px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center 
        justify-center text-sm">{cartTotalQty}</span>
        </div>);
};

export default CartCount;