import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillMessage, AiFillTwitterCircle, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return ( <footer className="
        bg-slate-700
        text-slate-200
        text-sm
        mt-16
        ">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href="#"> Cookware</Link>
                        <Link href="#">Cutlery</Link>
                        <Link href="#">Electric Appliences</Link>
                        <Link href="#">Cleaning Appliences</Link>
                        <Link href="#">LPG gas</Link>
                        <Link href="#">Storing items</Link>
                        
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Service</h3>
                        <Link href="#"> Contact us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Returns & Exchange</Link>
                        <Link href="#">Adress</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-base font-bold mb-2">About Us </h3>
                    <p className="mb-2">Amazing kitchenware Accessories and Gas dilivery Service At your Home.</p>
                    <p>&copy; {new Date().getFullYear()} Bhattarai Ecommerce. All rights reserved</p>
                    </div>
                    <FooterList>
                    <h3 className="text-base font-bold mb-2">Follow Us</h3>
                    <div className="flex gap-1">
                        <Link href="#">
                        <MdFacebook size={24} />
                        </Link>
                        <Link href="#">
                        <AiFillTwitterCircle size={24} />
                        </Link>
                        <Link href="#">
                        <AiFillInstagram size={24} />
                        </Link>
                        <Link href="#">
                        <AiFillMessage size={24} />
                        </Link>
                    </div>
                    </FooterList>
                </div>
            </Container>
            </footer> );
}
 
export default Footer;