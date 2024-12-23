import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import {
    MdFacebook,
} from "react-icons/md";
import {
    AiFillInstagram,
    AiFillMessage,
    AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-slate-200 py-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Shop Categories */}
                    <FooterList>
                        <h3 className="text-lg font-semibold mb-3">Shop Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Cookware
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Cutlery
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Electric Appliances
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Puja Items
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Gas Accessory
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Plastic Items
                                </Link>
                            </li>
                        </ul>
                    </FooterList>

                    {/* Customer Service */}
                    <FooterList>
                        <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Returns & Exchange
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Address
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </FooterList>

                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">About Us</h3>
                        <p className="mb-4 text-sm text-gray-400">
                            Amazing kitchenware accessories and gas delivery service at your home.
                        </p>
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} Bhattarai Ecommerce. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Embedded Map */}
                <div className="mt-8 flex justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.6869014764397!2d83.04750636219978!3d27.757801647013277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996575035d94aa1%3A0x821076a28b19840e!2sBhattarai%20bhada%20and%20gas%20dealer!5e0!3m2!1sen!2snp!4v1734964755578!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: "0", borderRadius: "8px" }}
                            loading="lazy"
                            title="Store Location"
                        />
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 border-t border-gray-600 pt-4 flex justify-center space-x-6">
                    <Link href="https://www.facebook.com/profile.php?id=61570529356026" className="text-gray-400 hover:text-white">
                        <MdFacebook size={28} />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61570529356026" className="text-gray-400 hover:text-white">
                        <AiFillTwitterCircle size={28} />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61570529356026" className="text-gray-400 hover:text-white">
                        <AiFillInstagram size={28} />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61570529356026" className="text-gray-400 hover:text-white">
                        <AiFillMessage size={28} />
                    </Link>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
