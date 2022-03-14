import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from './home'
import Favorites from './favorites'
import Mynotes from "./mynotes";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='mynotes' element={<Mynotes/>}/>
            <Route path='favorites' element={<Favorites/>}/>
        </Routes>
    )
}

export default Pages