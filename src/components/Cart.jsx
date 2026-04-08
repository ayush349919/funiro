import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Thunks/Addproducts";

export default function Cart() {
    const products = useSelector((state) => state.cart.cartitems);
    const totalQuantity = useSelector((state) => state.cart.totalquantity);
    const totalprice = useSelector((state) => state.cart.totalprice)
    const dispatch = useDispatch()

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-extrabold text-gray-800">Your Cart</h2>

                <div className="flex items-center gap-6">
                    {/* Total Quantity Pill */}
                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
                        {totalQuantity} Items
                    </span>

                    {/* Grand Total Styling */}
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Grand Total</span>
                        <span className="text-2xl font-black text-green-600">
                            ${totalprice.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                    <p className="text-xl text-gray-400">Oops! Your cart is feeling light.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((item) => (
                        <div key={item.id} className="group relative bg-white border border-gray-100 rounded-2xl p-4 flex gap-5 hover:shadow-xl transition-all duration-300">

                            {/* Product Image Section */}
                            <div className="w-32 h-32 shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                                <img
                                    src={item.images?.[0] || 'https://placeholder.com'}
                                    alt={item.title}
                                    className="w-full h-full object-contain mix-blend-multiply p-2 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="flex flex-col justify-between grow">
                                <div className="space-y-1">
                                    <h3 className="font-bold text-gray-800 text-lg leading-tight line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-600 font-black text-xl">
                                        ${item.price}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    {/* Custom Quantity Pill */}
                                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                        <button onClick={() => dispatch(decrement(item.id))} className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold">-</button>
                                        <span className="px-4 py-1 text-sm font-semibold text-gray-700">{item.quantity}</span>
                                        <button onClick={() => dispatch(increment(item.id))} className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold">+</button>
                                    </div>

                                    {/* Trash Button */}
                                    <button className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                                        <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
