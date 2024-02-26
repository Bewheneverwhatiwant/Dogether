import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import React, { useState, createContext, useContext } from 'react';

export const OutletContext = createContext();

export default function Component() {
    const [backSetting, setBackSetting] = useState(true);

    return (
        <>
            <Header $background={backSetting} />

            <OutletContext.Provider value={setBackSetting}>
                <Outlet />
            </OutletContext.Provider>

            <Footer />
        </>
    )
};