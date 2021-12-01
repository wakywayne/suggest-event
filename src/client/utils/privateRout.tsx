import * as React from 'react';
import { Outlet, Navigate } from 'react-router';

export default function PrivateRout({ children }) {
    // TOKEN validation here

    const TOKEN = localStorage.getItem('token');

    if (TOKEN) {
        return (
            <>
                {children}
                <Outlet />
            </>
        )
    } else {
        return <Navigate to="/" />;
    }

}


// Write route like this <Route path="/suggestEvent" element={<PrivateRoute children={<App2 />} />} />
