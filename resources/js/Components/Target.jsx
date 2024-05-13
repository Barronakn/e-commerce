import React from 'react';
import target from "../../../public/assets/icon/target.svg"

const Target = () => {
    return (
        <div className='flex flex-row gap-3 my-2'>
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={target} alt="target-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={target} alt="target-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={target} alt="target-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={target} alt="target-icon" />
            <img loading='lazy' className='cursor-pointer max-w-full w-5 h-5' src={target} alt="target-icon" />
        </div>
    );
};


export default Target;
