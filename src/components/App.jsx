import React, { Component } from 'react';
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react';

import './app.css';
import Header from './layout/Header';

class App extends Component {
  render() {
    return (
      <Container className='App'>
        <Segment>
          <Dimmer active={false}>
            <Loader />
          </Dimmer>
          <Header />
          { this.props.children }
          <footer />
        </Segment>
      </Container>
    );
  }
}

export default App;
