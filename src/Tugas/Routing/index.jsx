import Navigation from "./Navigation"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Service from "./Service"
import Menu from "./Menu"
import Contact from "./Contact"
import Post from "./Post"

const Routing = () => {
    return (
        <div>
           
            <Router>
            <Navigation/>
                <Switch>
                    {/* <Route exact path="/" children={ () => <Home/>}/>
                    <Route exact path="/Service" children={ () => <Service/>}/>
                    <Route exact path="/Menu" children={ () => <Menu/>}/>
                    <Route exact path="/Contact" children={ () => <Contact/>}/>
                    <Route exact path="/Post/id" children={ () => <Post/>}/> */}
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/Service">
                        <Service/>
                    </Route>
                    <Route path="/Menu">
                        <Menu/>
                    </Route>
                    <Route path="/Contact">
                        <Contact/>
                    </Route>
                    <Route path="/Post/:id">
                        <Post/>
                    </Route>

                </Switch>
            </Router>

        </div>
    )
}
 export default Routing