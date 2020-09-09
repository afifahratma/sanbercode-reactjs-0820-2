import React, {Component} from "react"
//import ItemBuah from "./ItemBuah"

class FormBuah extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
              ],
            inputName : "",
            inputHarga : "",
            inputBerat : 0,
            index : -1
        }
    }

    submitForm = (event) => {
        event.preventDefault()
        var index = this.state.index
        var dataBaru = {
            nama: this.state.inputName,
            harga: parseInt(this.state.inputHarga),
            berat: parseInt(this.state.inputBerat)
        }
        if ( index === -1){
        
        this.setState({
            dataHargaBuah : [...this.state.dataHargaBuah, dataBaru],
            inputName : "",
            inputHarga : "",
            inputBerat : "",
        })
    }else{
        var newDatabuah = this.state.dataHargaBuah
        newDatabuah[index] = dataBaru
  
        this.setState({
            dataHargaBuah: [...newDatabuah],
            inputName : "",
            inputHarga : "",
            inputBerat : 0,
            index: -1
        })
    }
    }
    handleChangeOne = (event) => {
        var value= event.target.value
        this.setState({inputName: value})
    }
       
    handleChangeTwo = (event) => {
        var value= event.target.value
        this.setState({inputHarga: value})
    }

    handleChangeThree = (event) => {
        var value= event.target.value
        this.setState({inputBerat: value})

    }

    editForm = (event) =>{
        var index= event.target.value
        var dataBuah = this.state.dataHargaBuah[index]
        
        this.setState({
            inputName : dataBuah.nama,
            inputHarga : dataBuah.harga,
            inputBerat : dataBuah.berat,
            index 
        })
    }

    deletePeserta = (event)=>{
        var index= event.target.value
        var dataBuah = this.state.dataHargaBuah[index]
        var newDatabuah = this.state.dataHargaBuah
        newDatabuah.splice(index, 1)
        
        this.setState({
            inputName : dataBuah.nama,
            inputHarga : dataBuah.harga,
            inputBerat : dataBuah.berat,
            index
        })
    }

    render(){
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
                    {this.state.dataHargaBuah.map((item, index) =>{
                    return(     
                        <tr key={index}>
                            <td>{item.nama}</td>
                            <td >{item.harga}</td>
                            <td >{item.berat/1000} kg</td> 
                            <td style={{textAlign: 'center' }}>
                          <button value={index} style={{marginRight: "5px"}} onClick={this.editForm}>Edit</button>
                          <button value={index} onClick={this.deletePeserta}>Delete</button>
                        </td>
                        </tr>               
                    
                    )
                  })
                }
                    </tbody>

                 </table>
                <form onSubmit={this.submitForm} style={{marginBottom: '1em'}}>
                    <h1 style={{textAlign: 'center'}}>Input Data Buah</h1>
                    <strong className="label-form">Nama Buah</strong>
                    <input required="required" type="text" name="namaBuah" value={this.state.inputName} onChange={this.handleChangeOne}/><br/>
                    
                    <strong className="label-form">Harga</strong>
                    <input required="required" type="text" name="hargaBuah" value={this.state.inputHarga} onChange={this.handleChangeTwo}/><br/>
                    
                    <strong className="label-form">Berat</strong>
                    <input required="required" type="number" name="beratBuah" value={this.state.inputBerat} onChange={this.handleChangeThree}/><br/>

                <button>Simpan</button>
                </form>
            </div>

           
        )
    }
}

export default FormBuah;