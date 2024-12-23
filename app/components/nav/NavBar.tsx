import Link from "next/link";
import Container from "../container";
import { Roboto } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";


const redressed = Roboto({ subsets: ["latin"], weight: ["400"] });
const NavBar = async () => {
    const currentUser = await getCurrentUser()
    return (
        <div className="sticky top-0 w-full bg-slate-300 z-30 shadow-sm">
            <div className="py-3 border-b-[2px]">
                <Container>
                    <div className="flex items-center justify-between w-full">
                        {/* Logo/Icon */}
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="/logo.ico" // Path to your icon in the public directory
                                alt="Logo"
                                className="w-10 h-10" // Adjust size (e.g., 40px x 40px)
                            />
                            <span className="text-black  text-2xl hover:text-gray-400 transition-all duration-300">
                                भट्टराई Ecommerce
                            </span>
                        </Link>

                        {/* Search Bar (visible only on larger screens) */}
                        <div className="hidden md:block flex-grow">
                            <SearchBar />
                        </div>

                        {/* Cart and User Menu */}
                        <div className="flex items-center gap-4">
                            <CartCount />
                            <UserMenu currentUser={currentUser} />
                        </div>
                    </div>
                </Container>
            </div>
            <Categories />
        </div>


    );
};

export default NavBar;