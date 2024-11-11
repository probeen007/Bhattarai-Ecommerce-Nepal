
import Container from "../components/container";
import FormWrap from "../components/FormWarp";
import CheckoutClient from "./CheckoutClient"
import { Suspense } from "react";
const Checkout = () => {
    return (<div className="p-8">
        <Suspense fallback={<div>Loading data...</div>}>

            <Container>
                <FormWrap>
                    <CheckoutClient />
                </FormWrap>

            </Container>

        </Suspense>

    </div>);
}

export default Checkout;