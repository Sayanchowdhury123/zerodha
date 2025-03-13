import React from 'react';
import {useNavigate,Outlet} from "react-router-dom";

function Private() {
    const Navigate = useNavigate();
    const token = localStorage.getItem("token")
    return token ? <Outlet/> : <Navigate to="/login" />
}

export default Private;