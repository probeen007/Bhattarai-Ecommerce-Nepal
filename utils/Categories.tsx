import { AiFillMobile, AiFillPhone, AiOutlineDesktop } from "react-icons/ai";
import { MdLaptop, MdMobileOff, MdOutlineKeyboard, MdPhoneIphone, MdStorefront, MdTv, MdWatch } from "react-icons/md";

export const categories = [
    {
        label: 'All',
        icon: MdStorefront
    },
    {
        label: 'Mobile',
        icon: MdPhoneIphone
    },
    {
        label: 'Desktop',
        icon: AiOutlineDesktop
    },
    {
        label: 'Watch',
        icon: MdWatch
    },
    {
        label: 'Tv',
        icon: MdTv
    },
    {
        label: 'Accessories',
        icon: MdOutlineKeyboard
    },
    {
        label: 'Laptops',
        icon: MdLaptop
    }
]