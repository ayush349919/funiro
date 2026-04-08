import { useSelector } from "react-redux";

export default function CheckOut() {
    const products = useSelector((state) => state.cart.cartitems);
    const totalprice = useSelector((state) => state.cart.totalprice);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 font-poppins">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                
                {/* --- Left Side: Billing Details (Takes 7 columns on LG) --- */}
                <div className="lg:col-span-7 space-y-6 md:space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Billing details</h2>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700">First Name</label>
                            <input type="text" placeholder="John" className="border border-gray-300 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Last Name</label>
                            <input type="text" placeholder="Doe" className="border border-gray-300 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <input type="email" placeholder="abc@gmail.com" className="border border-gray-300 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Street Address</label>
                            <input type="text" placeholder="House number and street name" className="border border-gray-300 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Town / City</label>
                            <input type="text" placeholder="Mumbai" className="border border-gray-300 p-3 rounded-lg focus:ring-1 focus:ring-[#B88E2F] outline-none" />
                        </div>
                    </form>
                </div>

                {/* --- Right Side: Order Summary (Takes 5 columns on LG) --- */}
                <div className="lg:col-span-5 bg-white border border-gray-100 p-5 md:p-8 rounded-2xl shadow-sm h-fit sticky top-6">
                    <div className="flex justify-between items-center border-b pb-4">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800">Product</h3>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800">Subtotal</h3>
                    </div>

                    {/* Products List */}
                    <div className="mt-6 space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                        {products.length > 0 ? (
                            products.map((item) => (
                                <div key={item.id} className="flex justify-between items-start gap-4 text-sm">
                                    <span className="text-gray-500 line-clamp-2">
                                        {item.title} <strong className="text-black ml-1 whitespace-nowrap">x {item.quantity}</strong>
                                    </span>
                                    <span className="font-semibold text-gray-800 whitespace-nowrap">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm italic">No items in cart</p>
                        )}
                    </div>

                    {/* Grand Total */}
                    <div className="mt-8 border-t pt-6">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-base md:text-lg font-medium">Total</span>
                            <span className="text-xl md:text-2xl font-black text-[#B88E2F]">
                                ${totalprice.toFixed(2)}
                            </span>
                        </div>

                        {/* Payment Method Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="pay" id="bank" className="accent-[#B88E2F] w-4 h-4" defaultChecked />
                                <label htmlFor="bank" className="font-bold text-gray-800 cursor-pointer">Direct Bank Transfer</label>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed text-justify">
                                Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <div className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="pay" id="cod" className="accent-[#B88E2F] w-4 h-4" />
                                <label htmlFor="cod" className="font-medium text-gray-400 cursor-pointer group-hover:text-gray-600 transition-colors">Cash On Delivery</label>
                            </div>
                        </div>

                        <button className="w-full mt-10 bg-black text-white py-4 rounded-xl font-bold tracking-[2px] hover:bg-gray-800 active:scale-[0.98] transition-all uppercase text-sm md:text-base shadow-lg">
                            Place Order
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
