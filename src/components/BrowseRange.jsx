import dining from "../assets/bg-1.jpg"
import living from "../assets/bg-2.jpg"
import bedroom from "../assets/bg-3.jpg"

export default function BrowseRange() {
    const categories = [
        {
            name: 'Dining',
            img: dining
        },
        {
            name: 'Living',
            img: living
        },
        {
            name: 'Bedroom',
            img: bedroom
        }
    ]

    return (
        <>
            <section>
                <div className="container m-auto font-poppins mt-14 mb-14">
                    <div className="text-center">
                        <h2 className="font-bold text-2xl ">Browse The Range</h2>
                        <p className="text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="mt-14 flex justify-center gap-4">
                    {categories.map((item) => (
                        <div key={item.name} className="flex min-h-120 max-w-95 flex-col gap-5 text-center font-bold">
                            <img src={item.img} alt={item.name} className="rounded-xl" />
                            {item.name}
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    )
};