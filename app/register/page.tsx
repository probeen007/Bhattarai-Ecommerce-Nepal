import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import FormWrap from "../components/FormWarp";
import RegisterForm from "./RegisterForm";
import { Suspense } from "react";
const Register = async () => {
    const currentUser = await getCurrentUser()
    return (
        <Suspense fallback={<div>Loading data...</div>}>

            <Container>
                <FormWrap>
                    <RegisterForm currentUser={currentUser} />
                </FormWrap>
            </Container>
        </Suspense>


    );
};

export default Register;