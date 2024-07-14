import React from 'react';
import Carousel from '../../components/carousel/Carousel'; 
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
// Import additional images as needed

const Slider = () => {
    const images = [image1, image2, image3, image4, image5];

    return (
        <section className='container mx-auto py-20 '>
            <Carousel images={images} autoplay={true} loop={true} autoplayDelay={3000} />
        </section>
    );
};

export default Slider;
