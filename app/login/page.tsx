import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import FormWarp from "../components/FormWarp";
import LoginForm from "./LoginForm";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const Login = async () => {
    const currentUser = await getCurrentUser()
    return (
        <Container>
            <FormWarp>
                <Suspense fallback={<div> <FaSpinner/></div>}>
                    <LoginForm currentUser={currentUser} />
                </Suspense>
            </FormWarp>
        </Container>
    );
}

export default Login;