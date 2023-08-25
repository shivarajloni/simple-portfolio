import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text4xl sm:text-7xl font-bold text-white'>Hey! I'm<br/>SHIVARAJ LONI</h2>
                    {/* <h3>I like
							<span class="txt-rotate" data-period="2000"
								data-rotate='[ "Coding.", "Software Development", "Problem Solving.", "travel film-making.", "Books."]'></span>
				    </h3> */}
                <p className='text-gray-500 py-2 max-w-md'>I'm Software Engineer & self-learning technology Enthusiast, having good Knowledge of Data-structure, Object-Oriented Programming concepts, analytical & communication skill. As Software Developer having good understanding of Front-End & Back-End Technologies & applications with tools & projects developed.</p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-500'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span> 
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 ' />
            </div>
        </div>
    </div>
  )
}

export default Home
