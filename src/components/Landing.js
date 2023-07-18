import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className=' bg-hero-mobile w-full h-screen bg-no-repeat  bg-contain bg-top
    md:bg-hero-pattern md:h-screen md:w-auto md:bg-no-repeat md:bg-center md:bg-cover'>

      <div className="
        translate-y-96 h-1/2  items-center flex flex-col
      md:w-1/2 md:h-screen md:flex md:justify-center md:items-start md:flex-col  md:translate-y-0 ">
        <p className="
        text-[50px] font-serif h-1/2 p-5 text-center
        md:text-[76px] md:font-serif md:w-[500px] md:h-[400px] md:ml-36  md:text-left ">El mejor plan lo haces con nosotos</p>
        
        <Link to={'/tienda'}> <button className="
          bg-black rounded-3xl text-xl  mt-20 
          md:bg-black md:rounded-3xl md:text-xl md:mt-5 md:ml-36 text-white w-36 h-[50px]"
          > Paquetes</button></Link>

      </div>

    </div>
  )
}

export default Landing