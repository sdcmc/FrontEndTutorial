import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <h1>Compile JSX</h1>
    );
  }
}

const content = document.getElementById('content');
ReactDOM.render(<Layout/>, content);