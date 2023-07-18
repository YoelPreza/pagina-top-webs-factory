import React from 'react'
import { testimonios } from '../data/testimonios';

const Testimonios = () => {

  const rightScroll = ()=> {
    document.querySelector('.screen').scrollLeft += document.querySelector('.screen').scrollWidth/3;
   }

  const  leftScroll =()=> {
       document.querySelector('.screen').scrollLeft -= document.querySelector('.screen').scrollWidth/3;
   }
  return (
    <div className=" bg-white min-h-screen relative py-10 flex items-center justify-center " >
            <div className="absolute left-10 md:left-1/2  translate-x-60 z-40">
                <button onClick={leftScroll} className="  text-9xl -translate-x-[700px] rounded-l-lg w-8 h-8">&#10094;</button>
                <button onClick={rightScroll} className="  text-9xl translate-x-[130px] w-8 h-8 ">&#10095;</button>
            </div>

                        <div className="screen relative m-2 w-full min-h-[650px] sm:h-96 max-w-3xl md:items-center scroll-smooth flex overflow-y-hidden overflow-x-hidden
            sm:overflow-x-hidden
            ">


                    {testimonios.map((testimonio,index) => 

                    <div key={index} className="testimonio min-w-full z-30 h-[650px] md:h-96 md:items-center scroll-smooth bg-white flex flex-col rounded-lg overflow-hidden  
                    relative
                    md:flex-row-reverse
                    lg:w-[760px]
                    xl:h-96"> 
                         
                        <div  className="texto h-1/2 xl:w-1/2 flex justify-center items-start text-left  flex-col
                        sm:w-auto 
                        md:w-1/2 md:h-96
                        "> 
                             <p className="text-xl text-left z-10 w-11/12 mx-auto font-serif p-5">{testimonio.mensaje}</p> 
                             <p className="translate-x-10 mt-5 font-bold">{testimonio.name}</p> 
                             <span className="translate-x-10 text-2xl mt-5">{testimonio.rate}</span>
                        </div>
    
                        <div className="h-1/2 flex items-center justify-center
                        sm:w-auto 
                        md:w-1/2 md:h-96">
                            <div className="h-full">
                                <img className="w-auto h-full " src={testimonio.avatar} alt="avatar"/>
                            </div>
                        </div>

                    </div>
                    
                    
                    )}

                

            </div>
        </div>
  )
}

export default Testimonios