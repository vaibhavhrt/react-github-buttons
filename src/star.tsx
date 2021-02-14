/**
 * @function Star
 */
import * as React from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  owner: string;
  repo: string;
  color?: string;
}

export interface IState {
  stargazers_count: number;
}

export default class Star extends React.Component<IPropTypes, IState> {
  constructor(props: IPropTypes) {
    super(props);
    this.state = {
      stargazers_count: 0,
    };
  }

  componentDidMount() {
    const { owner, repo } = this.props;
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ stargazers_count: res.stargazers_count });
      });
  }

  render() {
    const { color = '#6a737d' } = this.props;
    const { stargazers_count } = this.state;

    return (
      <GithubButton
        color={color}
        variant="star"
        count={stargazers_count}
        {...this.props}
      />
    );
  }
}
