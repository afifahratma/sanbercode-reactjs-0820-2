import React, {useState, createContext} from "react"


export const ThemeContext = createContext({
  theme: {
  type: 'light',
  primary: '#1ba5f7',
  text: '#black'
},
setTheme: () => {}
})

export const ThemeProvider = props => {
    const theme = {
        light : {
            type : 'light',
            primary: '#1ba5f7',
            text: 'black'
        },
            dark:{
            type: 'dark',
            primary: '#212121',
            text: 'white'
        },

    }
    
    const setTheme = (type) => {
        setState({ ...state, theme: type === 'dark' ? theme.light : theme.dark })
      }

      const initState = {
        theme: theme.light,
        setTheme: setTheme
      }
    
      const [state, setState] = useState(initState)

    return (
        <ThemeContext.Provider value={state}>
          {props.children}
        </ThemeContext.Provider>
    )
}

