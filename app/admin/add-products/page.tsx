import Container from "@/app/components/container";
import FormWrap from "@/app/components/FormWarp";
import AddProductForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const AddProducts = async () => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser || currentUser.role !== "ADMIN") {
            return <NullData title="Oops Access denied___:(" />;
        }

        return (
            <div className="p-8">
                <Container>
                    <FormWrap>

                        <AddProductForm />

                    </FormWrap>
                </Container>
            </div>
        );
    } catch (error) {
        console.error("Error fetching current user:", error);
        return <NullData title="Error fetching user data" />;
    }
};

export default AddProducts;
