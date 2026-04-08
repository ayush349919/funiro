import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Thunks/Thunks";
import { LoaderCircle, ShoppingCart, Star } from "lucide-react";
import { addtoCart } from "../Redux/Thunks/Addproducts";

export default function OurProducts({ heading = true, limit = null, button = true }) {
    const [currentlimit, setLimit] = useState(limit)
    const dispatch = useDispatch();
    const { status, items } = useSelector((state) => state.products);
    const displayedItems = currentlimit ? items?.slice(0, currentlimit) : items;

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getProducts());
        }
    }, [status, dispatch]);

    const onclickhandler = () => {
        if (currentlimit === null) {
            setLimit(limit);
        } else {
            setLimit(null);
        }
    }

    const onaddtocartHandler = (items) => {
        dispatch(addtoCart(items))
    }

    if (status === 'loading') {
        return (
            <div className="flex flex-col items-center justify-center min-h-100 gap-2">
                <LoaderCircle className="animate-spin text-blue-600 h-12 w-12" />
                <p className="text-gray-500 font-medium">Fetching Products...</p>
            </div>
        );
    }

    if (status === 'failed') return <div className="text-center py-20 text-red-600 font-bold">Failed to load items. Please try again.</div>;

    return (
        <section className="container mx-auto px-4 py-12">
            {heading && <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>}

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {displayedItems?.map((product) => (
                    <div key={product.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">

                        {/* Image Container */}
                        <div className="relative flex justify-center items-center h-60 bg-gray-100 overflow-hidden">
                            <img
                                src={product.images[0]} // DummyJSON gives a nice thumbnail
                                alt={product.title}
                                className="w-[70%] h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {product.discountPercentage > 0 && (
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    -{Math.round(product.discountPercentage)}%
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{product.title}</h3>
                                <div className="flex items-center text-yellow-500 text-sm font-semibold">
                                    <Star className="w-4 h-4 fill-current mr-1" />
                                    {product.rating}
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm line-clamp-2 mb-4 grow">
                                {product.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                <button onClick={() => onaddtocartHandler(product)} className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-colors">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {button && (
                <div className="flex justify-center mt-12">
                    <button
                        onClick={onclickhandler}
                        className="border-2 border-normal text-normal px-16 py-3 font-semibold hover:bg-normal hover:text-white transition-all duration-300 rounded-md"
                    >
                        {/* Dynamic Text based on state */}
                        {currentlimit === null ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}

        </section>
    );
}
