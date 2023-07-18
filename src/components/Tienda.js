import React from 'react'
import { products } from '../data/productos'

const Tienda = () => {
return (
<div className="flex flex-row justify-center">

{products.map((prod, index)=>
  <div key={index} className="cards_container grid  h-screen place-content-center  bg-white">
  
    <div
        className="card_ group bg-[#F2EFEA] relative flex h-[400px] w-[300px] scale-[70%] mt-40 flex-col items-start justify-center rounded-xl p-10 border-2   backdrop-blur-lg">
  
        <div className="_card_image absolute  -top-20 right-0 z-20">
          <img className="z-20  flex group-hover:scale-[0.9] transition duration-700 w-auto h-auto"
            src={prod.img}
            alt="{prod.name}" />
        </div>
  
        <div className="card_title z-20 my-5">
          <h2 className="text-2xl font-bold uppercase pt-20">
          <br />
          {prod.name}
          </h2>
        </div>
  
        <div className="_card_description z-20">
          <p className="text-4xl uppercase">{prod.description}</p>
        </div>
  
        <div
          className= { `_card_data_product absolute  -top-40 -right-[2px] z-10 flex h-full w-1/2 skew-y-[30deg] flex-col rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl ${prod.color} text-white transition-all group-hover:-top-60 group-hover:h-[450px] group-hover:w-2/3 duration-700}`} >
          <a target="_blank" href={`https://wa.me/5540561429?text=Hola.%20Quiero%20viajar%20`}
            className="ml-10 mt-6  opacity-0 group-hover:opacity-100 group-hover:text-3xl cursor-pointer transition duration-700">
            Mas info</a>
        </div>
      </div>
  
    </div>


  )}

  
</div>
)
}

export default Tienda