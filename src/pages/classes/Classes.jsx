import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import ClassCard from './ClassCard';

const Classes = () => {
    return (
        <section className='container mx-auto'>
            <SectionHeader>All Classes</SectionHeader>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 py-10'>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
            </div>
        </section>
    );
};

export default Classes;