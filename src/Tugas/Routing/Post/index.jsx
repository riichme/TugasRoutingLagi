import {useParams} from "react-router-dom"
import "./Post.css"
import {useHistory} from "react-router-dom"

const Post =() => {
    const history = useHistory ();
     const {id} = useParams()   
    return (
        <div align="center">
            
                <h4>Post ke -{id}</h4>
                <p>Deskripsi</p>
                <button onClick={() => history.push ("/")}>kembali</button>
            
        </div>
    )
}
export default Post