import React from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ] 


  class HargaBuah extends React.Component{
      render(){
          return(
            <div style={{border: '1px transparent', borderRadius: '15px', width: '40%', margin :'0 auto', padding: '15px', fontFamily: 'times new roman'}}>
            <div>
                <h1 style={{textAlign : 'center'}}>Tabel Harga Buah</h1>
            </div>

            <div>
                <table border = '1px solid #black' style={{width:'100%', textAlign:'left'}}>
                    <tbody><tr style={{backgroundColor:'#9b9ea3'}}>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>

                    {dataHargaBuah.map(el=>{
                        return(
                    <tr style={{backgroundColor:'#f59149'}}>
                        <td>{el.nama}</td>
                        <td>{el.harga}</td>
                        <td>{el.berat/1000} Kg</td>
                    </tr>
                        )
                    } )}
                    </tbody>
                </table>
            </div>
            </div>
             )
        }
    }
    
export default HargaBuah;