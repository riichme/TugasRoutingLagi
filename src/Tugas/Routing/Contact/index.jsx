import "./Contact.css"
import { useHistory } from "react-router-dom";

const Contact = () => {
    const history = useHistory ();
    return (
        <div className="Hompage">
            <h2>Contact Page</h2>
            <ul>
                <li>Email</li>
                <li>Whatsap</li>
                
            </ul>

            <button onClick={() => history.push ("/")}>kembali</button>
        </div>
    )
}

export default Contact