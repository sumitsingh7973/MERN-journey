import React from 'react'
const Home = () => {
    return (
        <>
            <div className='border-t border-white flex justify-between'>
                <div className='min-h-150 m-5 max-w-xs'>
                    <h2 className='font-bold font-serif pt-5 text-4xl transition duration-300 hover:scale-105' >This is Website Which i've Created</h2>
                    <p className='text-gray-200 leading-10 font-serif text-lg mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, repudiandae rerum? Rerum nihil nam, quisquam dignissimos fuga quasi tempore obcaecati omnis. Aperiam possimus placeat sequi?</p>
                </div>
                <div className="bg-cover bg-black/50 ">
                        <h1 className='ml-50 text-gray-700 transition duration-300 hover:scale-105 active:text-white
                        '>Welcome to the New Era</h1>
                </div>
            </div>
        </>
       

    )
}

export default Home
