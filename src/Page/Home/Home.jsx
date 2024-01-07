import React from 'react'
import HomeCarousel from './HomeCarousel'

const Home = () => {
  return (
    <section>
        <nav className='w-[90%] mx-auto mt-[1rem]'> 
            <h1 className='text-[white] text-[1.3rem]'>MINGSENG</h1>

        </nav>
        <div className="center font-bold uppercase text-center absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[white]">
            <h1 className='text-[7rem] max-md:text-[3rem]'>darkness</h1>
            <p className='text-[2.5rem] max-md:text-[1rem]'>in the color of light</p>
        </div>
        <HomeCarousel/>
        <div className='text-[white] max-md:text-[.6rem] max-md:top-[50%] max-md:-rotate-90 max-md:w-[20rem] max-md:-left-[8rem] uppercase text-[.8rem] items-center absolute top-[50%] -left-[10%] -rotate-90 flex w-[30rem] justify-between'>
            <div className='flex flex-col items-center'>
                <p>selected</p>
                <p>works</p>
            </div>
            <p>@2023</p>
        </div>
    </section>
  )
}

export default Home
