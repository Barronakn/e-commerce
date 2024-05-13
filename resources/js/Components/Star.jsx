import React from 'react';
import star from "../../../public/assets/icon/star.svg"

const Star = () => {
    return (
        <div className='flex flex-row justify-between'>
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={star} alt="star-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={star} alt="star-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={star} alt="star-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={star} alt="star-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={star} alt="star-icon" />
        </div>
    );
};

export default Star;
