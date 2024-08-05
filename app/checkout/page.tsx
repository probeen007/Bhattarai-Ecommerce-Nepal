
import { FaSpinner } from "react-icons/fa";
import Container from "../components/container";
import FormWrap from "../components/FormWarp";
import CheckoutClient from "./CheckoutClient"
import { Suspense } from "react";

const Checkout = () => {
    return (<div className="p-8">
        <Container>
            <FormWrap>
                <Suspense fallback={<div><FaSpinner/></div>}>
                    <CheckoutClient />
                </Suspense>
            </FormWrap>

        </Container>

    </div>);
}

export default Checkout;