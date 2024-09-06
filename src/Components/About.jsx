import React from 'react'
import Farmer from '../assets/farm3.png'
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { BiSolidHandUp } from "react-icons/bi";
const About = () => {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={Farmer} alt="" className='md:w-1/2' />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                    The unseen of spending three years at HINGA
                    </h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
                    Discover the ultimate farming resource with 
                    our comprehensive website. Explore expert tips,
                     innovative techniques, and the latest agricultural
                      news to help your farm thrive. Join a community of 
                      farmers dedicated to
                     sustainable and productive farming practices
                    </p>
                    <button className='btnPrimary'>Learn More</button>
                </div>
            </div>
        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>
                    Helping a local <br />
                    <span className='text-brandPrimary'>business reinvent itself</span>
                    </h2>
                    <p>
                    Discover the ultimate farming resource with 
                    our comprehensive website.
                    </p>
 

                </div>

                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                        <IoMdPeople className='text-brandPrimary w-12 h-auto'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                            <p>Members</p>
                        </div>
                           
                        </div>
                        <div className='flex items-center gap-4'>
                        <FaHandshakeAngle className='text-brandPrimary w-12 h-auto'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>46,456</h4>
                            <p>Clubs</p>
                        </div>
                           
                        </div>
                        
                    </div>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                        <BiSolidHandUp className='text-brandPrimary w-12 h-auto'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>828,453</h4>
                            <p>Bookings</p>
                        </div>
                           
                        </div>
                        <div className='flex items-center gap-4'>
                        <MdPayments className='text-brandPrimary w-12 h-auto'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>8,245,341</h4>
                            <p>Payments</p>
                        </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About