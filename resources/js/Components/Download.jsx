import React from 'react';

const Download = ({typelink}) => {
    return (
        <div className='absolute top-10 sm:top-24 xl:top-14 right-2'>
            <a href={typelink} className="text-black text-sm sm:text-base hover:text-white bg-white hover:bg-black px-5 py-1 rounded-md">
                Télécharger
            </a>
        </div>
    );
};

export default Download;
