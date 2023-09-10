import React from 'react';
import Link from 'next/link';

const Back = () => {
    return (
        <div className='absolute top-0 left-0 m-6'>
            <Link href="/">
                <p>Back</p>
            </Link>
        </div>
    )
}

export default Back