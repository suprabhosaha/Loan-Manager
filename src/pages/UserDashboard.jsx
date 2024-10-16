import Navbar from "../components/Navbar";
import { BsCash } from "react-icons/bs";
import { FaSearch, FaSortAmountDown, FaFilter } from "react-icons/fa";


const UserDashboard = () => {
    const loans = [
        {
            officer: 'John Okoh',
            amount: '50,000.00',
            date: 'June 09, 2021',
            time: '6:30 PM',
            status: 'PENDING',
            updated: '1 day ago',
            debt: 'Not Debt Yet',
        },
        {
            officer: 'John Okoh',
            amount: '100,000.00',
            date: 'June 07, 2021',
            time: '6:30 PM',
            status: 'VERIFIED',
            updated: '1 day ago',
            debt: 'Not Debt Yet',
        },
        {
            officer: 'John Okoh',
            amount: '100,000.00',
            date: 'June 07, 2021',
            time: '6:30 PM',
            status: 'REJECTED',
            updated: '1 day ago',
            debt: 'Not Debt Yet',
        },
        {
            officer: 'John Okoh',
            amount: '100,000.00',
            date: 'May 27, 2021',
            time: '6:30 PM',
            status: 'APPROVED',
            updated: '1 day ago',
            debt: 'Loan Fully Repaid',
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'PENDING':
                return 'bg-yellow-500';
            case 'VERIFIED':
                return 'bg-green-500';
            case 'REJECTED':
                return 'bg-red-500';
            case 'APPROVED':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div id="user-dasshboard">
            <Navbar />
            <div className="w-[40%] mx-auto mt-20 mb-10 h-20 text-green-900 flex items-center">
                <div className="bg-[#6b9908] w-20 h-full flex items-center justify-center text-5xl text-green-900 font-bold">
                    <BsCash className="" />
                </div>
                <div className="p-4 text-2xl">₹0.00</div>
                <button className="bg-gray-500 opacity-80 shadow-lg shadow-gray-500 text-white py-3 px-5 rounded-lg ml-auto mr-2 cursor-pointer">Get A Loan</button>
            </div>
            <div className="w-[40%] mx-auto bg-white rounded-md flex items-center justify-center text-xl">
                <div className="w-1/3 bg-[#f1f5e7] font-bold text-center p-2 rounded-lg cursor-pointer">
                    Borrow Cash
                </div>
                <div className="w-1/3 text-center p-2 cursor-pointer">
                    Transact
                </div>
                <div className="w-1/3 text-center p-2 cursor-pointer">
                    Deposit Cash
                </div>
            </div>
            <div className="w-[40%] rounded-md mx-auto my-10 bg-white text-gray-500 text-xl p-2 flex items-center gap-4 justify-start">
                <FaSearch className="mx-2" />
                <span className="font-bold">Seach for loans</span>
            </div>
            <div className="w-[60%] min-h-[500px] mx-auto mb-10 bg-white rounded-lg">
                <div className="flex items-center justify-center p-5">
                    <span className="mr-auto text-xl font-semibold">Applied Loans</span>
                    <div className="ml-auto text-gray-300 flex gap-5 items-center justify-center">
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
                                    <th className="px-6 py-3">Loan Officer</th>
                                    <th className="px-6 py-3">Amount</th>
                                    <th className="px-6 py-3">Date Applied</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loans.map((loan, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-6 py-4 flex items-center">
                                            <div>
                                                <div className="font-semibold">{loan.officer}</div>
                                                <div className="text-sm text-gray-500">Updated {loan.updated}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold">{loan.amount}</div>
                                            <div className="text-sm text-gray-500">{loan.debt}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold">{loan.date}</div>
                                            <div className="text-sm text-gray-500">{loan.time}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 inline-block rounded-full text-white ${getStatusColor(
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
    );
}

export default UserDashboard;