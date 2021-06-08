import React, { createContext, useContext } from 'react';
import {useHistory} from 'react-router-dom'

import toFetch from './fetch';
import samePass from './auth';

const appContext = createContext();

const AppProvider = ({children}) => {
    const toHistory = useHistory();
        
    return(
        <appContext.Provider value={{samePass, toFetch, toHistory}}>
            { children }
        </appContext.Provider>
    );
};

const useAppContext = () => useContext(appContext);
export {
    useAppContext, AppProvider
};