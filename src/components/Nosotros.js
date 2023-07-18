import React from 'react'
import team1 from '../img/banner2Nosotros.png'
import {team} from '../data/team.js'

const Nosotros = () => {
  return (
    <div className='bg-banner-about w-full h-screen bg-no-repeat  bg-contain bg-top
    md:bg-banner-about md:h-[300px] md:w-full md:bg-no-repeat md:bg-top md:bg-contain'>
<div className=" w-1/2 h-[310px] flex  justify-end flex-col ">
  <p className="text-7xl text-[#3580BB] pl-48 font-bold">Who </p>
  <p className="text-7xl text-[#3580BB] pl-48 font-bold">We are</p>
</div>

<div className='h-[500px]  w-full mt-10 bg-[#F2EFEA] flex flex-row px-36 py-10 justify-center'>
  <img className="w-1/3" src={team1} alt="team"/>
  <div className="ml-20 w-1/3">
    <p className="text-5xl font-bold text-center"> Creative Directors</p>
    <p className=" p-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis repellat. Deserunt, deleniti iste dolorem, voluptatibus sit aliquam unde molestiae, vitae facilis nihil repellendus eum ex porro nobis quae ducimus.</p>
    <p className=" px-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis repellat. Deserunt, deleniti iste dolorem, voluptatibus sit aliquam unde molestiae, vitae facilis nihil repellendus eum ex porro nobis quae ducimus.</p>
  </div>
</div>

<div className='h-[500px]  w-full mt-10 bg-[#F2EFEA] flex flex-row px-36 py-10 justify-center items-center'>
 <div className=" bg-[#3580BB] w-[300px] h-[350px] mr-28 p-5">
<p className="text-2xl font-bold text-white " >Our team</p>
<p className="text-white ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia animi id possimus accusantium! Eligendi, repellendus dignissimos perspiciatis architecto, odit suscipit cum explicabo voluptas fugit, accusantium dolores repellat ad nisi enim.</p>
 </div>
 
  {team.map((teams, index)=>
    <div key={index} className="w-[200px]  shadow-xl shadow-black mx-10 ">
      <img className="w-[200px]" src={teams.img} alt='img team'/>
      <p className="text-center text-1xl font-bold px-5">{teams.name}</p>
      <p className="text-center ">{teams.ocupation}</p>
    </div> 
  )}
</div>

    </div>
  )
}

export default Nosotros