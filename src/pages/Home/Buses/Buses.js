import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Bus from './Bus';

const Buses = () => {

    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('https://ticket-booking-wesite-server.vercel.app/buses')
            .then(res => res.json())
            .then(data => setBuses(data))
    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-5xl mb-6'>Our All Service Buses </h1>
            <div className='grid grid-cols-1 gap-4 ml-8 mb-10 md:grid-cols-3'>
                {
                    buses.map(bus => <Bus
                        key={bus._id}
                        bus={bus}
                    ></Bus>)
                }
            </div>
        </div>
    );
};

export default Buses;