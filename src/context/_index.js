import React, { createContext, useContext } from 'react';
import {useHistory} from 'react-router-dom'

import toFetch from './fetch';
import samePass from './auth';
// import sideBarToggle from './sideBarToggle';

const appContext = createContext();

const AppProvider = ({children}) => {
    const toHistory = useHistory();
    let showSideBar = null;
        
    return(
        <appContext.Provider value={{samePass, toFetch, toHistory, showSideBar}}>
            { children }
        </appContext.Provider>
    );
};

const useAppContext = () => useContext(appContext);
export {
    useAppContext, AppProvider
};