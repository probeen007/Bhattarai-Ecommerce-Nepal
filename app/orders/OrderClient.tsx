"use client"

import { Order, User } from "@prisma/client";
import React, { useCallback } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from "moment";

interface OrdersClientProps {
    orders: ExtendedOrders[];
}

type ExtendedOrders = Order & {
    user: User
}

const ManageOrdersClient: React.FC<OrdersClientProps> = ({ orders }) => {

    const router = useRouter();
    let rows: any = []

    if (orders) {
        rows = orders.map((order) => {
            return {
                id: order.id,
                customer: order.user.name,
                amount: formatPrice(order.amount / 100),
                paymentStatus: order.status,
                date: moment(order.createDate).fromNow(),
                deliveryStatus: order.deliveryStatus,

            }
        });
    }

    const columns: GridColDef[] = [

        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'customer', headerName: 'CustomerName', width: 220 },
        {
            field: 'amount', headerName: 'Amount(USD)', width: 130, renderCell: (params) => {
                return (
                    <div className="font-bold text-slate-800">{params.row.amount}</div>
                );
            }
        },


        {
            field: 'paymentStatus', headerName: 'Payment Status', width: 130, renderCell: (params) => {
                return (
                    <div>{params.row.paymentStatus === 'pending' ? (
                        <Status
                            text="Pending"
                            icon={MdAccessTimeFilled}
                            bg="bg-rose-200"
                            color="text-rose-800" />
                    ) : params.row.paymentStatus === 'complete' ? (
                        <Status
                            text="Completed"
                            icon={MdDone}
                            bg="bg-yellow-200"
                            color="text-yellow-700" />
                    ) : (<></>
                    )}
                    </div>
                );
            },
        },
        {
            field: 'deliveryStatus', headerName: 'Delivery Status', width: 150, renderCell: (params) => {
                return (
                    <div>{params.row.deliveryStatus === 'pending' ? (
                        <Status
                            text="Pending"
                            icon={MdAccessTimeFilled}
                            bg="bg-rose-200"
                            color="text-rose-800" />
                    ) : params.row.deliveryStatus === 'dispatched' ? (
                        <Status
                            text="Dispatched"
                            icon={MdDeliveryDining}
                            bg="bg-yellow-200"
                            color="text-yellow-700" />
                    ) : params.row.deliveryStatus === 'delivered' ? (
                        <Status
                            text="Delivered"
                            icon={MdDone}
                            bg="bg-green-200"
                            color="text-green-700" />

                    ) : <></>
                    }
                    </div>
                );
            },
        },

        {
            field: 'date',
            headerName: "Date",
            width: 130
        },


        {
            field: 'action', headerName: 'Actions', width: 200, renderCell: (params) => {
                return (
                    <div className="flex justify-between gap-4 w-full mt-2.5 ">


                        <ActionBtn icon={MdRemoveRedEye} onClick={() => {
                            router.push(`/order/${params.row.id}`);
                        }} />

                    </div>
                );
            }
        },

    ];

    // 11:04:54
    return (<div className="max-w-[1150px] m-auto text-xl">

        <div className="mb-4 mt-8">
            <Heading title="Orders Manager" center />
        </div>

        <div style={{ height: 600, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 100]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>

    </div>);
}

export default ManageOrdersClient;