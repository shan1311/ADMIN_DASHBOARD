import AppBarMain from '../AppBar'
import './dashboard.css'
import Dash from './Pages/Dash'
import Analysis from './Pages/Analysis'
import Course from './Pages/Course'
import Note from './Pages/Note'
import Calender from './Pages/Calender'
import React,{useState} from 'react'
import '../side.css'
import { Icd } from '../icon'



export default function StudentProd()
{
  const [active,setActive] = useState("Dashboard");
  const [selected,setselected] = useState(0);


    return (
        <div className='App-Main'>
               <div className='Nav-Bar_Main'>
               <AppBarMain/>
            </div>
             <div className='Nav-Switch-Pages-Main'>
                <div className='Switches'>
                     <div className='Side'>
                         <div className='menu'>
                            {Icd.map((item,index)=>{
                               return(
                                    <nav onClick={()=>{setActive(item.section)}}>
                                        <div className={selected===index?'menubar active': 'menubar'}
                                              key={index}
                                               onClick={()=>setselected(index)}
                                          >
                                              <item.icon/>
                                              <span >
                                              {item.heading}
                                              </span>
                                          </div>
                                    </nav>
                                    )
  
                             })}
  
                          </div>
                       </div> 
               </div>
               <div className='Content-Pages'>
                    {( active === "Dashboard" && <Dash /> )}
                    {( active === "Analysis" && <Analysis /> )}
                    {( active === "Notes" && <Note /> )}
                    {( active === "Calender" && <Calender /> )}
                    {( active === "Course" && <Course /> )}
               </div>
            </div>
         
        </div>
    )
}