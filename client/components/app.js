import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}
