import { BookUser, Phone, Clock } from "lucide-react";
import { useState } from "react";

function ContactForm() {
    const contactData = [
        {
            id: 1,
            icon: BookUser,
            title: "Address",
            content: "236 5th SE Avenue, New\nYork NY10000, United\nStates"
        },
        {
            id: 2,
            icon: Phone,
            title: "Phone",
            content: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789"
        },
        {
            id: 3,
            icon: Clock,
            title: "Working Time",
            content: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00"
        }
    ];

    const [input, setInput] = useState({
        name: "",
        email: "",
        sub: "",
        msg: ""
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const onsubmitHandler = (e) => {
        e.preventDefault();
        console.log(input);
        setInput({
            name: "",
            email: "",
            sub: "",
            msg: ""
        })
    }

    return (
        <section className="font-poppins px-4 py-10 md:py-20">
            {/* Header Text */}
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold">Get In Touch With Us</h2>
                <p className="max-w-xl mx-auto text-sm md:text-base text-gray-500 mt-2 px-2">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                </p>
            </div>

            {/* Main Content: Column on Mobile, Row on Desktop */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-10">

                {/* Left Side: Contact Info */}
                <div className="flex flex-col gap-10 w-full md:w-[35%] px-2">
                    {contactData.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.id} className="flex gap-4 sm:gap-6">
                                <div className="mt-1 shrink-0">
                                    <IconComponent size={24} className="text-black" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold text-xl">{item.title}</h2>
                                    <p className="whitespace-pre-line text-sm md:text-base text-gray-600 leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-[55%]">
                    <form onSubmit={onsubmitHandler} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold text-sm">Your name</label>
                            <input
                                className="border border-gray-300 p-3 rounded-lg focus:outline-[#B88E2F] w-full"
                                id="name" name="name" onChange={handleChange} value={input.name} type="text" required placeholder="Abc"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold text-sm">Email address</label>
                            <input
                                className="border border-gray-300 p-3 rounded-lg focus:outline-[#B88E2F] w-full"
                                id="email" name="email" onChange={handleChange} value={input.email} type="email" required placeholder="Abc@def.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="sub" className="font-semibold text-sm">Subject</label>
                            <input
                                className="border border-gray-300 p-3 rounded-lg focus:outline-[#B88E2F] w-full"
                                id="sub" name="sub" onChange={handleChange} value={input.sub} type="text" placeholder="This is an optional"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="msg" className="font-semibold text-sm">Message</label>
                            <textarea
                                className="border border-gray-300 p-3 rounded-lg focus:outline-[#B88E2F] w-full min-h-[120px]"
                                id="msg" name="msg" onChange={handleChange} value={input.msg} required placeholder="Hi! i'd like to ask about"
                            />
                        </div>

                        <button className="bg-[#B88E2F] text-white py-3 px-14 rounded-md font-semibold self-start hover:bg-[#967324] transition-all w-full sm:w-auto">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
