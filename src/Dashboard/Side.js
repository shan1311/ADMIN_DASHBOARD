import React, { useState } from 'react'
import './side.css'
import { Icd } from './icon'


const Side = () => {
  const [selected,setselected] = useState(0);

  return (
    <div className='Side'>
      <div className='menu'>
          {Icd.map((item,index)=>{
            return(
              <nav>
              <div className={selected===index?'menubar active': 'menubar'}
              key={index}
              onClick={()=>setselected(index)}
              >
                <item.icon/>
                <button className='Nav-Button'>
                    {item.heading}
                </button>
              </div>
              </nav>
            )

          })}

        </div>
     

    </div> 
  );
};

export default Side;