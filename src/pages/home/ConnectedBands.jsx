import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import Marquee from 'react-fast-marquee';

const ConnectedBands = () => {
    return (
        <section>
            <SectionHeader>Connected Music Bands</SectionHeader>
            <Marquee speed={30}>
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/illustration-creative-ideas-concept-icon_53876-7971.jpg?w=740&t=st=1684586049~exp=1684586649~hmac=4e3ffc6a671659da587c341d15aa19a7410bfd308ca327227a113b7e981b740a" alt="" />
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/business-logo-template-minimal-branding-design-vector_53876-136228.jpg?t=st=1684586034~exp=1684586634~hmac=72a66d1a2f56a53b16087aabcac2f34a557ce672d2d0de28e05c2762c07571e4" alt="" />
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/geometric-triangle-logo_1043-89.jpg?w=740&t=st=1684680289~exp=1684680889~hmac=51ceee93f76a2e15e930d0d4e9cfbb8622d2799b3b83f8d69f7a79ce071d1443" alt="" />
                <img className='h-40 mx-4' src="https://cdn-icons-png.flaticon.com/512/524/524233.png?w=740&t=st=1684680371~exp=1684680971~hmac=6453c0ebdb0b18434795f7b236d664c1a70fe987cc79e9583e717a63f233ee92" alt="" />
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/illustration-marketing-banner_53876-7966.jpg?w=740&t=st=1684680407~exp=1684681007~hmac=649c6b13b6a341ab2d88380818378e18072d21b3034be4a99e0c10d5784feb16" alt="" />
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/premium-quality_23-2147502658.jpg?w=740&t=st=1684680457~exp=1684681057~hmac=2dead3ce00cb15ebfd6fcade16919a523693a3ac543fab1fc0c3d71ab672b59e" alt="" />
                <img className='h-40 mx-4' src="https://img.freepik.com/free-vector/retro-gangster-mafia-logo-with-skull_23-2148460666.jpg?w=740&t=st=1684680474~exp=1684681074~hmac=2e7dcb4a2839e4733896fb0098d4cd01d47efd0421ad88497f3459d3f60c58b4" alt="" />
            </Marquee>
        </section>
    );
};

export default ConnectedBands;