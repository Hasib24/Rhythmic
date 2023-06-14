import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Slider = () => {
    return (
        <section>

            <div className='container mx-auto'>

                <Carousel autoPlay interval={2000} infiniteLoop>
                    <div>
                        <img className='h-[100%] object-cover w-1/2' src="https://img.freepik.com/free-photo/string-instruments-close-up-musical-concert-generative-ai_169016-28900.jpg?w=826&t=st=1686746471~exp=1686747071~hmac=e332a86682d63b3d8d6055398c8bf7d4b59a63ac754a2af31087e3e95d992e28" />
                    </div>
                    <div>
                        <img className='h-[100%] object-cover w-1/2' src="https://img.freepik.com/free-photo/digital-mixer-recording-studio-with-computer-recording-music-background-drum-set-musical-instruments-concept-creativity-show-business_169016-15568.jpg?w=740&t=st=1686746548~exp=1686747148~hmac=727ea26ca036029bee094ae68703fd3a2b1e7e511be0554c836d73b193e62d11" />
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