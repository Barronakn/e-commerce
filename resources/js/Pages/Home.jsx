import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='fixed flex bg-white justify-around items-center w-full px-10 text-purple-700 py-4'>
                <a className=' hover:text-purple-700' href="/register">Register</a>
                <a className=' hover:text-purple-700' href="/login">Login</a>
            </div>
            <div className="flex items-center justify-between h-screen acceuil px-10">
                <div className='w-1/2'>
                    <h1 className="text-3xl font-bold">Parce que la mode n'as plus de secret.</h1>
                </div>

                <div className='w-1/2'></div>
            </div>
        </div>
    );
};

export default Home;
