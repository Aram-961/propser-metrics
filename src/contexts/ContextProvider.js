import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("light");
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [themeSettings, setThemeSettings] = useState(false);

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    };

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        setThemeSettings(false);
    };

    // Side Bar Link Color
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
        setThemeSettings(false);
    };
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                setColor,
                currentColor,
                setCurrentColor,
                currentMode,
                setCurrentMode,
                themeSettings,
                setThemeSettings,
                setMode,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
