import React from 'react'

const Tienda = () => {
  return (
    <div className="cards_container grid h-screen place-content-center  bg-white">

  <div className="card_ group relative flex h-[400px] w-[300px] scale-[70%] mt-40 flex-col items-start justify-center rounded-xl p-10 border-2 border-[#f4a836]  backdrop-blur-lg">

    <div className="_card_image absolute -top-44 right-0 z-20">
      <img className="z-20 flex group-hover:scale-[0.9] transition duration-700 h-[300px]" src="https://in.elevarsports.com/cdn/shop/products/Elevar_Sports_Men_ARC_Racer_Carbon_Black_Hero_Front_Angle_16405ce3-e6a3-49dd-a99b-8b7e03ee318e_1445x.png?v=1667313238" alt="" />
    </div>

    <div className="card_title z-20 my-5">
      <h2 className="text-2xl uppercase">
        👟<br />
        aparel
      </h2>
    </div>

    <div className="_card_description z-20">
      <p className="text-4xl uppercase">grade equipment</p>
    </div>

    <div className="_card_data_product absolute  -top-40 -right-[2px] z-10 flex h-full w-1/2 skew-y-[30deg] flex-col rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl bg-[#f4a836] text-white transition-all group-hover:-top-60 group-hover:h-[450px] group-hover:w-2/3 duration-700">
      <a target="_blank" href="#" className="ml-10 mt-6  opacity-0 group-hover:opacity-100 group-hover:text-3xl cursor-pointer transition duration-700"> Mas info</a>
    </div>
  </div>

</div>
  )
}

export default Tienda