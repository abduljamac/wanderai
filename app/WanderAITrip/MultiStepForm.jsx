"use client"

import React, { useState } from 'react'
import Select from 'react-select'
import Link from 'next/link';
import Attractions from './Attractions';
import TourGuideAI from './TourGuideAI'


const MultiStepForm = () => {
    const [location, setLocation] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <label>
                <div>Where do you want to go?</div>
                <input 
                    required 
                    type="text" 
                    onChange={(e)=> setLocation(e.target.value)}
                    value={location}
                    className="mt-1 block mx-auto w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm max-w-md"                 />
            </label>
            <Attractions location={location} />
            <TourGuideAI />
        </form>
        </>
    );
}

export default MultiStepForm;