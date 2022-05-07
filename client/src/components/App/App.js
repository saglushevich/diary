import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RegPage from "../../pages/RegPage";
import LoginPage from "../../pages/LoginPage";
import MainPage from "../../pages/MainPage";
import CompletedPage from "../../pages/CompletedPage";
import FailurePage from "../../pages/Failure";
import IncorrectPage from "../../pages/IncorrectPage";
import '../../styles/media.sass'
import '../../styles/styles.sass'

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/registration">
                        <RegPage/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/completed">
                        <CompletedPage/>
                    </Route>
                    <Route path="/failure">
                        <FailurePage/>
                    </Route>
                    <Route path="/incorrect">
                        <IncorrectPage/>
                    </Route>
                    <Route path="/main" exact>
                        <MainPage/>
                    </Route>
                </Switch>  
            </div>
        </BrowserRouter>
       
    );
}

export default App;