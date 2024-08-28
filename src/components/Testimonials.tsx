import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div>
        <div className="container pt-16 pb-16 grid-cols-2">
            <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                    <div className="text-center flex flex-col items-center gap-1">
                        <Image 
                        className="rounded-full inline-block"
                        src="/Testimonialdp.png"
                        alt="dp"
                        width={80}
                        height={80}
                        
                        />
                        <h2 className="text-gray-500 font-black text-[20px]">Elsa Doe</h2>
                        <p>CEO & Founder Invision</p>
                        <Image
                        className='inline-block py-2'
                        src="/Testimonial2.png"
                        alt="review"
                        width={40}
                        height={40}     
                        />
                        <p className="max-w-[200px] text-gray-500">
                            I like your products which are  so elegant and modern with the satisfying price. I have been a customer for over 6 months now, and they are just the best. So, do not hesitate to shop here.
                        </p>
                        </div>
                </div>
                <div className="bg-red-600 bg-[url(/pinkbanner.png)] bg-cover h-[500px] rounded-2xl grid place-items-center">
                <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                    <button className="bg-blackish text-white p-2 rounded-md">
                        25% Discount
                    </button>
                    <h2 className="font-extrabold text-2xl text-[#272727]">
                        Latest Collection
                    </h2>
                    <p className="text-gray-500 text-[20px]">
                        Starting @ $20 <b>Shop Now</b>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;