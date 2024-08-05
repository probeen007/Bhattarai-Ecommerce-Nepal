import Container from "@/app/components/container";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import OrdersClient from "./OrderClient";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const Orders = async () => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return <NullData title="Oops Access denied___:(" />
    }

    const orders = await getOrdersByUserId(currentUser.id)

    if (!orders) {
        return <NullData title="No orders yet...:(" />
    }

    return <div className="pt-8">
        <Container>
            <Suspense fallback={<div> <FaSpinner/></div>}>
                <OrdersClient orders={orders} />
            </Suspense>
        </Container>
    </div>

}

export default Orders;