import React, { useState, useEffect } from 'react'
import { products } from '../data/productos'



const Tienda = () => {

  const [count, setCount] = useState([])
  const [countFiltered, setCountFiltered] = useState([])

  console.log(count);

  let toggleIframe = true

  useEffect(() => { setCount(products)}, []);
  useEffect(() => { setCountFiltered(products) }, []);



  const filtrar = (e) => {
    if (e.target.value === 'pueblos') {

      toggleIframe = !toggleIframe

      document.querySelector('.frameDiv').classList.toggle('hidden')
      document.querySelector('.cards_map').classList.toggle('hidden')
    }

    if (e.target.value === 'todos') {      
      setCountFiltered(products);
    }


  }



  const search = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filtered = count.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery)
    );
    setCountFiltered(filtered);

    filtrar(e)
  };











  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <div className="filters_container h-max bg-transparent w-screen max-w-7xl">

        <div className="filters flex flex-col p-5 items-center justify-center">

          <div className='search_bar w-full  flex flex-col justify-center sm:pt-20 sm:bg-none'>
            <input onKeyUp={search} className='border-2 focus:outline-0 focus:ring-2 ring-blue-600 focus:border-[#3580BB] border-[#3580BB] rounded-lg p-2 text-slate-900' placeholder=' A donde sera tu siguiente aventura 🦅 ' type='search' />
          </div>

          <div className="filter_categories my-2 w-full flex justify-start">
            <span className="mx-2">📍</span>
            <select onClick={search} className="text-center uppercase border-2 rounded-lg" name="category" id="category">
              <option value="todos">Todos</option>
              <option value="excursion">excursiones</option>
              <option value="playa">destinos de sol y playa</option>
              <option value="pueblos">pueblos magicos</option>
              <option value="hoteles">hoteles</option>
              <option value="vuelos">vuelos</option>
              <option value="renta-transporte">renta de camionetas</option>
            </select>
          </div>

        </div>

      </div>

      <div className='cards_container  h-2/3 flex flex-col overflow-y-auto sm:h-max'>

        <iframe className="frameDiv h-screen w-screen hidden" src="https://pueblosmagicos.mexicodesconocido.com.mx/mapa"></iframe>


        <div className='cards_map md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {countFiltered.map((prod, index) =>

            <div key={index}
              className="card_ group mx-auto bg-[#F2EFEA] relative flex h-[400px] w-[300px] scale-[70%] mt-40 flex-col items-start justify-center rounded-xl p-10 border-2   backdrop-blur-lg">

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
                className={`_card_data_product absolute  -top-40 -right-[2px] z-10 flex h-full w-1/2 skew-y-[30deg] flex-col rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl ${prod.color} text-white transition-all group-hover:-top-60 group-hover:h-[450px] group-hover:w-2/3 duration-700}`} >
                <a target="_blank" rel='noreferrer' href={`https://wa.me/5540561429?text=Hola.%20Quiero%20viajar%20`}
                  className="ml-10 mt-6  opacity-0 group-hover:opacity-100 group-hover:text-3xl cursor-pointer transition duration-700">
                  Mas info</a>
              </div>
            </div>




          )}
        </div>



      </div>

    </div>
  )
}

export default Tienda