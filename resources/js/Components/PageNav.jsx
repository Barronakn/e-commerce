import React from 'react';

const PageNav = ({link, linkName}) => {
    return (
        <div className='flex flex-row gap-1 bg-white p-2'>
            <a className='text-blue-500 hover:underline' href="/">Accueil</a>
            <span> &gt; </span>
            <a className='hover:underline' href={link}>{linkName}</a>
        </div>
    );
};

export default PageNav;
