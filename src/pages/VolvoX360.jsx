import React from 'react'
import Carousel from '../Components/carousel/Carousel'
import Topbar from '../Components/top-bar/Topbar'

function VolvoX360() {
    let car = "x360"
    return (
        <div className='container'>
            <Carousel car={car}/>
        </div>
    )
}

export default VolvoX360
