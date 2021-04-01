import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext = {
    isLoading: false,
    userInfo: undefined,
    login: (email, password) => {},
    getUserInfo: () => {},
    logout: () => {},
}

const UserContext = createContext(defaultContext);

const UserContextProvider = ({children}) => {
    // Use Email and Password for login API
    // Get token and UserInfo via Login API
    AsyncStorage.setItem('token', 'save your token').then(()=>{
        setUserInfo({
            name: 'changmin.dev',
            email: 'changmin043@gmail.com'
        });
        setIsLoading(true);
    });
    const getUserInfo = () => {
        AsyncStorage.getItem('token')
        .then(value => {
            if(value) {
                setUserInfo({
                    name: 'changmin.dev',
                    email: "changmin043@gmail.com"
                });
            }
            setIsLoading(true);
        })
        .catch(() => {
            setUserInfo(undefined);
            setIsLoading(true);
        });
    };
    
    const logout = () => {
        AsyncStorage.removeItem('token')
        setUserInfo(undefined);
    };
    
    userEffect(() => {
        getUserInfo();
    }, []);

    return (
        <UserContext.Provider 
            value={{
                isLoading,
                userInfo,
                login,
                getUserInfo,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};


