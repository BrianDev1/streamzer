import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/streamCreate";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";
import StreamzerAppBar from "./streamzerAppBar";

const App = () => {
  return (
    <div>
      <StreamzerAppBar />
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/streams/delete"
            component={() => <StreamDelete />}
          />
          <Route exact path="/streams/edit" component={() => <StreamEdit />} />
          <Route exact path="/streams/show" component={() => <StreamShow />} />
          <Route
            exact
            path="/streams/create"
            component={() => <StreamCreate />}
          />
          <Route exact path="/" component={() => <StreamList />} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
