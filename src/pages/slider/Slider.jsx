import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Slider = () => {
    return (
        <section>

            <div className='container mx-auto border'>

                <Carousel autoPlay interval={3000} infiniteLoop>
                    <div>
                        <img className='h-[100%] object-cover w-1/2' src="https://img.freepik.com/free-photo/acoustic-guitar-chair-close-up-brown-guitar-black-wall_1150-21884.jpg?w=740&t=st=1686157880~exp=1686158480~hmac=1a623ac4620ea901c752598e9e5c84da34646a2ee942cbd464dfc372221b8728" />
                    </div>
                    <div>
                        <img className='h-[100%] object-cover w-1/2' src="https://img.freepik.com/free-photo/acoustic-guitar-chair-close-up-brown-guitar-black-wall_1150-21884.jpg?w=740&t=st=1686157880~exp=1686158480~hmac=1a623ac4620ea901c752598e9e5c84da34646a2ee942cbd464dfc372221b8728" />
                    </div>
                    <div>
                        <img className='h-[100%] object-cover w-1/2' src="https://img.freepik.com/free-photo/acoustic-guitar-chair-close-up-brown-guitar-black-wall_1150-21884.jpg?w=740&t=st=1686157880~exp=1686158480~hmac=1a623ac4620ea901c752598e9e5c84da34646a2ee942cbd464dfc372221b8728" />
                    </div>
                    
                </Carousel>
            </div>
        </section>
    );
};

export default Slider;