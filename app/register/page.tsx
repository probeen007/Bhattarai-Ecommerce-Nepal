import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import FormWrap from "../components/FormWarp";
import RegisterForm from "./RegisterForm";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const Register = async () => {
    const currentUser = await getCurrentUser()
    return (
        <Container>
            <FormWrap>
                <Suspense fallback={<div> <FaSpinner/></div>}>
                    <RegisterForm currentUser={currentUser} />
                </Suspense>
            </FormWrap>
        </Container>
    );
};

export default Register;