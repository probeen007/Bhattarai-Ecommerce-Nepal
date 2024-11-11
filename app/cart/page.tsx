import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import CartClient from "./CartClient";
import { Suspense } from "react";

const Cart = async () => {
    const currentUser = await getCurrentUser()
    return (
        <div className="pt-8">
            <Suspense fallback={<div>Loading data...</div>}>
                <Container>
                    <CartClient currentUser={currentUser} />
                </Container>
            </Suspense>


        </div>);
}

export default Cart;