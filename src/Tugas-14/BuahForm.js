import React, {useState, useContext} from 'react';
import {BuahContext} from './BuahContext'
import axios from 'axios';

const BuahForm = () => {
    const [dataHargaBuah, setDataHargaBuah, input, setInput] = useContext(BuahContext)
   
    const submitForm = (event) => {
        event.preventDefault()
        //let newId = dataHargaBuah.length+1
        let name = input.name
        let price = input.price.toString()
        
        if ( input.id === null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`,{name, price, weight : input.weight})
            .then( res => {
                setDataHargaBuah([...dataHargaBuah, {id : res.data.id, name, price, weight: input.weight}])
                
            })
        
    }else{
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`,{name, price, weight : input.weight})
            .then( res => {
                let newDatabuah = dataHargaBuah.find(x => x.id === input.id)
                newDatabuah.name = name
                newDatabuah.price = price
                newDatabuah.weight = input.weight
                setDataHargaBuah([...dataHargaBuah])
                
            })
      
    } 
    setInput({id: null, name: "", price: "", weight: 0})
    }

    
    
    const handleChange1 = (event) => {
        var value= event.target.value
        setInput({...input, name: value})
    }
       
    const handleChange2 = (event) => {
        var value= event.target.value
        setInput({...input, price: value})
    }

    const handleChange3 = (event) => {
        var value= event.target.value
        setInput({...input, weight: value})

    }

    

    return (
        <div className="form-buah">
        <form onSubmit={submitForm} style={{marginBottom: '1em'}}>
                <h1 style={{textAlign: 'center'}}>Form Data Buah</h1>
                <hr/>
                <strong className="label-form">Nama Buah</strong>
                <input required="required" type="text" value={input.name} onChange={handleChange1}/><br/>
                
                <strong className="label-form">Harga</strong>
                <input required="required" type="text" value={input.price} onChange={handleChange2}/><br/>
                
                <strong className="label-form">Berat (gram)</strong>
                <input required="required" type="number"  value={input.weight} onChange={handleChange3}/><br/>

            <button>Simpan</button>
            
            </form>
        </div>

    )
    }

export default BuahForm