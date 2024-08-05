"use server"
import Container from "@/app/components/container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import getCurrentUser from "@/actions/getCurrentUser";
import { Suspense } from "react";


interface Iprams {
    productId?: string;
}

const Product = async ({ params }: { params: Iprams }) => {

    const product = await getProductById(params);
    const user = await getCurrentUser();

    if (!product) return <NullData title="Product does not exist with given id ! " />

    return (<div className="p-8">
        <Container>
            <ProductDetails product={product} />
            <div className="flex flex-col mt-20 gap-4">
                <Suspense fallback={<div> Loading...</div>}>
                    <AddRating product={product} user={user} />
                </Suspense>
                <Suspense fallback={<div> Loading...</div>}>
                    <ListRating product={product} />
                </Suspense>
            </div>
        </Container>
    </div>);
};

export default Product;

function item(value: { id: string; name: string; description: string; price: number; brand: string; category: string; inStock: boolean; images: { color: string; colorCode: string; image: string; }[]; reviews: { id: string; userId: string; productId: string; rating: number; comment: string; createdDate: string; user: { id: string; name: string; email: string; emailVerified: null; image: string; hashedPassword: null; createdAt: string; updatedAt: string; role: string; }; }[]; }, index: number, obj: { id: string; name: string; description: string; price: number; brand: string; category: string; inStock: boolean; images: { color: string; colorCode: string; image: string; }[]; reviews: { id: string; userId: string; productId: string; rating: number; comment: string; createdDate: string; user: { id: string; name: string; email: string; emailVerified: null; image: string; hashedPassword: null; createdAt: string; updatedAt: string; role: string; }; }[]; }[]): value is { id: string; name: string; description: string; price: number; brand: string; category: string; inStock: boolean; images: { color: string; colorCode: string; image: string; }[]; reviews: { id: string; userId: string; productId: string; rating: number; comment: string; createdDate: string; user: { id: string; name: string; email: string; emailVerified: null; image: string; hashedPassword: null; createdAt: string; updatedAt: string; role: string; }; }[]; } {
    throw new Error("Function not implemented.");
}
