import React from 'react';

const Button = ({ btn, onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={className}
    >
      {btn}
    </button>
  );
}

export default Button;