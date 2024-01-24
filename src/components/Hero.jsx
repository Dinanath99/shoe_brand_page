import React from 'react';
const Hero = () => {
    return (
        <main className='hero container'>

            <div className='hero-content'>
                <h1>YOURE FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>



                <div className='hero-button'>
                    <button>Show now</button>
                    <button className='secondary-button'>Category</button>
                </div>

                <div className='shopping'>
                    <p>now available on</p>

                    <div className='brand-icons'>

                        <img src='/images/flipkart.png' alt='flipkart-logo' />
                        <img src='/images/amazon.png' alt='flipkart-logo' />
                    </div>
                </div>


            </div>

            {/* hero image div  */}
            <div className='hero-image'>
                <img src='/images/shoe_image.png' alt='shoeimg' />
            </div>





        </main>

    )
}

export default Hero;