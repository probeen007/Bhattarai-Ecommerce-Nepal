import Container from "@/app/components/container";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import ManageOrdersClient from "./ManageOrdersClient";
import getOrders from "@/actions/getOrders";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const ManageOrders = async () => {

    const orders = await getOrders()
    const currentUser = await getCurrentUser()

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <NullData title="Oops Access denied___:(" />
    }

    return <div className="pt-8">
        <Container>
        <Suspense fallback ={<div> <FaSpinner/></div>}>
            <ManageOrdersClient orders = {orders}/>
            </Suspense>
        </Container>
    </div>

}

export default ManageOrders;