import React from "react";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {

    return (
        <div><BrowserRouter>
        <div>
            <Route path="/stream-delete" />
            <Route path="/stream-show" />
            <Route path="/stream-edit" />
            <Route path="/stream-create"/>
            <Route path="/stream-list" />
        </div>
        </BrowserRouter></div>
    );
}

export default App;