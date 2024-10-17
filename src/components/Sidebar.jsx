import { FaUserCircle, FaUserMinus, FaUserCheck, FaCreditCard, FaUserCog, FaPiggyBank, FaSignature, FaBriefcase, FaCalendarCheck, FaSignOutAlt } from "react-icons/fa";
import { IoIosSpeedometer, IoMdSettings } from "react-icons/io";
import { RiCashFill } from "react-icons/ri";
import { GiInjustice } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { SiGoogledocs } from "react-icons/si";
import { PiArrowSquareOutBold } from "react-icons/pi";

const Sidebar = () => {
    return (
        <div id="sidebar" className="w-48 h-[100%] fixed top-14 bg-green-900 text-white text-base font-semibold">
            <div className="user-name bg-[#25372a] p-4 flex gap-3 items-center justify-center text-[#adcf1a]">
                <FaUserCircle className="text-3xl" />
                <span>John Doe</span>
            </div>
            <div className="sidebar-options my-3">
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <IoIosSpeedometer />
                    <span>Dashboard</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaUserMinus />
                    <span>Borrowers</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <RiCashFill />
                    <span>Loans</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaUserCheck />
                    <span>Repayments</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <GiInjustice />
                    <span>Loan Parameters</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaCreditCard />
                    <span>Accounting</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <ImStatsBars />
                    <span>Reports</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <SiGoogledocs />
                    <span>Collateral</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaUserCog />
                    <span>Access Configuration</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaPiggyBank />
                    <span>Savings</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <PiArrowSquareOutBold />
                    <span>Expenses</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaSignature />
                    <span>E-signature</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaBriefcase />
                    <span>Investor Accounts</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <FaCalendarCheck />
                    <span>Calendar</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-t-2 border-green-950 cursor-pointer">
                    <IoMdSettings />
                    <span>Settings</span>
                </div>
                <div className="sidebar-option flex px-3 py-1 gap-2 items-center justify-start border-y-2 border-green-950 cursor-pointer">
                    <FaSignOutAlt />
                    <span>Sign Out</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;