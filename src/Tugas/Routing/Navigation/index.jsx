/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import "./index.css";


const Navigation =() => {
return (
    <div className="sidebar">
        <Link to="/"> <i className="fa fa-fw fa-home"></i>Home</Link>
        <Link to="/Service"> <i className="fa fa-fw fa-wrench">Service</i></Link>
        <Link to="/Menu"> <i className="fa fa-fw fa-user">Menu</i></Link>
        <Link to="/Contact"> <i className="fa fa-fw fa-envelope">Contact</i></Link>
        
    </div>
)
}

export default Navigation