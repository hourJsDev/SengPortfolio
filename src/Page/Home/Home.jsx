import React from 'react'
import HomeCarousel from './HomeCarousel'

const Home = () => {
  return (
    <section>
        <nav className='w-[90%] mx-auto mt-[1rem]'> 
            <h1 className='text-[white]'>MINGSENG</h1>

        </nav>
        <div className="center font-bold uppercase text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[white]">
            <h1 className='text-[7rem]'>darkness</h1>
            <p className='text-[2.5rem]'>in the color of light</p>
        </div>
        <HomeCarousel/>
    </section>
  )
}

export default Home
