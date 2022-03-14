import React from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import Pages from "./pages";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Pages/>
            </BrowserRouter>
        </div>
        )
}


ReactDOM.render(<App/>, document.getElementById('root'))