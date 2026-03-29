import { useNavigate } from 'react-router-dom';
import Explore from './Explore';

const Travel = () => {
  const destinations = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHR8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e"
    }
  ];
  console.log(destinations);

  const navigate = useNavigate()
  return (
    <>
      <div className='border-t border-white flex justify-between'>

        {/* Left Side Heading */}
        <div className='min-h-150 m-5 max-w-xs'>
          <h2 className='font-bold font-serif pt-5 text-4xl m-2 cursor-pointer'>
            Explore Your Dream Destination
          </h2>
        </div>

        {/* Right Side Cards */}
        <div className="bg-black/50 w-full m-2 rounded-4xl flex overflow-x-scroll gap-6 no-scrollbar p-5">

          {destinations.map((item) => (
            <div
              key={item.id}
              className="relative min-w-50 h-60 rounded-3xl overflow-hidden 
                         cursor-pointer transition duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                className="h-full w-full object-cover rounded-3xl"
                src={item.img}
                alt=""
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition duration-300"></div>

              {/* Button */}
              <button onClick={()=>{
                 navigate('/Explore')
              }} className="absolute bottom-4 left-4 bg-indigo-600 hover:bg-indigo-700 
                                 text-white px-4 py-2 rounded-xl transition duration-300">
                Explore
              </button>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default Travel