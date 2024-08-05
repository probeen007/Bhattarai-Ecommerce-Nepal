import { Suspense } from "react";
import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: "Shop-Admin",
    description: "Shop Admin Dashboard"
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            
            <Suspense fallback={<div> Loading...</div>}>
            <AdminNav />
            {children}
            </Suspense>

        </div>
    );

}

export default AdminLayout;