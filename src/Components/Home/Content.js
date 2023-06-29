
const Stylediv = {
    width:'95%',
    height:'100%',
    display:'flex',
    justifyContent: 'baseline',
    alignItems: 'flex-start',
    flexDirection:'Column',
    flexWrap:'wrap',
    flexGrow:'1',
    padding:'10px'
}
const Hstyle = {
   fontSize:'30px',
   color:' #9900cc'

}

const pStyle={
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:'3%',
    paddingTop:"3%",
    fontSize:'1.2em',
    fontWeight:'500'
}

const Content = ()=>{

    return (
        <div className='Content' style={Stylediv}>
        <h2 style={Hstyle}>Dificult Roads, Often Lead to Beautiful Destination</h2>
            <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ratione! Fugit veniam officia minus eos reprehenderit? Aliquid veniam sit libero inventore temporibus error optio minima eligendi tenetur sequi? Voluptas, dolor?</p>
        </div>
    )
}

export default Content;