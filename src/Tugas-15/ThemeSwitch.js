import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import '../App.css'

const ThemeSwitch = () => {
    const state = useContext(ThemeContext)

    const btn = {
        color: state.theme.textOnSecondary,
        margin: ' 0 auto',
        background: state.theme.secondary,
        
      }
    
    return(
        <div className='for-border'>
        <h1>Klik untuk mengganti tema Navbar</h1>
        <button onClick={() => state.setTheme(state.theme.type)} style={btn}> Ganti Tema </button>
        </div>
    )
}

export default ThemeSwitch