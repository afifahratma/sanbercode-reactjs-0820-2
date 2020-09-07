import React, {Component} from "react"

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : 100,
            date : new Date(),
            visible : true
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    
    componentDidUpdate(){
        if (this.state.visible === true){
            if (this.state.time < 0){
                this.setState({
                    visible : false
                })
            }
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){ //biar nambahkurang
        this.setState({
            time: this.state.time - 1,
            date : new Date()
        })

    }
    render(){
        return(
            <div style={{border: '1px transparent', width: '80%', margin :'20px auto', padding: '15px'}}>
            {this.state.visible && (
            <div style={{display: 'inline'}}> 
                 <h1 style={{float: "left"}}>Sekarang Jam: {this.state.date.toLocaleTimeString()}</h1>
                 <h1 style={{float: "right"}}>Hitung Mundur: {this.state.time} </h1>
            </div>
        )}
        </div>
            )}
        


}
export default Timer;