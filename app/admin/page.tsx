import getOrders from "@/actions/getOrders";
import getProducts from "@/actions/getProducts";
import getUsers from "@/actions/getUsers";
import Summary from "./Summary";
import Container from "../components/container";
import BarGraph from "./BarGraph";
import getGraphData from "@/actions/getGraphData";
import { Suspense } from "react";


const Admin = async () => {

    const products = await getProducts({ category: null })
    const orders = await getOrders();
    const users = await getUsers();
    const graphData = await getGraphData()


    return (
        <div className="pt-8">
            <Suspense fallback={<div>Loading data...</div>}>
                <Container>
                    <Summary products={products} orders={orders} users={users} />
                    <div className="mt-4 mx-auto max-w-[1150px]">
                        <BarGraph data={graphData} />
                    </div>
                </Container>
            </Suspense>


        </div>

    );
}

export default Admin;