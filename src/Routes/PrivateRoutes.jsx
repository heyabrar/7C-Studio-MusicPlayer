import { Navigate } from "react-router-dom";

export default function PrivateRoutes ({children}){
    const Auth = localStorage.getItem('NUMBER');
    if(!Auth)
    {
        return <Navigate to='/'/>
    }
    return children
}