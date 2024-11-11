import { AiFillMobile, AiFillPhone, AiOutlineDesktop } from "react-icons/ai";
import { MdCleaningServices, MdElectricalServices, MdKitchen, MdLaptop, MdLocalGasStation, MdMobileOff, MdOutlineKeyboard, MdPhoneIphone, MdRiceBowl, MdStorage, MdStorefront, MdTv, MdWatch } from "react-icons/md";

export const categories = [
    {
        label: 'All',
        icon: MdStorefront
    },
    {
        label: 'Cookware',
        icon: MdRiceBowl
    },
    {
        label: 'Cutlery',
        icon: MdKitchen
    },
    {
        label: 'Electric Appliences',
        icon: MdElectricalServices
    },
    {
        label: 'Cleaning & Maintenance',
        icon: MdCleaningServices
    },
    {
        label: 'LPG Accessories',
        icon: MdLocalGasStation
    },
    {
        label: 'Storage & Organization',
        icon: MdStorage
    }
]