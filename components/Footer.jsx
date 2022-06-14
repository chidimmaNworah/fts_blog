import React from 'react'
import FooterItems from './FooterItems'
import SocialIcons from './SocialIcons'
import {Icons} from './Menus'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#005ACC] py-7">
            <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                <span className="text-pink-600"> JOIN OUR NEWSLETTER</span>
            </h1>
            <div>
                <input type="text" placeholder='Enter Your Name' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                <input type="email" placeholder='Enter Your Email' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                <button className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-meduim rounded-full text-white px-8 py-3 cursor-pointer">
                    Sign Up
                </button>
            </div>
        </div>
        <FooterItems />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
            <span>© 2022 Appy. All rights reserved.</span>
            <span>Terms . Privacy Policy</span>
            <SocialIcons Icons ={Icons} />
        </div>
    </footer>
  )
}

export default Footer