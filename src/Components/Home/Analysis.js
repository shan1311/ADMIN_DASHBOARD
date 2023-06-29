
const Stylediv={
    display:'flex',
    justifyContent: 'space-evenly',
    alignItems:"center",
    flexDirection:"column",
    flexWrap:"wrap",
    padding:"2%",
    fontSize:'1.5em',
    height:"100%",
    width:"fit-content",
    position:"relative",
};
const StyleHead = 
{
     alignSelf:"baseline",
    color:'#9900cc',
    fontWeight:'800'

};

const Analysis =()=> {

    return (
        <div  className='ana-content' style={Stylediv}>
            <div className="head" style={StyleHead}>
            <h1 className="text-center">Analysis</h1>
            </div>
            <div className="content">
            <p style={{fontSize:'0.9em',fontWeight:'500'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ratione! Fugit veniam officia minus eos reprehenderit? Aliquid veniam sit libero inventore temporibus error optio minima eligendi tenetur sequi? Voluptas, dolor?</p>
            </div>
        </div>
    )
}
export default Analysis;