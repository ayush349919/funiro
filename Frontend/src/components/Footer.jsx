import { CheckCheck } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

export default function Footer() {
    const [data, setData] = useState({ email: "" })

    const handleChange = (e) => {
        setData({ email: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Subscribed", {
            icon: <CheckCheck />,
            style: {
                backgroundColor: "#B88E2F", // Changed to match your brand gold
                color: "white"
            }
        })
    }

    return (
        <section className="dark:bg-black transition-colors duration-300">
            {/* Added dark:border-gray-800 to soften the lines in dark mode */}
            <div className="border-s border-t shadow-xl border-footer dark:border-gray-800 md:ms-15 mt-10">
                <footer className="footer flex flex-col md:flex-row justify-around bg-white dark:bg-black text-black dark:text-white p-6 md:p-10 font-poppins gap-10">
                    <aside className="gap-10">
                        <h3 className="text-3xl font-bold">Funiro</h3>
                        {/* text-footer is your gray color, which works well in both modes */}
                        <p className="text-footer mt-4">
                            400 University Drive Suite 200 Coral <br />
                            Gables, <br />
                            FL 33134 USA
                        </p>
                    </aside>

                    <div className="grid grid-cols-2 gap-10 md:flex md:flex-row md:gap-20">
                        <nav className="flex flex-col gap-6">
                            <h6 className="footer-title text-footer uppercase text-sm font-semibold opacity-60">Links</h6>
                            <Link to="/" className="link link-hover font-medium hover:text-[#B88E2F]">Home</Link>
                            <Link to='/shop' className="link link-hover font-medium hover:text-[#B88E2F]">Shop</Link>
                            <Link to='/about' className="link link-hover font-medium hover:text-[#B88E2F]">About</Link>
                            <Link to='/contact' className="link link-hover font-medium hover:text-[#B88E2F]">Contact</Link>
                        </nav>
                        <nav className="flex flex-col gap-6">
                            <h6 className="footer-title text-footer uppercase text-sm font-semibold opacity-60">Help</h6>
                            <a className="link link-hover font-medium hover:text-[#B88E2F]">Payment Options</a>
                            <a className="link link-hover font-medium hover:text-[#B88E2F]">Returns</a>
                            <a className="link link-hover font-medium hover:text-[#B88E2F]">Privacy Policies</a>
                        </nav>
                    </div>

                    <nav>
                        <h6 className="footer-title text-footer uppercase text-sm font-semibold opacity-60 mb-6">Newsletter</h6>
                        <div>
                            <form onSubmit={handleSubmit} className="gap-4 flex flex-wrap sm:flex-nowrap">
                                <input
                                    value={data.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="border-b border-black dark:border-white bg-transparent focus:outline-0 text-sm pb-1 w-full sm:w-auto dark:text-white"
                                    placeholder="Enter Your Email Address"
                                />
                                <button type="submit" className="border-b border-black dark:border-white uppercase font-medium pb-1 hover:text-[#B88E2F] transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </nav>
                </footer>

                <div className="border-t border-footer dark:border-gray-800 bg-white dark:bg-black transition-colors duration-300">
                    <div className="pb-8 md:ms-10 font-poppins text-sm ps-1 pt-10 text-center md:text-left dark:text-gray-400">
                        2023 furino. All rights reserved
                    </div>
                </div>
            </div>
        </section>
    )
}
