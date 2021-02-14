/**
 * @function Fork
 */
import * as React from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  owner: string;
  repo: string;
  color?: string;
}

export interface IState {
  forks_count: number;
}

export default class Fork extends React.Component<IPropTypes, IState> {
  constructor(props: IPropTypes) {
    super(props);
    this.state = {
      forks_count: 0,
    };
  }

  componentDidMount() {
    const { owner, repo } = this.props;
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ forks_count: res.forks_count });
      });
  }

  render() {
    const { color = '#6a737d' } = this.props;
    const { forks_count } = this.state;

    return (
      <GithubButton
        variant="fork"
        count={forks_count}
        color={color}
        {...this.props}
      />
    );
  }
}
