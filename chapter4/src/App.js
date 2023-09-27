import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My First React App!</h1>
        <Products /><Button>Default</Button>
      </div>
    );
  }
}
export default App;
