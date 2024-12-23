"use client";

import React from "react";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import { formatPrice } from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";



interface ProductCardProps {
    data: any
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();

    const productRating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length

    return (
        <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 cursor-pointer border border-gray-200 bg-white rounded-lg shadow-sm p-4 transition-transform transform hover:scale-105 hover:shadow-lg text-center"
        >
            <div className="flex flex-col items-center w-full gap-2">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden relative w-full rounded-md bg-gray-100">
                    <Image
                        fill
                        src={data.images[0].image}
                        alt={data.name}
                        className="w-full h-full object-contain transition-transform duration-200 hover:scale-110"
                    />
                </div>

                {/* Product Name */}
                <div className="mt-3 font-medium text-gray-800 text-base leading-tight">
                    {truncateText(data.name)}
                </div>

                {/* Product Rating */}
                <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    <Rating value={productRating} readOnly />
                    <span className="text-sm text-gray-500">({data.reviews.length})</span>
                </div>

                {/* Product Price */}
                <div className="mt-2 font-semibold text-lg text-purple-700">
                    {formatPrice(data.price)}
                </div>
            </div>
        </div>

    );
}

export default ProductCard;