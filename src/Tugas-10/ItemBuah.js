import React, {Component} from "react"

class ItemBuah extends Component{
    render(){
        return(
            <tr style={{backgroundColor:'#f59149'}}>
                        <td>{this.props.item.nama}</td>
                        <td>{this.props.item.harga}</td>
                        <td>{this.props.item.berat/1000} Kg</td>
                    </tr>
        )
    }
}

export default ItemBuah