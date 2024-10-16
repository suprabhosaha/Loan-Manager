import { IoIosNotifications, IoMdArrowDropdown, IoIosSpeedometer } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle, FaBook, FaCreditCard } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";


const Navbar = () => {
    return (
        <div className="sticky z-50 w-100 top-0 left-0 shadow-md bg-gradient-to-r from-white to-[#eaeae9] shadow-gray-400 py-3 px-4 flex items-center justify-between text-2xl">
            <div className="w-30">
                <span className="font-bold text-green-900 cursor-pointer">CREDIT APP</span>
            </div>
            <div className="text-green-900 flex gap-6 items-center justify-center">
                <div className="flex gap-2 items-center justify-center">
                    <IoIosSpeedometer className="text-3xl font-bold" />
                    <span className="text-xl font-bold">Home</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <RiSecurePaymentFill />
                    <span className="text-xl">Payment</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <FaBook className="text-base" />
                    <span className="text-xl">Budget</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <FaCreditCard className="text-xl" />
                    <span className="text-xl">Card</span>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-between text-green-900">
                <IoIosNotifications />
                <AiFillMessage />
                <div className="flex gap-2 items-center justify-between">
                    <FaUserCircle className="cursor-pointer" />
                    <span className="text-xl cursor-pointer">User</span>
                    <IoMdArrowDropdown className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;