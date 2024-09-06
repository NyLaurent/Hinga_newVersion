import React from 'react'

const news = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                Quality You Can Taste!
                </h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='btnPrimary'>Get a Demo</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default news