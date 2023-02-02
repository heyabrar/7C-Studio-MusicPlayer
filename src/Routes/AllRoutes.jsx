import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SongsListing from "../Pages/SongsListing";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes ( ){
    return (
        <>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/songs" element={<PrivateRoutes><SongsListing/></PrivateRoutes>}/>
        </Routes>
        </>
    )
}