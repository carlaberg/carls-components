import React, { Component } from "react";
import { SiteContainer } from "./styles";
import { TestButton } from "../carls-components";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <SiteContainer>
        <Header />
        Site container
        <TestButton>TestButton1</TestButton>
      </SiteContainer>
    );
  }
}

export default App;
