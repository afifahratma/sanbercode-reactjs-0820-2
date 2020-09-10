import React, {useState, useEffect} from 'react';
import axios from 'axios';


const FormBuah  = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [input, setInput] = useState({
        name: "",
        price: "",
        weight: 0,
        id: null
    })

    useEffect(() => {
      if (dataHargaBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDataHargaBuah(res.data.map(el=>{return {id: el.id, name: el.name, price:el.price, weight: el.weight}}))
            
          })
      }
        
      }, [dataHargaBuah]);

      
    const submitForm = (event) => {
        event.preventDefault()
        let name = input.name
        let price = input.price.toString()
        //var dataBaru = {name : input.name, price : input.price, weight : input.weight}
        
        if ( input.id === null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`,{name, price, weight : input.weight})
            .then( res => {
                
                setDataHargaBuah([...dataHargaBuah, {id : res.data.id, name, price, weight: input.weight}])
                setInput({id: null, name: "", price: "", weight: 0})
            })
        
    }else{
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`,{name : input.name, price : input.price, weight : input.weight})
            .then( res => {
                let newDatabuah = dataHargaBuah.find(x => x.id === input.id)
                newDatabuah.name = name
                newDatabuah.price = price
                newDatabuah.weight = input.weight
                setDataHargaBuah([...dataHargaBuah])
                setInput({id: null, name: "", price: "", weight: 0})
            })
      
    } 
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
            <form onSubmit={submitForm} style={{marginBottom: '1em'}}>
                <h1 style={{textAlign: 'center'}}>Input Data Buah</h1>
                <strong className="label-form">Nama Buah</strong>
                <input required="required" type="text" name="namaBuah" value={input.name} onChange={handleChange1}/><br/>
                
                <strong className="label-form">Harga</strong>
                <input required="required" type="text" name="hargaBuah" value={input.price} onChange={handleChange2}/><br/>
                
                <strong className="label-form">Berat</strong>
                <input required="required" type="number" name="beratBuah" value={input.weight} onChange={handleChange3}/><br/>

            <button>Simpan</button>
            </form>
        </div>

       
    )
}

export default FormBuah;

