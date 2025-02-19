import { createContext,useContext,useState } from "react";


const themeContext=createContext({});

export const ThemeProvider=themeContext.Provider

export const useTheme=()=>{
return useContext(themeContext)
}