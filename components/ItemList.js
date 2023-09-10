"use client"

import React, { useState } from 'react'; // Import React
import ItemData from '@/data/componentsDate'; // Import your data


export default function ItemList() {
    const [addUser, setAddUser] = useState('');
    const [ItemData, setItemData] = useState([]);

    const handleSubmit = (e) =>{ 
        e.preventDefault();

        if(addUser.trim() !== ''){
            setItemData([...ItemData, addUser]);
            setAddUser('');
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className='bg-transparent border-2 border-white outline-none px-2' 
                value={addUser}
                onChange={e => setAddUser(e.target.value)}
                />
                <button 
                type='submit'
                className="border-2 border-green-500 bg-green-500 ml-2 p-1 text-xs">Add User</button>
            </form>
            <ul className="">
                {ItemData.map((item, index) => (
                    <li className='hover:underline hover:cursor-pointer' key={index}>{"> " + item}</li>
                ))}
            </ul>
        </div>
    );
}
