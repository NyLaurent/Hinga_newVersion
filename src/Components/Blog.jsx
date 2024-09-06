import React from 'react';
import farm2 from '../assets/cabb.png';
import dairy from '../assets/dairy.png';
import fresh from '../assets/fresh.png';

const Blog = () => {
    const blogs = [
        { id: 1, title: "Listings of seasonal fruits and vegetables with information about their harvest times, taste profiles, and best uses.", image: farm2 },
        { id: 2, title: "Details about milk, cheese, yogurt, and other dairy items, highlighting their freshness and farm-to-table journey.", image: dairy },
        { id: 3, title: "Information about the different cuts and types of meat available, emphasizing humane rearing practices.", image: fresh }
    ];
    
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>
                    Caring is the new market
                </h2>
                <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>
                    The Nextcent blog is the best place to read
                    about the latest membership insights, trends and more. See who's joining the community, read about how our community is increasing their 
                    membership income, and lots more.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {blogs.map(blog => (
                    <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt={blog.title}  className='hover:scale-95 transition-all duration-300'/>
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto relative left-0 right-0 bottom-16
                        
                
                
                
                
                '>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className='flex items-center justify-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                    Read more
                                    <svg 
                                        xmlns='https://www.w3.org/2000/svg'
                                        width="17"
                                        height='11'
                                        viewBox='0 0 17 11'
                                        fill='none'
                                        className='inline-block ml-2'>
                                        <path
                                            d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.63834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                                            stroke="#4CAF4F"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
