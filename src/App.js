import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Tugas-13/FormBuah.css'
import Form from './Tugas-9/Form';
import DaftarBuah from './Tugas-10/DaftarBuah'; 
import Timer from './Tugas-11/Timer'
import FormBuah from './Tugas-12/FormBuah';
//import FormBuah from './Tugas-13/FormBuah.js'
import Buah from './Tugas-14/Buah'


function App() {
  return(
   <div>
    <Form/>
    <DaftarBuah/> 
    <Timer/>
    <FormBuah/>
    
   <Buah/>
   </div>
  )
}

export default App;
