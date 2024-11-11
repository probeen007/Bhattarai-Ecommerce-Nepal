
import Container from "../components/container";
import FormWrap from "../components/FormWarp";
import CheckoutClient from "./CheckoutClient"

const Checkout = () => {
    return ( <div className="p-8">
        <Container>
            <FormWrap>
                <CheckoutClient/>
            </FormWrap>

        </Container>

    </div> );
}
 
export default Checkout;