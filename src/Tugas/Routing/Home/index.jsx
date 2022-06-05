import "./Home.css"
import { Link } from "react-router-dom"


const Home = () => {

    
    return (
        <div className="Hompage">
            <h2>Home Page</h2>
            <ul>

                <li><Link to="Post/1">Satu</Link></li>
                <li><Link to="Post/2">dua</Link></li>
                <li><Link to="Post/3">tiga</Link></li>
                {/* <li>1</li>
                <li>2</li>
                <li>3</li> */}
            </ul>

            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

            
        </div>
    )
}

export default Home