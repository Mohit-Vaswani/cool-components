"use client"

import {useState} from 'react'

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);


    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    return (
        <div className='text-center'>
            <button onClick={handleClick} className={`border-2 border-white p-1 px-3 mb-3 ${isToggled ? "bg-red-600" : "bg-blue-600" }`}>
                Toggle
            </button>
            {
                isToggled ? 
                <h2>Toggle is Off</h2> : 
                <h2>Toggle is On </h2>
            }
        </div>
    )
}

export default Toggle