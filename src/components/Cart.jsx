import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/Thunks/Addproducts";

export default function Cart() {
    const products = useSelector((state) => state.cart.cartitems);
    const totalQuantity = useSelector((state) => state.cart.totalquantity);
    const totalprice = useSelector((state) => state.cart.totalprice);
    const dispatch = useDispatch();

    return (
        // Added dark:bg-black and transition
        <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 dark:bg-black font-poppins transition-colors duration-300">
            
            {/* Header Section: Added dark:bg-zinc-900 dark:border-zinc-800 */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 gap-4 transition-colors">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white">Your Cart</h2>

                <div className="flex items-center justify-between w-full sm:w-auto gap-4 md:gap-6 border-t dark:border-zinc-800 sm:border-t-0 pt-4 sm:pt-0">
                    {/* Total Quantity Pill */}
                    <span className="bg-blue-100 dark:bg-[#B88E2F]/20 text-blue-700 dark:text-[#B88E2F] px-3 py-1 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
                        {totalQuantity} Items
                    </span>

                    {/* Grand Total */}
                    {products.length !== 0 && <div className="flex flex-col items-end">
                        <span className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Grand Total</span>
                        <span className="text-xl md:text-2xl font-black text-green-600 dark:text-green-400">
                            ${totalprice.toFixed(2)}
                        </span>
                    </div>}
                </div>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                    <p className="text-lg md:text-xl text-gray-400 dark:text-gray-500 font-medium">Oops! Your cart is feeling light.</p>
                </div>
            ) : (
                /* Grid: Added dark card styles */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {products.map((item) => (
                        <div key={item.id} className="group relative bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-3 md:p-4 flex gap-4 md:gap-5 hover:shadow-lg dark:hover:shadow-black transition-all duration-300">

                            {/* Product Image: Added dark:bg-zinc-800 */}
                            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-gray-50 dark:bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
                                <img
                                    src={item.images?.[0] || 'https://placeholder.com'}
                                    alt={item.title}
                                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal p-2 group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="flex flex-col justify-between grow min-w-0">
                                <div className="space-y-1">
                                    <h3 className="font-bold text-gray-800 dark:text-white text-sm md:text-lg leading-tight truncate md:line-clamp-2 md:whitespace-normal">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-600 dark:text-[#B88E2F] font-black text-lg md:text-xl">
                                        ${item.price}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-3">
                                    {/* Quantity Selector: Updated dark styles */}
                                    <div className="flex items-center border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden bg-white dark:bg-zinc-800">
                                        <button 
                                            onClick={() => dispatch(decrement(item.id))} 
                                            className="px-2 md:px-3 py-1 bg-gray-50 dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 text-gray-600 dark:text-gray-300 font-bold transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 md:px-4 py-1 text-xs md:text-sm font-semibold text-gray-700 dark:text-white min-w-[30px] text-center">
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={() => dispatch(increment(item.id))} 
                                            className="px-2 md:px-3 py-1 bg-gray-50 dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 text-gray-600 dark:text-gray-300 font-bold transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Trash Button */}
                                    <button 
                                        onClick={() => dispatch(reset(item.id))} 
                                        className="p-2 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 rounded-full hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all transform active:scale-90"
                                        title="Remove item"
                                    >
                                        <svg xmlns="http://w3.org" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
