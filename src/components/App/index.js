import React, { Component } from 'react';
import { SiteContainer } from './styles';
import { TestButton } from '../carls-components';

class App extends Component {
  render() {
    return (
      <SiteContainer>
        Site container
        <TestButton>TestButton1</TestButton>
      </SiteContainer>
    )            
  }
}

export default App;