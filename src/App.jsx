import React from "react";

import { Markdown } from "./components/markdown";
import { Page } from "./components/page";
import { CreateHome, CreatePosts } from "./imports";

// import routerTree from "./app/routerTree";

const App = () => {
  return (
    <div className="page">
      <CreateHome/>
      <CreatePosts/>
    </div>
  );
};

export default App;
