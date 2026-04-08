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
        if (selectedCategory !== "All") {
            list = list.filter(item => item.category === selectedCategory);
        }
        if (sortOrder === "low-to-high") {
            list.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-to-low") {
            list.sort((a, b) => b.price - a.price);
        }
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
        <section className="container mx-auto px-2 sm:px-4 py-8 md:py-12 font-poppins">
            {/* Filter Bar: Stacked on very small screens, row on medium */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 gap-4 bg-[#F9F1E7] p-4 md:p-6 rounded-lg">
                {heading && <h2 className="text-xl md:text-2xl font-bold text-gray-800">Our Products</h2>}

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    {/* Category Filter */}
                    <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
                        <Filter className="w-4 h-4 text-gray-600 shrink-0" />
                        <select
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-white border border-gray-300 p-1.5 md:p-2 rounded-md text-xs md:text-sm outline-none w-full"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price Sort */}
                    <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
                        <span className="text-xs md:text-sm font-medium text-gray-600 shrink-0">Sort:</span>
                        <select
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="bg-white border border-gray-300 p-1.5 md:p-2 rounded-md text-xs md:text-sm outline-none w-full"
                        >
                            <option value="">Default</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid Container: 1 column for < 640px, then 2, 3, 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {displayedItems?.length > 0 ? (
                    displayedItems.map((product) => (
                        <div key={product.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col mx-auto w-full max-w-[320px] sm:max-w-none">

                            <div className="relative flex justify-center items-center h-48 md:h-60 bg-gray-100 overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-[60%] md:w-[70%] h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-3 md:p-5 flex flex-col grow">
                                <div className="flex justify-between items-start mb-2 gap-1">
                                    <h3 className="font-bold text-sm md:text-lg text-gray-800 line-clamp-1">{product.title}</h3>
                                    <div className="flex items-center text-yellow-500 text-xs shrink-0">
                                        <Star className="w-3 h-3 fill-current mr-0.5" />
                                        {product.rating}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-2">
                                    <span className="text-lg md:text-2xl font-bold text-gray-900">${product.price}</span>
                                    <button
                                        onClick={() => onaddtocartHandler(product)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-90 shadow-md active:shadow-inner"
                                    >
                                        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-gray-500 text-sm">No products found.</div>
                )}
            </div>

            {button && displayedItems.length > 0 && (
                <div className="flex justify-center mt-8 md:mt-12">
                    <button
                        onClick={onclickhandler}
                        className="border-2 border-[#B88E2F] text-[#B88E2F] px-8 md:px-16 py-2 md:py-3 text-sm md:text-base font-semibold hover:bg-[#B88E2F] hover:text-white transition-all duration-300 rounded-md"
                    >
                        {currentlimit === null ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </section>
    );
}
