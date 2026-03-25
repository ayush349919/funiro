import { BookUser, Phone, Clock } from "lucide-react"; // Zaroori icons import karein
import { useState } from "react";

function ContactForm() {
    const contactData = [
        {
            id: 1,
            icon: BookUser, // Sirf component ka naam likhein
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
    }
    return (
        <>
            <section className="font-poppins">
                <div>
                    <div className="text-center mt-10">
                        <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
                        <p className="max-w-xl m-auto text-sm text-footer">
                            For More Information About Our Product & Services...
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl m-auto mt-10 flex justify-center gap-5">
                    <div className="flex flex-col gap-6">
                        {contactData.map((item) => {
                            // Icon ko variable mein assign karein (Capital letter se)
                            const IconComponent = item.icon;

                            return (
                                <div key={item.id} className="flex gap-4">
                                    {/* Icon yahan render hoga */}
                                    <div className="mt-1">
                                        <IconComponent size={24} className="text-black" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="font-medium text-xl">{item.title}</h2>
                                        <p className="whitespace-pre-line text-sm">{item.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <form onSubmit={onsubmitHandler} className="flex flex-col gap-4 ml-10">
                            <label htmlFor="name">Your name</label>
                            <input className="border p-2" id="name" name="name" onChange={handleChange} value={input.name} type="text" />

                            <label htmlFor="email">Email address</label>
                            <input className="border p-2" id="email" name="email" onChange={handleChange} value={input.email} type="text" />

                            <label htmlFor="sub">Subject</label>
                            <input className="border p-2" id="sub" name="sub" onChange={handleChange} value={input.sub} type="text" />

                            <label htmlFor="msg">Message</label>
                            <textarea className="border p-2" id="msg" name="msg" onChange={handleChange} value={input.msg} />

                            <button className="bg-normal text-white p-2 mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactForm;
