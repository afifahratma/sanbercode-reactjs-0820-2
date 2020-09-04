import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div style={{border: '1px solid #0d0d0d', borderRadius: '15px', width: '40%', margin :'20px auto', padding: '15px', fontFamily: 'times new roman'}}>
                <h1 style={{textAlign: 'center'}}>Form Pembelian Buah</h1>
              <div style={{padding:'20px', paddingtop:'0px'}}>
              
              <div style={{display: 'block', marginBottom: '1em', textAlign:'left'}}>
              <div style={{display: 'inline-block', width: '155px', fontWeight: 'bold', fontSize: '18px'}}>
                Nama Pelanggan
              </div>
                <input style={{display: 'inline-block'}} type="text" name="name" />
              </div>           
            
            <div style={{display: 'block', marginBottom: '1em', textAlign:'left'}}>
              <div style={{display: 'inline-block', width: '155px', fontWeight: 'bold', fontSize: '18px'}}>
              Daftar Item
              </div>
            <div style={{display: 'inline-block', marginBottom: '1em'}}>
              <input type="checkbox" name="item" />
              <label>Semangka</label><br />
              <input type="checkbox" name="item" />
              <label>Jeruk</label><br />
              <input type="checkbox" name="item" />
              <label>Nanas</label><br />
              <input type="checkbox" name="item" />
              <label>Salak</label><br />
              <input type="checkbox" name="item" />
              <label>Anggur</label><br />
            </div>
            </div>

            <div style={{textAlign:'left'}}>
            <button style={{background: 'white', borderRadius: '25px'}}> Kirim
           </button>
            </div>
            
            </div>
          </div>
        )
    }
}

export default Form