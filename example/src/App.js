import React, { Component } from 'react';

import { Fork, Star } from 'react-github-buttons';

export default class App extends Component {
  render () {
    return (
      <div>
        <Star owner='vaibhavhrt' repo='react-github-buttons' />
        <Fork owner='vaibhavhrt' repo='react-github-buttons' />
      </div>
    )
  }
}
