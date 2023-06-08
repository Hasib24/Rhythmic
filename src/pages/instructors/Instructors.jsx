import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    return (
        <section className='container mx-auto px-5 md:px-0'>
            <SectionHeader>Our Instractors</SectionHeader>
            <div className='grid md:grid-cols-2 gap-5'>
                <InstructorCard></InstructorCard>
                <InstructorCard></InstructorCard>
                <InstructorCard></InstructorCard>
                <InstructorCard></InstructorCard>
                <InstructorCard></InstructorCard>

                


            </div>
        </section>
    );
};

export default Instructors;