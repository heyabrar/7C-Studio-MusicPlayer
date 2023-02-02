import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SongsListing from "../Pages/SongsListing";

export default function AllRoutes ( ){
    return (
        <>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/songs" element={<SongsListing/>}/>
        </Routes>
        </>
    )
}