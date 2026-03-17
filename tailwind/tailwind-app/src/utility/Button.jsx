import React from 'react'

const Button = ({btn}) => {
  return (
    <>
        <button id='btn' className="bg-blue-600 px-4 py-1 rounded-2xl">
        {btn}
        </button>
    </>
  )
}

export default Button