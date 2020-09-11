import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahForm from "./BuahForm"
import BuahTable from "./BuahTable"

const Buah = () => {
    return(
        <BuahProvider>
            <BuahTable/>
            <BuahForm/>
        </BuahProvider>
    )
}

export default Buah