import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitch = () => {
    const state = useContext(ThemeContext)

    const btn = {
        color: state.theme.textOnSecondary,
        margin: ' 0 auto',
        background: state.theme.secondary,
        
      }
    
    return(
        <button onClick={() => state.setTheme(state.theme.type)} style={btn}> Change Theme Navbar </button>
    )
}

export default ThemeSwitch