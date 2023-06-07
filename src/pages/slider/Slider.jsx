import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Slider = () => {
    return (
        <section>

            <div className='container mx-auto h-[90vh] border'>

                <Carousel autoPlay={true} interval={700}>
                    <div>
                        <img className='' src="https://images.pexels.com/photos/2692080/pexels-photo-2692080.jpeg?auto=compress&cs=tinysrgb&w=600" />

                    </div>
                    
                </Carousel>
            </div>
        </section>
    );
};

export default Slider;