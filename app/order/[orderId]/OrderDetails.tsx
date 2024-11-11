"use client"

import { Order } from "@prisma/client";
import React from "react";
import Heading from "../../components/Heading";
import { formatPrice } from "@/utils/formatPrice";
import Status from "../../components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import moment from "moment";
import OrderItem from "./OrderItem";

interface OrderDetailsProps {
    order: Order
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {

    //const router = useRouter()
    return (<div className="max-w-[1150px] m-auto flex flex-col gap-2">
        <div className="mt-8">
            <Heading title="Order Detail" />
        </div>
        <div>Order Id: {order.id}</div>
        <div> Total Amount: {""}
            <span className="font-bold">{formatPrice(order.amount)}</span>
        </div>
        <div className="flex gap-2 items-center">
            <div>Payment Status:</div>
            <div>{order.status === 'pending' ? (<Status
                text="Pending"
                icon={MdAccessTimeFilled}
                bg="bg-rose-200"
                color="text-rose-800" />
            ): order.status === 'complete' ? (<Status
                    text="Completed"
                    icon={MdDone}
                    bg="bg-green-200"
                    color="text-green-800" />) :
                    <></>}
            </div>
        </div>
        <div className="flex gap-2 items-center">
            <div>Delivery Status:</div>
            <div>{order.deliveryStatus === 'pending' ? (<Status
                text="Pending"
                icon={MdAccessTimeFilled}
                bg="bg-rose-200"
                color="text-rose-800" />
            ) : order.deliveryStatus === 'dispatched' ? (<Status
                text="Dispatched"
                icon={MdDeliveryDining}
                bg="bg-yellow-200"
                color="text-yellow-800" />
            ) : order.deliveryStatus === 'delivered' ? (<Status
                text="Delivered"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-800" />) : (
                <></>)}
            </div>
        </div>
        <div>
            Date: {moment(order.createDate).fromNow()}
        </div>
        <div>
            <h2 className="font-semibold mt-4 mb-2">Ordered Product</h2>
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
                <div className="col-span-2 justify-self-start">PRODUCT</div>
                <div className=" justify-self-center">PRICE</div>
                <div className=" justify-self-center">QUANTITY</div>
                <div className="justify-self-end ">TOTAL</div>

            </div>
            {order.products &&
                order.products.map((item) => {
                    return <OrderItem key ={item.id} item={item}>

                    </OrderItem>;
                })}
        </div>
    </div>
    );
}

export default OrderDetails;