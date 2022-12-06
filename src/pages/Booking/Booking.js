import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Booking = () => {
    const data = useLoaderData();
    const { _id, name, destination } = data;

    const { user } = useContext(AuthContext)

    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const CustomerName = `${form.firstName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const journey = `${form.from.value} to ${form.to.value}`;
        const date = form.date.value;

        const booking = {
            bookingId: _id,
            busName: name,
            CustomerName,
            email,
            phone,
            journey,
            date
        }

        fetch('https://ticket-booking-wesite-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Ticket Booked Confirm!')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            <h1 className='text-center font-semibold text-4xl'>Please book your ticket on : <span className='font-bold text-5xl text-rose-700'>{name}</span></h1>

            <section className="p-6 bg-gray-100 my-8 text-gray-900">
                <form onSubmit={handelBooking} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Booking Information</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstName" className="text-sm">First name</label>
                                <input id="firstName" name='firstName' type="text" placeholder="First name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastName" className="text-sm">Last name</label>
                                <input id="lastName" name='lastName' type="text" placeholder="Last name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="phone" className="text-sm">Phone</label>
                                <input id="phone" name='phone' type="tel" placeholder="Phone" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" name='email' readOnly defaultValue={user?.email} type="email" placeholder="Email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">From</label>
                                <input id="city" name='from' type="text" placeholder="From" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">To</label>
                                <input id="state" name='to' type="text" readOnly defaultValue={destination} placeholder="To" className="w-full p-2 input-bordered input-error rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="date" className="text-sm">Date</label>
                                <input id="date" name='date' type="date" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 border-gray-700 text-gray-900" />
                            </div>
                        </div>
                    </fieldset>
                    <input className='btn btn-error btn-block' type="submit" value="Confirm Your Ticket" />
                </form>
            </section>
        </div>
    );
};

export default Booking;