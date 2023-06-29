import Std from './IMG/std-jump.jpg'
const ImgStyle={
    width: '60%',
    height:'80',
}

const divStyle={
    width:'fit-content',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItem:'center',
}



const SImg =()=> {

    return (
        <div className="image std-with-comp" style={divStyle}>
            <img src={Std} alt="std-with_computer" style={ImgStyle}/>
        </div>
)
}
export default SImg;