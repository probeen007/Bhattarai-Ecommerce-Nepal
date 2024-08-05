import Container from "@/app/components/container";
import getProducts from "@/actions/getProducts";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import ManageProductsClient from "./ManageProductsClient";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const ManageProducts = async () => {

    const products = await getProducts({ category: null })
    const currentUser = await getCurrentUser()

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <NullData title="Oops Access denied___:(" />
    }

    return <div className="pt-8">
        <Container>
            <Suspense fallback={<div> <FaSpinner/></div>}>
                <ManageProductsClient products={products} />
            </Suspense>
        </Container>
    </div>

}

export default ManageProducts;