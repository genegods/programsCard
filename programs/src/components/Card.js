import React, { useState } from "react";
import { CardData } from "../data/CardData";


const Card = () => {

  return (
    <React.Fragment>
      <main className="centered ">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
            {CardData.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="bg-green-600 w-60 h-72 centered flex-col shadow-lg space-y-2 hover:bg-green-900">
                     <img src={item.img} alt='image' className='w-32'/>
                     <p className="text-2xl font-bold text-center text-white">{item.title}</p>
                   
                     <p className="text-xl font-semibold text-green-600 bg-white px-6 py-1 rounded-lg">{item.courses}</p>
                    
                  </div>
                </div>
              );
            })}
            </div>
         
      
      </main>
    </React.Fragment>
  );
};

export default Card;
