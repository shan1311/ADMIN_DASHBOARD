import Student from './IMG/student-with-computer.jpg'
const ImgStyle={
    width: '60%',
    height:'80',

};

const divStyle={
    width:'80%',
    height:'100%',
    display:'flex',
    justifyContent:'Center',
    alignItem:'center',
}



const Img =()=> {

    return (
        <div className="image std-with-comp" style={divStyle}>
            <img src={Student} alt="std-with_computer" style={ImgStyle}/>
        </div>
)
}
export default Img;