import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
     <motion.div 
     initial = {{opacity:0.2 , y:100}}
     transition = {{ duration:1}}
     whileInView={{opacity:1 , y:0}}
     viewport={{once:true}}
     
     className='flex flex-col items-center justify-center my-20 p-12'>
        
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer testimonials</h1>
        <p className='text-gray-500 mb-12' >What Our Users Are Saying</p>

        <div className='flex flex-wrap gap-6'>
            {testimonialsData.map((test,index)=>(

            <div className=' bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer  hover:scale-[1.02] transition-all duration-300 '>

                <div className=' flex flex-col items-center'>
                <img src={test.image} alt="" className='rounded-full w-14' />
                <h2 className='text-xl font-semibold mt-3'>{test.name}</h2>
                <p className='text-gray-500 mb-4'>{test.role}</p>
                 <div className='flex
                  mb-4 gap-1'>  
                    {Array(test.stars).fill(
                    <img src={assets.rating_star}alt="" />
                    )}
                 </div>

                 <p className='text-center text-sm text-gray-600'>{test.text}</p>
                </div>
              
            </div>
            ))}
        </div>


     </motion.div>

    // <div className='flex gap-4 justify-center  items-center rounded-lg mb-4'>
    //  {
    //  testimonialsData.map((test,index)=>(

    //     <div className="border-2 p-4 rounded-lg flex flex-col items-center text-center gap-2">
    //     <img src={test.image} alt={test.name} className="w-24 h-24 rounded-full object-cover" />
    //     <h1 className="text-lg font-semibold">{test.name}</h1>
    //     <h2 className="text-md text-gray-600">{test.role}</h2>
    //     <h3 className="text-yellow-500">{test.stars} ⭐</h3>
    //     <p className="text-sm text-gray-700">{test.text}</p>
    //   </div>
      
    //  ))
    //  }
    // </div>
  )
}

export default Testimonials
