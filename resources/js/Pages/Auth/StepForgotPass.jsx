import React from 'react';

const StepForgotPass = () => {


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Forgot Password Step</h1>
            <div className='flex flex-col gap-5'>
                <div className='rounded-lg p-1 border-2 border-black hover:bg-gray-400'>
                    <a href="/reset-password/{token}">Changer de mot de passe</a>
                </div>
                <div className='rounded-lg p-1 border-2 border-black hover:bg-gray-400'>
                    <a href="/forgot-password">Recevoir un code par mail</a>
                </div>
            </div>
        </div>
    );
};

export default StepForgotPass;
