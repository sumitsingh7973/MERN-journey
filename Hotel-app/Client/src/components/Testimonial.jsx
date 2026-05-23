// // import React from 'react'
// import Title from './Title'

// const Testimonial = () => {
//     return (
//         <div className='flex flex-col items-center mt-10 px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30 '>
//             <Title title="What Our Guests Say" subTitle=" Discover why discerning travelers consistently choose Quickstay for their exclusive and luxurious accomodations around the world" />
//         </div>
//     )
// }

// export default Testimonial
import { testimonials } from "../assets/assets"
const  Testimonial = () => {

    
    
    const columns = [
        { start: 0, end: 4, className: "animate-scroll-up-1" },
        { start: 4, end: 8, className: "hidden md:block animate-scroll-up-2" },
        { start: 8, end: 12, className: "hidden lg:block animate-scroll-up-3" }
    ]

    const renderCard = (testimonial, index) => (
        <div key={`${testimonial.id}-${index}`} className="bg-linear-to-b from-[#020204] to-[#191130] border border-slate-800 rounded-xl p-6 mb-4 hover:border-slate-700 transition-all duration-300">
            <div className="mb-5">
                
            </div>
            
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="size-9 rounded-full border border-slate-800" />
                <div>
                    <p className="text-sm text-slate-300">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.address}</p>
                    <p className="text-sm text-slate-500">{testimonial.review}</p>
                </div>
            </div>
            
        </div>
    )

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }

                    @keyframes scroll-up {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(-50%);
                        }
                    }
                    .animate-scroll-up-1 {
                        animation: scroll-up 25s linear infinite;
                    }
                    .animate-scroll-up-2 {
                        animation: scroll-up 30s linear infinite;
                    }
                    .animate-scroll-up-3 {
                        animation: scroll-up 20s linear infinite; 
                    }
                `}
            </style>

            <div className="bg-black flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
                        People love us
                    </h1>
                    <p className="text-sm text-slate-200 max-w-md mx-auto">
                        Beyond Bookings,Unforgettable Journeys Told Through the Voices of Our Beloved Guests
                    </p>
                </div>

                <div className="relative w-full max-w-6xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-150 overflow-hidden">
                        {columns.map((col, colIndex) => (
                            <div key={colIndex} className={col.className}>
                                {[...testimonials.slice(col.start, col.end), ...testimonials.slice(col.start, col.end)].map((testimonial, index) =>
                                    renderCard(testimonial, index)
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial