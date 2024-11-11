import Container from "@/app/components/container";
import FormWrap from "@/app/components/FormWarp";
import AddProductForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const AddProducts = async() => {
    
    const currentUser = await getCurrentUser()
    if (!currentUser|| currentUser.role !== 'ADMIN'){
        return <NullData title="Oops Access denied___:("/>
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
}

export default AddProducts;