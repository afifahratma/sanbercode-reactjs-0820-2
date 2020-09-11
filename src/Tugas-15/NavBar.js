import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext';


export default function NavigationBar() {
    const state = useContext(ThemeContext)

    const header = {
        marginBottom: '5em'
    }

    const navBar = {
        height: '50px',
        justifyContent: 'space-between',
        position: 'fixed',
        right: '0px',
        left: '0px',
        top: '0px',
        zindex:'1',
        transition: 'all 0.15s ease-in',
        backgroundColor: state.theme.primary,
        color: state.theme.text
    }

    const navUl ={
      liststyletype: 'none',
      margin: '0',
      padding: '10px'
    }

    const navli ={
      display : 'inline',
      margin: '10px'
    }
    const navLink = {
      'text-decoration' : 'none'
    }

    return (
        <nav style={navBar}>
          <ul style={navUl}>
            <li style={navli}>
              <Link style={navLink} to="/">Tugas 9</Link>
            </li>
            <li style={navli}>
              <Link style={navLink} to="/Tugas10">Tugas 10</Link>
            </li>
            <li style={navli}>
              <Link style={navLink} to="/Tugas11">Tugas 11</Link>
            </li>
            <li style={navli}>
              <Link style={navLink} to="/Tugas12">Tugas 12</Link>
            </li>
            <li style={navli}>
              <Link style={navLink} to="/Tugas13">Tugas 13</Link>
            </li>
            <li style={navli}>
              <Link style={navLink} to="/Tugas14">Tugas 14</Link>
            </li>
            <li style={navli}>
              <Link style={navLink}to="/Tugas15">Tugas 15</Link>
            </li>
          </ul>
        </nav>
    )
    }
