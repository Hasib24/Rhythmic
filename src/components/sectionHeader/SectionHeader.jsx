import React from 'react';

const SectionHeader = ({children}) => {
    return (
        <div className='text-center text-4xl font-semibold my-10'>
            {children}
        </div>
    );
};

export default SectionHeader;