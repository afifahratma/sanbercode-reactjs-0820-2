import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"
import axios from 'axios'

const BuahTable = () =>{
    const [dataHargaBuah, setDataHargaBuah, input, setInput] = useContext(BuahContext)

    const editForm = (event) =>{
        var idBuah = parseInt(event.target.value)
        var dataBuah = dataHargaBuah.find(x => x.id === idBuah)
        
        setInput({
            id : idBuah,
            name: dataBuah.name,
            price : dataBuah.price,
            weight : dataBuah.weight,
            
        })
    }

    const deleteForm = (event)=>{
        var idBuah = parseInt(event.target.value)
        var newDatabuah = dataHargaBuah.filter(x=> x.id !== idBuah)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res =>{
            setDataHargaBuah(newDatabuah)
        }
            )
    }
    
    return(
        <div className="data-buah">
            <h1 style={{textAlign: 'center'}}>Tabel Harga Buah</h1>
            <table border = '1px solid #black' style={{width:'100%', textAlign:'left'}}>
                <thead>
                    <tr style={{backgroundColor:'#9b9ea3'}}>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th></th>
                    </tr>
                </thead>

                <tbody style={{backgroundColor: 'coral'}}>
                {
                dataHargaBuah !== null && dataHargaBuah.map((item, index) =>{
                return(     
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td >{item.price}</td>
                        <td >{item.weight/1000} kg</td> 
                        <td style={{textAlign: 'center' }}>
                      <button value={item.id} style={{marginRight: "5px"}} onClick={editForm}>Edit</button>
                      <button value={item.id} onClick={deleteForm}>Delete</button>
                    </td> 
                    </tr>               
                
                )
              })
            }
                </tbody>

             </table>
             </div>
             )
             
}

export default BuahTable;