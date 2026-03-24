import React from 'react';

const Section = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-800 flex items-center justify-center'>
      {children}
    </div>
  );
};

export default Section;