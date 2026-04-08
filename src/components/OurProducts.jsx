import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Thunks/Thunks";
import { LoaderCircle, ShoppingCart, Star, Filter } from "lucide-react";
import { addtoCart } from "../Redux/Thunks/Addproducts";

export default function OurProducts({ heading = true, limit = null, button = true }) {
    const [currentlimit, setLimit] = useState(limit);
    const [sortOrder, setSortOrder] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const dispatch = useDispatch();
    const { status, items } = useSelector((state) => state.products);

    const categories = ["All", ...new Set(items?.map(item => item.category))];

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getProducts());
        }
    }, [status, dispatch]);

    const getProcessedItems = () => {
        let list = items ? [...items] : [];

        // 1. Pehle Filter karein
        if (selectedCategory !== "All") {
            list = list.filter(item => item.category === selectedCategory);
        }

        // 2. Phir Sort karein
        if (sortOrder === "low-to-high") {
            list.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-to-low") {
            list.sort((a, b) => b.price - a.price);
        }

        // 3. End mein Slice karein (Limit ke liye)
        return currentlimit ? list.slice(0, currentlimit) : list;
    };

    const displayedItems = getProcessedItems();

    const onclickhandler = () => setLimit(currentlimit === null ? limit : null);
    const onaddtocartHandler = (product) => dispatch(addtoCart(product));

    if (status === 'loading') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-2">
                <LoaderCircle className="animate-spin text-blue-600 h-12 w-12" />
                <p className="text-gray-500 font-medium">Fetching Products...</p>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 bg-[#F9F1E7] p-6 rounded-lg">
                {heading && <h2 className="text-2xl font-bold text-gray-800">Our Products</h2>}

                {/* Filter & Sort Controls */}
                <div className="flex flex-wrap items-center gap-4">
                    {/* Category Filter */}
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-600" />
                        <select
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-white border border-gray-300 p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#B88E2F]"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price Sort */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">Sort by:</span>
                        <select
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="bg-white border border-gray-300 p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#B88E2F]"
                        >
                            <option value="">Default</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {displayedItems?.length > 0 ? (
                    displayedItems.map((product) => (
                        <div key={product.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                            {/* ... (Baki product card ka JSX jo aapne pehle likha tha) ... */}
                            <div className="relative flex justify-center items-center h-60 bg-gray-100 overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-[70%] h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 flex flex-col grow">
                                <h3 className="font-bold text-lg text-gray-800 line-clamp-1 mb-2">{product.title}</h3>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                    <button onClick={() => onaddtocartHandler(product)} className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg">
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-gray-500">No products found in this category.</div>
                )}
            </div>

            {button && displayedItems.length > 0 && (
                <div className="flex justify-center mt-12">
                    <button onClick={onclickhandler} className="border-2 border-[#B88E2F] text-[#B88E2F] px-16 py-3 font-semibold hover:bg-[#B88E2F] hover:text-white transition-all duration-300 rounded-md">
                        {currentlimit === null ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </section>
    );
}
