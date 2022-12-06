import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Tickets from "../pages/Tickets/Tickets";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ticket-booking-wesite-server.vercel.app/buses/${params.id}`)
            },
            {
                path: '/tickets',
                element: <PrivateRoute><Tickets></Tickets></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])