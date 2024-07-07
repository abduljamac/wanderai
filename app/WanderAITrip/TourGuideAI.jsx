"use client"

import React, { useState } from 'react'
import Select from 'react-select'
import Link from 'next/link';

const TourGuideAI = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);


    let options =
    [
        { label: "British Accent", value:"British Accen"},
        { label: "Funny", value:"Funny"},
        { label: "Informative" , value:"Informative"}
    ]

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
      };

    return ( 
        <>
        <form>

            <label>
                <div>How do you like your tour guide?</div>
                <Select
                     isMulti
                     value={selectedOptions}
                     onChange={handleChange}
                     options={options}

                    className="mt-1 block mx-auto w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm max-w-md"
                   />
            </label>
        </form>
        </>
    );
}

export default TourGuideAI;