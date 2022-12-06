import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Ticket from './Ticket';

const Tickets = () => {
    const { user, logOut } = useContext(AuthContext)
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch(`https://ticket-booking-wesite-server.vercel.app/booking?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('booking-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setTickets(data);
            })
    }, [user?.email, logOut]);

    const handelDelete = id => {
        const agree = window.confirm('Are You sure to cancel this ticket?');
        if (agree) {
            fetch(`https://ticket-booking-wesite-server.vercel.app/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Ticket Canceled successfully!')
                        const remaining = tickets.filter(tk => tk._id !== id);
                        setTickets(remaining)
                    }
                })
        }
    }

    const handelUpdate = id => {
        fetch(`https://ticket-booking-wesite-server.vercel.app/booking/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const pending = tickets.filter(dt => dt._id !== id);
                    const confirm = tickets.find(dt => dt._id === id);
                    confirm.status = "Confirm";
                    const newTickets = [confirm, ...pending];
                    setTickets(newTickets);
                }
            })
    }

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-900">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Tickets</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <thead className="bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Phone Number </th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Booking Id And Email</th>
                                <th className="p-3">Boarding Date And Bus</th>
                                <th className="p-3 ">Destination</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Cancel Ticket</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tickets.map(ticket => <Ticket
                                    key={ticket._id}
                                    ticket={ticket}
                                    handelDelete={handelDelete}
                                    handelUpdate={handelUpdate}
                                ></Ticket>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Tickets;