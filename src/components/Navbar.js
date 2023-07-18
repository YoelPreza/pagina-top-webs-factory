import React from 'react'
import logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

const links = [
    { name:'Inicio', component:"/" },
    { name:'Nosotros', component:"/nosotros" },
    { name:'Servicios' , component:"/servicios"},
    { name:'Tienda', component:"/tienda"},
    { name:'Testimonios', component:"/testimonios"},
    { name:'Contacto', component:"/contacto"},
]
const brandName="Dream Travel"

const toggleMEnu = () =>{
    
    document.querySelector('.links').classList.toggle('translate-x-0')
}

// const scrollThis = (e) => {
//     e.preventDefault()
//     const innerText = e.target.innerText;
//     this.dispatchEvent(new CustomEvent('scroll-this', { detail: innerText, bubbles:true, composed:true}))
//     this.toggleMEnu()
// }

  return (
    <nav className="text-white bg-transparent max-h-20   fixed top-0 w-screen sm:w-11/12 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center p-2 px-5">
                <ul className="flex items-center">
                    <img className="mx-3  h-10 w-10  rounded-full" src={logo} alt='logo' />
                    <li className="sm:hidden md:flex text-black md:text-black font-bold rounded-xl">{brandName}</li>
                </ul>
                <ul className="links absolute top-full left-0  -translate-x-[120%]  w-full rounded-lg text-center  transition
                sm:relative sm:-translate-x-0 sm:flex-row sm:flex sm:justify-end sm:w-max 
                ">
                    {links.map((link, index )=> <Link  key={index} to={link.component}> <li key={index}  className="p-2 sm:text-black text-white font-bold sm:bg-transparent  bg-slate-800/60 hover:bg-[#f4a836] hover:text-white my-1 sm:my-0 rounded-lg cursor-pointer transition
                    ">{link.name}</li></Link>)}
                </ul>

                <button onClick={toggleMEnu} className="md:text-black bg-black text-white rounded-lg border p-2 
                sm:hidden
                ">menu</button>
            </nav>
  )
}

export default Navbar