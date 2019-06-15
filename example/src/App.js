import React, { Component } from 'react';

import { Fork, Sponsor, Star, Watch, UsedBy } from 'react-github-buttons';

export default class App extends Component {
  render () {
    return (
      <div>
        <Star owner='vaibhavhrt' repo='react-github-buttons' />
        <Fork owner='vaibhavhrt' repo='react-github-buttons' />
        <Watch owner='vaibhavhrt' repo='react-github-buttons' />
        <UsedBy owner='vaibhavhrt' repo='react-github-buttons' count={0} />
        <Sponsor owner='vaibhavhrt' repo='react-github-buttons' />
      </div>
    )
  }
}
