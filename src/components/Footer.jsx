import { useState } from "react"
import { Link } from "react-router-dom"

export default function Footer() {
    const [data, setData] = useState({ email: "" })

    const handleChange = (e) => {
        setData({ email: e.target.value }) // Fix: Object update
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }
    return (
        <>
            <section>
                {/* ms-0 on mobile, ms-15 on desktop */}
                <div className="border-s border-t shadow-xl border-footer md:ms-15 mt-10">
                    {/* flex-col on mobile, flex-row (justify-around) on desktop */}
                    <footer className="footer flex flex-col md:flex-row justify-around bg-base-100 text-base-content p-6 md:p-10 font-poppins gap-10">
                        <aside className="gap-10">
                            <h3 className="text-3xl font-bold">Funiro</h3>
                            <p className="text-footer">
                                400 University Drive Suite 200 Coral <br />
                                Gables, <br />
                                FL 33134 USA
                            </p>
                        </aside>
                        
                        {/* Grid for Links and Help on small screens */}
                        <div className="grid grid-cols-2 gap-10 md:flex md:flex-row md:gap-20">
                            <nav className="flex flex-col gap-6">
                                <h6 className="footer-title text-footer uppercase text-sm font-semibold opacity-50">Links</h6>
                                <Link to="/" className="link link-hover font-medium">Home</Link>
                                <Link to='/shop' className="link link-hover font-medium">Shop</Link>
                                <Link to='/about' className="link link-hover font-medium">About</Link>
                                <Link to='/contact' className="link link-hover font-medium">Contact</Link>
                            </nav>
                            <nav className="flex flex-col gap-6">
                                <h6 className="footer-title text-footer uppercase text-sm font-semibold opacity-50">Help</h6>
                                <a className="link link-hover font-medium">Payment Options</a>
                                <a className="link link-hover font-medium">Returns</a>
                                <a className="link link-hover font-medium">Privacy Policies</a>
                            </nav>
                        </div>

                        <nav>
                            <h6 className="footer-title text-footer uppercase text-sm font-semibold opacity-50 mb-6">Newsletter</h6>
                            <div>
                                <form onSubmit={handleSubmit} className="gap-4 flex flex-wrap sm:flex-nowrap">
                                    <input value={data.email} onChange={handleChange} type="email" className="border-b focus:outline-0 text-sm pb-1 w-full sm:w-auto" placeholder="Enter Your Email Address" />
                                    <button type="submit" className="border-b uppercase font-medium pb-1">Subscribe</button>
                                </form>
                            </div>
                        </nav>
                    </footer>

                    <div>
                        {/* ms-0 on mobile, ms-10 on desktop */}
                        <div className="border-t border-footer pb-8 md:ms-10 font-poppins text-sm ps-1 pt-10 text-center md:text-left">
                            2023 furino. All rights reserved
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
