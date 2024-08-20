import Link from "next/link";
import Container from "../container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { Suspense } from "react";
import { dividerClasses } from "@mui/material";


const redressed = Redressed({subsets: ["latin"],weight: ["400"]});
const NavBar = async() => {
    const currentUser = await getCurrentUser()
    return (
        <div className="Sticky top-0 w-full bg-slate-300 z-30 shadow-sm ">
            <div className="py-3 border-b-[2px]">
                <Container>
                    <div className="flex items-center justify-between w-full">
                        <Link href="/" className={`${redressed.className} font-bold text-xl`}>
                            भट्टराई Ecommerce
                        </Link>
                        <div className="hidden md:block flex-grow">
                            <Suspense fallback={<div>Loading</div>}>
                            <SearchBar/>
                            </Suspense>
                            </div>
                        
                        <div className="flex items-center gap-4">
                            <CartCount  />
                            <UserMenu  currentUser ={currentUser}/>
                        </div>
                    </div>
                </Container>
            </div>
            <Categories/>
        </div>
    );
};

export default NavBar;
