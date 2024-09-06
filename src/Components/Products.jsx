import React from 'react'
import Farmer from '../assets/farm4.png'

const Products = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-2'>
                <div>
                    <img src={Farmer} alt="" className='md:w-1/2' />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-brandPrimary font-semibold mb-4 md:w-4/5'>
                    Fresh From Our Fields to Your Table – Quality You Can Taste!
                    </h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
                    The product section is designed to be an engaging and informative part of the website,
                     encouraging visitors to explore the wide variety of farm products available. By providing
                      detailed information, beautiful imagery, and easy ordering options,
                    this section aims to enhance the customer experience and drive sales.
                    </p>
                    <button className='btnPrimary'>Learn More</button>
                </div>
            </div>
        </div>)
}

export default Products