"use client"
import { CartContextProvider } from "../hooks/useCart";
import { Suspense } from "react";

interface CartProviderProps {
    children: React.ReactNode
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    return <CartContextProvider>
        <Suspense fallback={<div>Loading data...</div>}>
        {children}
      </Suspense>
        </CartContextProvider>;

}
export default CartProvider;