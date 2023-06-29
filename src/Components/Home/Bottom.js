import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faGooglePlusSquare,faFacebook} from '@fortawesome/free-brands-svg-icons'

const StyleDiv={
    width:'fit-content',
    height:'50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}
const StyleIcon = {
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
}

const Bottom=()=>
{
    return (
        <div className="Bottom" style={StyleDiv}>
            <div className="Git-hub"  style={StyleIcon}>
                <FontAwesomeIcon icon={faGithub} style={{color: "black",height:'5%',width:'5%',position:'relative'}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGooglePlusSquare} style={{color: "black",height:'5%',width:'5%',position:'relative'}}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faFacebook} style={{color: "black",height:'5%',width:'5%',position:'relative'}}></FontAwesomeIcon>
            </div>
        </div>
    )
}
export default Bottom;