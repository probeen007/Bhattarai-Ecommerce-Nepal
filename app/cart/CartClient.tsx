"use client"
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";
import { SafeUser } from "@/types";
import React from "react";
import router, { useRouter } from "next/navigation";

interface CartClientProps {
    currentUser: SafeUser | null
}

const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
    const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

    const router = useRouter()

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-white-50 to-blue-100 shadow-xl rounded-lg border border-gray-200 max-w-md mx-auto my-8 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <div className="text-4xl font-bold text-gray-800 mb-4  text-center sm:text-5xl md:text-6xl">
                    Your Cart is Empty <span role="img" aria-label="sad-face">😞</span>
                </div>
                <div className="text-lg text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-2s text-center sm:text-xl md:text-2xl">
                    Looks like you haven’t added anything to your cart yet. Let's fill it up with some great products!
                </div>
                <div className="flex items-center gap-3">
    <Link 
        href={"/"} 
        className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s flex items-center justify-center gap-2"
    >
        <MdArrowBack size={20} className="mb-0.5" />
        <span>Start Shopping</span>
    </Link>
</div>

            </div>


        );
    }


    return <div>
        <Heading title="Shopping Cart" center />
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
            <div className="col-span-2 justify-self-start">Product</div>
            <div className="justify-self-center">Price</div>
            <div className="justify-self-center">Quantity</div>
            <div className="justify-self-end">Total</div>
        </div>
        <div>
            {cartProducts && cartProducts.map((item) => {
                return <ItemContent key={item.id} item={item} />
            })}
        </div>
        <div className="border-t-[1.5px] border-slate-200 py-5 flex justify-between gap-4">
            <div className="w-[90px]">
                <Button label="Clear Cart" OnClick={() => {
                    handleClearCart()
                }} small outline />
            </div>
            <div className="text-sm flex flex-col gap-1 items-start">

                <div className="flex justify-between w-full text-base font-semibold">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotalAmount)}</span>
                </div>

                <p className="text-slate-500">* Taxes and shipping calculated at checkout</p>


                <Button label={currentUser ? "Checkout" : "Login to checkout"}
                    outline={currentUser ? false : true}
                    OnClick={() => {
                        currentUser ? router.push('/checkout') :
                            router.push("/login")
                    }} />

                <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                    <MdArrowBack />
                    <span>Continue Shopping</span>
                </Link>
            </div>
        </div>
    </div>;
};

export default CartClient;