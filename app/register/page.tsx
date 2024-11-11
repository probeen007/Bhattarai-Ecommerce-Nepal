import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import FormWrap from "../components/FormWarp";
import RegisterForm from "./RegisterForm";

const Register = async () => {
    const currentUser = await getCurrentUser()
    return ( 
        <Container>
            <FormWrap>
                <RegisterForm currentUser={currentUser}/>
            </FormWrap>
        </Container>
     );
};
 
export default Register;