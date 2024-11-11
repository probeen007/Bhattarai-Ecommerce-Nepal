"use client"


import Link from "next/link";
import AdminNavItem from "./AdminNavItem";
import { MdAdd, MdArtTrack, MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd, MdList, MdPersonAdd, MdRecycling, MdSettings, MdSevereCold, MdStackedBarChart, MdStackedLineChart } from "react-icons/md";
import { usePathname } from "next/navigation";
import Container from "../container";



const AdminNav = () => {
    const pathname = usePathname()

    return (
        <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
            <Container>
                <div className="flex flex-row items-center justify-between md:justify-center
            gap-8 md:gap-12 overflow-x-auto flex-nowrap">
                    <Link href="/admin">
                        <AdminNavItem label="Summary" icon={MdDashboard} selected={pathname === "/admin"} />
                    </Link>

                    <Link href="/admin/add-products">
                        <AdminNavItem label="Addproducts" icon={MdLibraryAdd} selected={pathname === "/admin/add-products"} />
                    </Link>

                    <Link href="/admin/manage-products">
                        <AdminNavItem label="Manageproducts" icon={MdDns} selected={pathname === "/admin/manage-products"} />
                    </Link>

                    <Link href="/admin/manage-orders">
                        <AdminNavItem label="Manageorders" icon={MdFormatListBulleted} selected={pathname === "/admin/manage-orders"} />
                    </Link>

                </div>
            </Container>
        </div>

    );
}

export default AdminNav;