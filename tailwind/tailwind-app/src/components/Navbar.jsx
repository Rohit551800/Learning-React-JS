import React from 'react'
import Button from '../utility/Button'

const Navbar = () => {
    return (
        <>
            <nav className='bg-black text-white flex justify-between px-28 py-6'>
                <div className="text-amber-700">
                    <h2 className='text-2xl'>Logo</h2>
                </div>

                <div className="flex gap-20">
                    <ul className='flex gap-20'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Sign Up</li>
                    </ul>

                    <div>
                        <Button btn="Login" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar