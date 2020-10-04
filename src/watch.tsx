/**
 * @function Watch
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  owner: string;
  repo: string;
}

export interface IState {
  watchers_count: number;
}

export default class Watch extends React.Component<IPropTypes, IState> {
  static propTypes = {
    owner: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
  };

  constructor(props: IPropTypes) {
    super(props);
    this.state = {
      watchers_count: 0,
    };
  }

  componentDidMount() {
    const { owner, repo } = this.props;
    fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) => res.json()).then((res) => {
      this.setState({ watchers_count: res.watchers_count });
    });
  }

  render() {
    // const { owner, repo } = this.props;
    const { watchers_count } = this.state;
    return <GithubButton variant="watch" count={watchers_count} {...this.props} />;
  }
}
