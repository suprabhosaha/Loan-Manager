import { FaPiggyBank, FaUserCheck, FaUserMinus, FaUsers, FaSortAmountDown, FaFilter } from "react-icons/fa";
import { BsBank2, BsCash, BsCashStack } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {

    const loans = [
        {
            details: 'Contact Email not Linked',
            customerName: 'Tom Cruise',
            date: 'June 09, 2021',
            time: '6:30 PM',
            status: 'PENDING',
            updated: '1 day ago',
            onDate: '24.05.2019',
        },
        {
            details: 'Adding Images to Featured Posts',
            customerName: 'Matt Damon',
            date: 'June 09, 2021',
            time: '6:30 PM',
            status: 'PENDING',
            updated: '1 day ago',
            onDate: '24.05.2019',
        },
        {
            details: 'When will I be charged this month?',
            customerName: 'Robert Downey',
            date: 'June 08, 2021',
            time: '6:30 PM',
            status: 'PENDING',
            updated: '1 day ago',
            onDate: '24.05.2019',
        },
        {
            details: 'Payment not going through',
            customerName: 'Christian Bale',
            date: 'June 08, 2021',
            time: '6:30 PM',
            status: 'PENDING',
            updated: '2 day ago',
            onDate: '24.05.2019',
        },
        {
            details: 'Unable to add replies',
            customerName: 'Henry Cavil',
            date: 'June 08, 2021',
            time: '6:30 PM',
            status: 'APPROVED',
            updated: '2 day ago',
            onDate: '23.05.2019',
        },
        {
            details: 'Downtime since last week',
            customerName: 'Chris Evans',
            date: 'June 08, 2021',
            time: '6:30 PM',
            status: 'APPROVED',
            updated: '3 day ago',
            onDate: '22.05.2019',
        },
        {
            details: 'Referral Bonus',
            customerName: 'Sam Smith',
            date: 'June 08, 2021',
            time: '6:30 PM',
            status: 'PENDING',
            updated: '4 day ago',
            onDate: '22.05.2019',
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'PENDING':
                return 'bg-yellow-500';
            case 'APPROVED':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="absolute left-48 m-8 top-14">
                <span className="text-green-900 text-3xl font-bold">Dashboard</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 text-green-900">
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <FaUsers />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">200</div>
                            <div className="text-gray-600">ACTIVE USERS</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <FaUserMinus />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">100</div>
                            <div className="text-gray-600">BORROWERS</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <BsCashStack />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">550,000</div>
                            <div className="text-gray-600">CASH DISBURSED</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <MdCurrencyExchange />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">1,000,000</div>
                            <div className="text-gray-600">CASH RECEIVED</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <FaPiggyBank />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">450,000</div>
                            <div className="text-gray-600">SAVINGS</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <FaUserCheck />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">30</div>
                            <div className="text-gray-600">REAPAID LOANS</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <BsBank2 />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">10</div>
                            <div className="text-gray-600">OTHER ACCOUNTS</div>
                        </div>
                    </div>
                    <div className="flex items-center bg-white shadow-md rounded-md">
                        <div className="bg-green-900 w-16 h-full flex items-center justify-center text-white text-3xl rounded-l-md">
                            <BsCash />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold">50</div>
                            <div className="text-gray-600">LOANS</div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] min-h-[500px] mx-auto mb-10 bg-white rounded-lg">
                    <div className="flex items-center justify-center p-5">
                        <span className="mr-auto text-xl font-semibold">Recent Loans</span>
                        <div className="ml-auto text-gray-400 flex gap-5 items-center justify-center">
                            <div className="flex items-center justify-center gap-2 cursor-pointer">
                                <FaSortAmountDown />
                                <span>Sort</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 cursor-pointer">
                                <FaFilter />
                                <span>Filter</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="overflow-hidden">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="px-6 py-3">User Details</th>
                                        <th className="px-6 py-3">Customer Name</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loans.map((loan, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="px-6 py-4 flex items-center">
                                                <div>
                                                    <div className="font-semibold">{loan.details}</div>
                                                    <div className="text-sm text-gray-500">Updated {loan.updated}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold">{loan.customerName}</div>
                                                <div className="text-sm text-gray-500">on {loan.onDate}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold">{loan.date}</div>
                                                <div className="text-sm text-gray-500">{loan.time}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 inline-block rounded-full cursor-pointer text-white ${getStatusColor(
                                                        loan.status
                                                    )}`}
                                                >
                                                    {loan.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;