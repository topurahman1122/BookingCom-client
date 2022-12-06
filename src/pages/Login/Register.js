import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        const address = form.address.value;
        // const photo = form.photo.value
        console.log(firstName, lastName, email, password, phone, address);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(err => {
                console.error(err);
                form.reset();
            })

    }

    return (
        <div>
            <h1 className="text-4xl text-violet-500 mt-6 font-bold text-center">Register</h1>
            <section className="p-6 my-10 bg-gray-100 text-gray-900">
                <form onSubmit={handelRegister} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
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
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" name='email' type="email" placeholder="Email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Photo</label>
                                <input id="photo" type="file" placeholder="Photo" className="w-full file-input file-input-bordered file-input-accent" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" name='address' type="text" placeholder="Address" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <input id="password" type="password" placeholder="Password" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="phone" className="text-sm">Phone Number</label>
                                <input id="phone" type="tel" placeholder="Phone Number" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full mt-4 sm:col-span-2">
                                <input className='btn  btn-success btn-block' type="submit" value="Register Your Account" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Register;