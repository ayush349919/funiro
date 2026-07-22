import { Link } from "react-router-dom";

export default function Paynow() {
    return (
        <div className="flex justify-center items-center p-4 transition-colors duration-300">
            <Link to="/checkout" className="w-full max-w-xs">
               
                <button className="w-full bg-normal hover:bg-[#967324] dark:hover:bg-[#d4a744] text-white font-bold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95 uppercase tracking-widest text-sm outline-none">
                    Pay Now
                </button>
            </Link>
        </div>
    );
}
