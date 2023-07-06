import React from 'react'
import './Dash.css'
import CompletedCount from '../../Components/Completed'
import PendingCount from '../../Components/PendingCount'
import OngoingCount from '../../Components/OngoingCount'
import Graph from './Graph'

function Dash() {
  return (
    <div className='Dashboard'>
      <div className='Numeric-Values'>
        <div className='Course-Details'>
            <div className='Completed-Course'>
              <div className='Com-head'>
                <h3>Completed</h3>
              </div>  
              <div className='Com-Count'>
                <CompletedCount/>
              </div>            
            </div>
            <div className='Ongoing-Course'>
            <div className='On-head'>
                <h3>Ongoing</h3>
              </div>  
              <div className='On-Count'>
                <OngoingCount/>
              </div> 
            </div>
            <div className='Pending-Course'>
            <div className='Pen-head'>
                <h3>Pending</h3>
              </div>  
              <div className='Pen-Count'>
                <PendingCount/>
              </div> 
            </div>
        </div>
      </div>
      <div className='Graphical-Values'>
        <div className='Line-Graph'>
          <Graph/>
        </div>
        <div className='Pie-Chart'>Pie</div>
      </div>
      <div className='Calender'>Calender</div>
    </div>
  )
}

export default Dash