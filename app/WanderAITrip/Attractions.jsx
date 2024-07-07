"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from '@/node_modules/next/navigation';
import Select from 'react-select'
import Link from 'next/link';

const Attractions = ({location}) => {
    const router = useRouter();

    const [attractions, setAttractions] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([]);



    let options =
    [
        { label: "London", value:["London Eye","Buckingham Palace","Westminister Abbey","Downing Street","Lake District"]},
        { label: "New York", value:["Madison Square Garden", "Statue of Liberty","Empire State Building","Niagara Falls"]},
        { label: "Saudia Arabia" , value:["Makkah", "Madinah", "Quba","Safa","Marwa"]}
    ]

    useEffect(() => {
        if(location.length>1){
            // console.log("I am here ", location)
            // console.log('These are the options ', options)
            options.map((place)=> {
                if(place.label === location){
                    // console.log("This is true")
                    const formattedAttractions = place.value.map(attraction => ({ label: attraction, value: attraction }));
                    setAttractions(formattedAttractions)
                    // console.log('These are the attractions ', place.value)
                }
            })
        }
      }, [location]);

      const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
      };


    return ( 
        <>
        <form>
            <label>
                <div>What sights do you plan to visit?</div> 
                {/* Need to add a database that stores all places to visit, so when user enters the location, the user has all the possible attractions to see */}
                {/* I can create a dummy object that contains a list of attractions */}
                <Select
                    isMulti
                    value={selectedOptions}
                    onChange={handleChange}
                    options={attractions}
                    className="mt-1 block mx-auto w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm max-w-md"

                />
            </label>


        </form>
        </>
    );
}

export default Attractions;