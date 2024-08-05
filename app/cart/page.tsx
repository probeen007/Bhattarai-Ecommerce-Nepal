import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import CartClient from "./CartClient";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const Cart = async () => {
    const currentUser = await getCurrentUser()
    return (
        <div className="pt-8">
            <Container>
                <Suspense fallback={<div> <FaSpinner/></div>}>
                    <CartClient currentUser={currentUser} />
                </Suspense>
            </Container>
        </div>);
}

export default Cart;