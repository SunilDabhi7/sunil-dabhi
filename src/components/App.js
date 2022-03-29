import React, { Component } from "react";

import { Navbar, Main, Footer } from ".";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
