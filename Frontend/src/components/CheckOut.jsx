import { useSelector } from "react-redux";

export default function CheckOut() {
    const products = useSelector((state) => state.cart.cartitems);
    const totalprice = useSelector((state) => state.cart.totalprice);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 font-poppins transition-colors duration-300 dark:text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                
                {/* --- Left Side: Billing Details --- */}
                <div className="lg:col-span-7 space-y-6 md:space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Billing details</h2>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Input Fields: Added dark:bg-zinc-900 and dark:border-zinc-800 */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                            <input type="text" placeholder="John" className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none dark:text-white" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                            <input type="text" placeholder="Doe" className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none dark:text-white" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                            <input type="email" placeholder="abc@gmail.com" className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none dark:text-white" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Street Address</label>
                            <input type="text" placeholder="House number and street name" className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none dark:text-white" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Town / City</label>
                            <input type="text" placeholder="Mumbai" className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none dark:text-white" />
                        </div>
                    </form>
                </div>

                {/* --- Right Side: Order Summary: Added dark:bg-zinc-900 dark:border-zinc-800 --- */}
                <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-5 md:p-8 rounded-2xl shadow-sm h-fit sticky top-6 transition-colors">
                    <div className="flex justify-between items-center border-b dark:border-zinc-800 pb-4">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">Product</h3>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">Subtotal</h3>
                    </div>

                    {/* Products List */}
                    <div className="mt-6 space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                        {products.length > 0 ? (
                            products.map((item) => (
                                <div key={item.id} className="flex justify-between items-start gap-4 text-sm">
                                    <span className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                        {item.title} <strong className="text-black dark:text-white ml-1 whitespace-nowrap">x {item.quantity}</strong>
                                    </span>
                                    <span className="font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm italic">No items in cart</p>
                        )}
                    </div>

                    {/* Grand Total */}
                    <div className="mt-8 border-t dark:border-zinc-800 pt-6">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-base md:text-lg font-medium dark:text-white">Total</span>
                            <span className="text-xl md:text-2xl font-black text-[#B88E2F]">
                                ${totalprice.toFixed(2)}
                            </span>
                        </div>

                        {/* Payment Method Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="pay" id="bank" className="accent-[#B88E2F] w-4 h-4" defaultChecked />
                                <label htmlFor="bank" className="font-bold text-gray-800 dark:text-white cursor-pointer">Direct Bank Transfer</label>
                            </div>
                            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed text-justify">
                                Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <div className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="pay" id="cod" className="accent-[#B88E2F] w-4 h-4" />
                                <label htmlFor="cod" className="font-medium text-gray-400 dark:text-gray-500 cursor-pointer group-hover:text-[#B88E2F] transition-colors">Cash On Delivery</label>
                            </div>
                        </div>

                        {/* Button: Changed to Brand Gold for Dark Mode Pop */}
                        <button className="w-full mt-10 bg-black dark:bg-[#B88E2F] text-white py-4 rounded-xl font-bold tracking-[2px] hover:bg-gray-800 dark:hover:bg-[#967324] active:scale-[0.98] transition-all uppercase text-sm md:text-base shadow-lg">
                            Place Order
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
