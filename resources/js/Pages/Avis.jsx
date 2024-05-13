import React from 'react';
import check from '../../../public/assets/check.gif';

const Avis = () => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2">
            <h3 className='text-xl md:text-2xl text-center'>Avis enregistré avec succès!</h3>
            <img className='pointer-events-none' src={check} alt="chexk-gif" />
        </div>
    );
};

export default Avis;
