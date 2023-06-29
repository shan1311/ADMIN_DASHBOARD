import './Home.css';
import NavBar from './Home/NavBar';
import Content from './Home/Content';
import Img from './Home/img';
import Analysis from './Home/Analysis';
import Notificatio from'./Home/IMG/Notification.png';
import React ,{useState} from 'react';
import { useSpring,animated } from 'react-spring';
import Aimg from './Home/Aimg';
import Time from './Home/TimeMangament';
import Timg from './Home/Timg';
import SuccessData from './Home/Success';
import Simg from './Home/Simg';
import Bottom from './Home/Bottom';


export default function Home()
{
    const [flip,SetFlip]=useState(false);
    const prop1 = useSpring(
        { 
            to:{opacity:1},
            from: {opacity:0},
            reset:true,
            reverse:flip,
            delay:3000,
            onRest:()=>SetFlip(!flip)
        });
     const prop2 = useSpring(
            {
                to:{opacity:1},
                from: {opacity:0},
                reset:true,
                reverse:flip,
                delay:2000,
                onRest:()=>SetFlip(!flip)
            }
    );
    const prop3 = useSpring(
        {
            to:{opacity:1},
            from: {opacity:0},
            reset:true,
            reverse:flip,
            delay:4000,
            onRest:()=>SetFlip(!flip)
        });
        const prop4 = useSpring(
            {
                to:{opacity:1},
                from: {opacity:0},
                reset:true,
                reverse:flip,
                delay:1000,
                onRest:()=>SetFlip(!flip)
            });
    return (
        <div className='Main-container'>
            <div className='Navi-Bar-div'>
            <NavBar />
            </div>
            <div className='Content-div img-div CI-div'>
               <div className='I-div'>
            <animated.div style={prop1}>
            <img className='Not1 Not' src={Notificatio} alt='notification' />
            </animated.div>
            <animated.div style={prop2}>
            <img className='Not2 Not' src={Notificatio} alt='notification' />
            </animated.div>
            <animated.div style={prop3}>
            <img className='Not3 Not' src={Notificatio} alt='notification' />
            </animated.div>
            <animated.div style={prop4}>
            <img className='Not4 Not' src={Notificatio} alt='notification'/>
            </animated.div>
                <Img/>
               </div>
               <div className='C-div'>
                 <Content />
               </div>
            </div>
            <div className='analysis-div' id='Analysis-Nav'>
                <div className='A-content'>
                  <Analysis/>
                </div>
                <div className='A-img'>
                    <Aimg/>
                  </div>
            </div>
            <div className='Schedule-div' id='Schedule-Nav'>
                <div className='TM-img'>
                    <Timg />
                </div>
                <div className='Tm-content'>
                <Time />
                </div>
            </div>
            <div className='Success-div' id='Success-Nav'>
            <div className='Success-content'>
                <SuccessData />
             </div>
             <div className='Success-img'>
                <Simg />
             </div>
            </div>
            <div className='Bottom-div'>
                <Bottom />
                <div className="Copy-rights" >&copy; CopyRights All Reserved.</div>
            </div>
        </div>
    )
}