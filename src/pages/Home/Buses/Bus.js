import React from 'react';
import { Link } from 'react-router-dom';
import './Bus.css'

const Bus = ({ bus }) => {
    const { _id, picture, name, destination } = bus
    return (
        <div>
            <div className="card bus-card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-red-700">{name}</h2>
                    <h2 className="card-title font-semibold text-green-700"><span className='text-rose-700'>Destination</span> : {destination}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/booking/${_id}`}><button className="btn btn-outline btn-secondary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bus;