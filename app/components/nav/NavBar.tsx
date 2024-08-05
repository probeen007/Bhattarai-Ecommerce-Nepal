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
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/" className={`${redressed.className} font-bold text-2xl`}>
                            Bhattarai Ecommerce
                        </Link>
                        <div className=" md:block">
                            <Suspense fallback={<div>Loading</div>}>
                            <SearchBar/>
                            </Suspense>
                            </div>
                        
                        <div className="flex item-center gap-10 md:gap-12">
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