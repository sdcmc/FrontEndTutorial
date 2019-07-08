import React from "react";
import ReactDOM from "react-dom";

import Header from "./header";

class Layout extends React.Component {
  render() {
    const userName = "test user name";
    return (
      <div>
        <Header />
        <h2>{userName}</h2>
      </div>
    );
  }
}

const content = document.getElementById("content");
ReactDOM.render(<Layout />, content);
