"use client"

import React, { useState } from 'react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button
                onClick={handleModal}
                className='border-2 border-white rounded-md p-2 hover:bg-gray-900'>
                Open Modal
            </button>

            {
                isOpen ?
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='bg-white text-black w-72 h-60 absolute flex justify-center items-center flex-col gap-6'>
                            Modal
                            <button
                                onClick={handleModal}
                                className='border-2 border-black rounded-md p-2'>
                                Close
                            </button>
                        </div>
                    </div> : ""
            }
        </div>
    )
}

export default Modal