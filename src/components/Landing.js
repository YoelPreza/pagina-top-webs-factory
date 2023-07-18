import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
return (
<div className=' bg-hero-mobile w-full h-screen bg-no-repeat bg-center bg-contain
    md:bg-hero-pattern md:h-screen md:w-auto md:bg-no-repeat md:bg-center md:bg-cover'>

  <div className="w-1/2 h-screen flex justify-center items-start flex-col ">
    <p class="text-[76px] font-serif w-[500px] h-[400px] ml-36   ">El mejor plan lo haces con nosotos</p>
    <Link to={'/tienda'}> <button className="bg-black rounded-3xl text-xl  ml-36 text-white w-36 h-[50px]"> Paquetes</button></Link>

  </div>

</div>
)
}

export default Landing