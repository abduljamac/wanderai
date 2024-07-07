import React from 'react'
import Link from 'next/link';
import MultiStepForm from './MultiStepForm' 

const WanderAITripBuilder = () => {
    return ( 
        <> 
        <div className="flex justify-center h-500 mt-10 flex flex-col items-center justify-center text-center mb-4 ">
            <div className="bg-white-200 p-8 rounded-lg w-[800px] h-[500px]  ">
                <h1 className="text-2xl font-bold mt-4 mb-2" >WanderAI Trip Builder</h1>
                <h2 className="text-xl mb-7" >Let AI plan your day!</h2>
                <MultiStepForm />
            </div>
        </div>
        </>
    );
}

export default WanderAITripBuilder;