import React from 'react'

export default function Contact() {

    function message(e) {
        e.preventDefault();
        alert(`Message sent 🚀`)
        console.log('message sent');

    }




    return (
        <>
            <div className='text-center my-15'>
                <h1 className='text-5xl font-bold my-4'>Let’s Talk</h1>
                <p className='md:text-xl my-2'>Have questions or feedback? Our team is here to help you.</p>
                <p className='text-xl my-2'>📍 Mumbai, India</p>
                <p className='text-xl my-2' >📧 support@shop.com</p>
                <p className='text-xl my-2'>📞 +91 9876543210</p>
            </div>



            <form onSubmit={message} className="max-w-xl mx-auto my-15">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Name</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="message" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Message</label>
                </div>

                <button type="submit" className="text-white cursor-pointer bg-black rounded-2xl bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-6 py-2.5 focus:outline-none">Submit</button>

            </form>







        </>
    )
}
