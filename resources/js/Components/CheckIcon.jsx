import React from 'react';
import check from '../../../public/assets/check.svg';

const CheckIcon = () => {
    return (
        <div>
            <img className='w-8 h-8 pointer-events-none' src={check} alt="delete-svg" />
        </div>
    );
};

export default CheckIcon;
