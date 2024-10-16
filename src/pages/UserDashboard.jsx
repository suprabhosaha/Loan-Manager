import { useState } from "react";
import Navbar from "../components/Navbar";
import { BsCash } from "react-icons/bs";
import { FaSearch, FaSortAmountDown, FaFilter } from "react-icons/fa";

const UserDashboard = () => {

    const [getLoan, setGetLoan] = useState(false);

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
        <div id="user-dashboard">
            <Navbar />
            <div id="main-content" className="relative p-10">
                <div className="w-[40%] my-5 mx-auto h-20 text-green-900 flex items-center">
                    <div className="bg-[#6b9908] w-20 h-full flex items-center justify-center text-5xl text-green-900 font-bold">
                        <BsCash className="" />
                    </div>
                    <div className="p-4 text-2xl">₹0.00</div>
                    <button className="bg-gray-500 opacity-80 shadow-lg shadow-gray-500 text-white py-3 px-5 rounded-lg ml-auto mr-2 cursor-pointer" onClick={() => setGetLoan(true)}>Get A Loan</button>
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
                    <span className="font-bold">Search for loans</span>
                </div>
                <div className="w-[60%] min-h-[500px] mx-auto mb-10 bg-white rounded-lg">
                    <div className="flex items-center justify-center p-5">
                        <span className="mr-auto text-xl font-semibold">Applied Loans</span>
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

                {getLoan && <>

                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-5" onClick={() => setGetLoan(false)}></div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg z-20">
                        <h2 className="text-2xl font-bold mb-6">APPLY FOR A LOAN</h2>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full name as it appears on bank account
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Full name as it appears on bank account"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    How much do you need?
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="How much do you need?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Loan tenure (in months)
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Loan tenure (in months)"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Employment status
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Employment status"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Reason for loan
                                </label>
                                <textarea
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Reason for loan"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Existing loan amount?
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Existing loan amount?"
                                />
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="custom-checkbox"
                                    className="form-checkbox h-5 w-5 text-green-600"
                                />
                                <label htmlFor="custom-checkbox" className="text-gray-700 p-2">
                                    I have read the imoprtant information and accpet that by completing the application I will be bound by the terms
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="custom-checkbox"
                                    className="form-checkbox h-5 w-5 text-green-600"
                                />
                                <label htmlFor="custom-checkbox" className="text-gray-700 p-2">
                                    Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
                                </label>
                            </div>
                        </div>

                        <button className="mt-6 bg-[#0a5210] text-white py-3 px-6 rounded-lg">Submit</button>
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default UserDashboard;
