import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter

        //Render all child components of App after we render everything above
        {this.props.children}
      </div>
    );
  }
}
