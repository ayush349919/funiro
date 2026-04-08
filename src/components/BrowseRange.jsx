import dining from "../assets/bg-1.jpg"
import living from "../assets/bg-2.jpg"
import bedroom from "../assets/bg-3.jpg"

export default function BrowseRange() {
    const categories = [
        { name: 'Dining', img: dining },
        { name: 'Living', img: living },
        { name: 'Bedroom', img: bedroom }
    ]

    return (
        <section className="px-4">
            <div className="container mx-auto font-poppins mt-10 md:mt-14 mb-10 md:mb-14">
                {/* Header Text */}
                <div className="text-center px-4">
                    <h2 className="font-bold text-2xl md:text-3xl">Browse The Range</h2>
                    <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* Categories Grid: Mobile par vertical, Tablet/Desktop par horizontal */}
                <div className="mt-10 md:mt-14 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 lg:gap-6">
                    {categories.map((item) => (
                        <div key={item.name} className="flex flex-col gap-5 text-center font-bold w-full max-w-[380px]">
                            <div className="overflow-hidden rounded-xl h-[350px] md:h-[480px]">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span className="text-lg md:text-xl text-gray-800">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
