import { useState } from "react"
import { Link } from "react-router-dom"
export default function Footer() {
    const [data, setData] = useState({ email: "" })

    const handleChange = (e) => {
        setData(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }
    return (
        <>
            <section>
                <div className="border-s border-t shadow-xl border-footer ms-15 mt-10">
                    <footer className="footer flex justify-around sm:footer-horizontal bg-base-100 text-base-content p-10 font-poppins">
                        <aside className="gap-10">
                            <h3 className="text-3xl font-bold">Funiro</h3>
                            <p className="text-footer">
                                400 University Drive Suite 200 Coral <br />
                                Gables, <br />
                                FL 33134 USA
                            </p>
                        </aside>
                        <nav className="flex flex-col gap-6">
                            <h6 className="footer-title text-footer">Links</h6>
                            <Link to="/" className="link link-hover font-medium">Home</Link>
                            <Link to='/shop' className="link link-hover font-medium">Shop</Link>
                            <Link to='/about' className="link link-hover font-medium">About</Link>
                            <Link to='/contact' className="link link-hover font-medium">Contact</Link>
                        </nav>
                        <nav className="flex flex-col gap-6">
                            <h6 className="footer-title text-footer">Help</h6>
                            <a className="link link-hover font-medium">Payment Options</a>
                            <a className="link link-hover font-medium">Returns</a>
                            <a className="link link-hover font-medium">Privacy Policies</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-footer">Newsletter</h6>
                            <div >
                                <form onSubmit={handleSubmit} className="gap-4 flex">
                                    <input value={data.email} onChange={handleChange} type="email" className="border-b focus:outline-0 text-sm" placeholder="Enter Your Email Address" />
                                    <button type="submit" className="border-b uppercase font-medium">Subscribe</button>
                                </form>
                            </div>
                        </nav>
                    </footer>

                    <div>
                        <div className="border-t border-footer pb-8 ms-10 font-poppins text-sm ps-1 pt-10">
                            2023 furino. All rights reverved
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}