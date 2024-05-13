import React from 'react';
import remove from '../../../public/assets/delete.svg';

const DeleteIcon = () => {
    return (
        <div>
            <img className='w-8 h-8 pointer-events-none' src={remove} alt="delete-svg" />
        </div>
    );
};

export default DeleteIcon;
