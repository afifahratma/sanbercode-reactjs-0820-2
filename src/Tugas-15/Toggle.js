import React from "react"
import NavigatonBar from "./NavBar"
import { ThemeProvider } from "./ThemeContext"
import ThemeSwitch from "./ThemeSwitch"



const Toggle = () =>{
    return(
        <ThemeProvider>
            <ThemeSwitch/>
            <NavigatonBar/>
        </ThemeProvider>
    )
}

export default Toggle