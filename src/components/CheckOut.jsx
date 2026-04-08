import { useSelector } from "react-redux";

export default function CheckOut() {
    const products = useSelector((state) => state.cart.cartitems);
    const totalprice = useSelector((state) => state.cart.totalprice);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 font-poppins">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* --- Left Side: Billing Details --- */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Billing details</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-semibold">First Name</label>
                            <input type="text" placeholder="John" className="border border-gray-300 p-3 rounded-lg focus:outline-normal" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-semibold">Last Name</label>
                            <input type="text" placeholder="Doe" className="border border-gray-300 p-3 rounded-lg focus:outline-normal" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold">Email Address</label>
                            <input type="email" placeholder="abc@gmail.com" className="border border-gray-300 p-3 rounded-lg focus:outline-normal" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold">Street Address</label>
                            <input type="text" placeholder="House number and street name" className="border border-gray-300 p-3 rounded-lg focus:outline-normal" />
                        </div>
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <label className="text-sm font-semibold">Town / City</label>
                            <input type="text" placeholder="Mumbai" className="border border-gray-300 p-3 rounded-lg focus:outline-normal" />
                        </div>
                    </form>
                </div>

                {/* --- Right Side: Order Summary Card --- */}
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm h-fit">
                    <div className="flex justify-between items-center border-b pb-4">
                        <h3 className="text-xl font-bold text-gray-800">Product</h3>
                        <h3 className="text-xl font-bold text-gray-800">Subtotal</h3>
                    </div>

                    {/* Products List */}
                    <div className="mt-6 space-y-4 max-h-75 overflow-y-auto pr-2">
                        {products.map((item) => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">
                                    {item.title} <strong className="text-black ml-2">x {item.quantity}</strong>
                                </span>
                                <span className="font-semibold text-gray-800">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Grand Total */}
                    <div className="mt-8 border-t pt-4">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-2xl font-black text-normal">
                                ${totalprice.toFixed(2)}
                            </span>
                        </div>

                        {/* Payment Method Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <input type="radio" name="pay" id="bank" className="accent-normal" defaultChecked />
                                <label htmlFor="bank" className="font-bold text-gray-800">Direct Bank Transfer</label>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <div className="flex items-center gap-3">
                                <input type="radio" name="pay" id="cod" className="accent-normal" />
                                <label htmlFor="cod" className="font-medium text-gray-400">Cash On Delivery</label>
                            </div>
                        </div>

                        <button className="w-full mt-10 bg-black text-white py-4 rounded-xl font-bold tracking-widest hover:bg-gray-800 transition-all uppercase">
                            Place Order
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
