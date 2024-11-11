import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import FormWarp from "../components/FormWarp";
import LoginForm from "./LoginForm";
import { Suspense } from "react";
const Login = async () => {
    const currentUser = await getCurrentUser()
    return (
        <Suspense fallback={<div>Loading data...</div>}>
            <Container>
                <FormWarp>
                    <LoginForm currentUser={currentUser} />
                </FormWarp>
            </Container>
        </Suspense>

    );
}

export default Login;