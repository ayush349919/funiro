import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Thunks/Thunks"; 
import { addtoCart } from "../Redux/Thunks/Addproducts";
import toast from "react-hot-toast";

export default function Singleproduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.products);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(getProducts());
        }
    }, [dispatch, items.length]);

    const product = items?.find((item) => item.id === Number(id));

    if (status === 'loading' && items.length === 0) {
        return <div className="h-screen flex items-center justify-center text-xl dark:bg-black dark:text-white">Loading...</div>;
    }

    if (!product && status === 'success') {
        return <div className="h-screen flex items-center justify-center text-red-500 dark:bg-black">Product Not Found!</div>;
    }

    return (
        // Added dark:bg-black and transition
        <div className="container mx-auto px-6 py-12 font-poppins max-w-6xl transition-colors duration-300">
            {product && (
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    
                    {/* Image Section: Added dark:bg-zinc-900 and dark:border-zinc-800 */}
                    <div className="w-full md:w-5/12 flex justify-center">
                        <div className="bg-[#fcfcfc] dark:bg-zinc-900 rounded-2xl p-8 flex justify-center items-center w-full aspect-square border border-gray-50 dark:border-zinc-800">
                            <img 
                                src={product.images[0] || product.thumbnail} 
                                alt={product.title} 
                                className="max-h-[300px] w-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-7/12 space-y-5">
                        <div>
                            {/* Gold color for brand identity */}
                            <p className="text-[#B88E2F] text-xs font-bold uppercase tracking-widest mb-2">
                                {product.category}
                            </p>
                            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-xl font-bold text-gray-900 dark:text-[#B88E2F]">${product.price}</span>
                                <span className="text-gray-300 dark:text-gray-700">|</span>
                                <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <span className="text-yellow-400 mr-1">★</span>
                                    {product.rating} Rating
                                </div>
                            </div>
                        </div>

                        {/* Description: Added dark:border-zinc-800 */}
                        <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-tighter mb-2">Description</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="flex gap-8 py-2">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Brand</p>
                                <p className="text-sm font-medium dark:text-white">{product.brand || "Generic"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Availability</p>
                                <p className="text-sm font-medium text-green-600 dark:text-green-400">{product.availabilityStatus}</p>
                            </div>
                        </div>

                        {/* Button: Changed to your brand gold for better dark mode visibility */}
                        <button 
                            onClick={() => {
                                dispatch(addtoCart(product));
                                toast.success(`${product.title} added!`);
                            }}
                            className="bg-[#B88E2F] text-white px-10 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#967324] transition-all active:scale-95 shadow-lg shadow-gray-100 dark:shadow-none"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
