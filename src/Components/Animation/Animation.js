import Lottie from 'lottie-react';
import Clock from './Clock.json';
import Success from './wired-lineal-648-victory-success.json';
import BarChart  from './wired-lineal-153-bar-chart-growth.json';
import Avatar from './wired-lineal-21-avatar.json';
import { Link } from 'react-scroll';
 

const ClockAnimation =()=>
{
    return(
    <div className='Clock-anime' style={{width:'50%',height:'50%',cursor:'pointer'}}>
        <Lottie loop={true}  animationData={Clock}></Lottie>
    </div>
    )
}
export {ClockAnimation};


const SuccessAnimation = ()=>
{
    return (
        <div className='Success-anime' style={{width:'50%',height:'50%',cursor:'pointer'}}>
            <Lottie loop={true}  animationData={Success}></Lottie>
        </div>
    )
}
export {SuccessAnimation};

const BarChartAnimation = ()=>
{
    return (
        <div className='Chart-anime' style={{width:'50%',height:'50%',cursor:'pointer'}}>
            <Lottie loop={true}  animationData={BarChart}></Lottie>
        </div>
    )
}
export {BarChartAnimation};

const AvatarAnimation = ()=>
{
    return (
        <div className='Avatar-anime' style={{width:'50%',height:'50%'}}>
            <Lottie loop={true} animationData={Avatar}></Lottie>
        </div>
    )
}
export {AvatarAnimation};

export default function AnimationData()
{
    return (
        <div className='Animation-div'style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:"100%",width:'fit-content',flexWrap:"wrap"}}>
        <Link to="Analysis-Nav" spy={true} smooth={true} offset={60} duration={500} style={{flexBasis:"25%"}}><BarChartAnimation /></Link>
        <Link to="Schedule-Nav" spy={true} smooth={true} offset={60} duration={500} style={{flexBasis:"25%"}}><ClockAnimation /></Link>
        <Link to="Success-Nav" spy={true} smooth={true} offset={60} duration={500} style={{flexBasis:"25%"}}><SuccessAnimation /></Link>
        </div>
    )
}

