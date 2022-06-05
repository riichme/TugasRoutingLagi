import { Link } from "react-router-dom"
import { Route, Switch,  } from "react-router-dom"
import "./Menu.css"

const Menu = () => {

    // const match = useRouteMatch ();
    return (
        <div className="Hompage">
            <h2>Menu Page</h2>
            <ul>
                {/* <li><Link to={"${match.url}/Makanan"}>Makanan</Link></li>
                <li><Link to={"${match.url}/Minuman"}>Minuman</Link></li> */}

                <li><Link to="/Menu/Makanan">Makanan</Link></li>
                <li><Link to="/Menu/Minuman">Minuman</Link></li>
                
            </ul>
                <br/>

             <Switch>

                 {/* <Route path={"${match.url}/Makanan"}>
                     Bakso, Soto, Nasi
                 </Route>

                 <Route path={"${match.url}/Minuman"}>
                     Teh es, Sirup, Es jeruk
                 </Route> */}
                 <Route path="/Menu/Makanan">
                        Bakso, Soto, Nasi
                 </Route>
                 <Route path="/Menu/Minuman">
                        Teh es, Sirup, Es Jeruk
                 </Route>
            </Switch>   

            
        </div>
    )
}

export default Menu