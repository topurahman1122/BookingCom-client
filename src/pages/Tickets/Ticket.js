import React from 'react';

const Ticket = ({ ticket, handelDelete, handelUpdate }) => {
    const { CustomerName, _id, date, journey, phone, email, busName, status } = ticket
    return (
        <tr className="border-b border-opacity-20 border-gray-700 bg-gray-100">
            <td className="p-3 font-semibold">
                <p>+88{phone}</p>
            </td>
            <td className="p-3 font-semibold">
                <p>{CustomerName}</p>
            </td>
            <td className="p-3 font-semibold">
                <p>{_id}</p>
                <p className="text-gray-400">{email}</p>
            </td>
            <td className="p-3 font-semibold">
                <p>{date}</p>
                <p className="text-gray-400 font-semibold">{busName}</p>
            </td>
            <td className="p-3 font-semibold">
                <p>{journey}</p>
            </td>
            <td className="p-3 text-left font-semibold">
                <span className="px-3 py-1 font-semibold rounded-md bg-cyan-400 text-gray-900">
                    <button onClick={() => handelUpdate(_id)}>{status ? status : "Pending"}</button>
                </span>
            </td>
            <td className="p-3 text-left font-semibold">
                <span className="px-3 py-1 font-bold rounded-md text-red-700">
                    <button onClick={() => handelDelete(_id)} className="btn btn-ghost">Cancel</button>
                </span>
            </td>
        </tr>
    );
};

export default Ticket;