import getOrders from "@/actions/getOrders";
import getProducts from "@/actions/getProducts";
import getUsers from "@/actions/getUsers";
import Summary from "./Summary";
import Container from "../components/container";
import BarGraph from "./BarGraph";
import getGraphData from "@/actions/getGraphData";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const Admin = async () => {

    const products = await getProducts({ category: null })
    const orders = await getOrders();
    const users = await getUsers();
    const graphData = await getGraphData()


    return (
        <div className="pt-8">
            <Container>
                <Suspense><Summary products={products} orders={orders} users={users} /></Suspense>
                <div className="mt-4 mx-auto max-w-[1150px]">
                    <Suspense fallback={<div> <FaSpinner/></div>}>
                        <BarGraph data={graphData} /></Suspense>
                </div>
            </Container>
        </div>

    );
}

export default Admin;