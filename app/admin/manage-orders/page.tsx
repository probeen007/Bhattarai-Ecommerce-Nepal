import Container from "@/app/components/container";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import ManageOrdersClient from "./ManageOrdersClient";
import getOrders from "@/actions/getOrders";
import { Suspense } from "react";

const ManageOrders = async () => {

    const orders = await getOrders()
    const currentUser = await getCurrentUser()

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <NullData title="Oops Access denied___:(" />
    }

    return <div className="pt-8">
        <Suspense fallback={<div>Loading data...</div>}>
            <Container>
                <ManageOrdersClient orders={orders} />
            </Container>
        </Suspense>



    </div>

}

export default ManageOrders;