import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import FormWarp from "../components/FormWarp";
import LoginForm from "./LoginForm";

const Login = async () => {
    const currentUser = await getCurrentUser()
    return (
        <Container>
            <FormWarp>
                <LoginForm currentUser={currentUser} />
            </FormWarp>
        </Container>
    );
}

export default Login;