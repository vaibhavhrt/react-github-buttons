/**
 * @function Star
 */
import * as PropTypes from "prop-types";
import * as React from "react";

import classes from "../styles.css";
import StarSvg from "./starIcon";

export interface IPropTypes {
  owner: string;
  repo: string;
}

export interface IState {
  stargazers_count: number;
}

export default class Star extends React.Component<IPropTypes, IState> {
  static propTypes = {
    owner: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
  };

  constructor(props: IPropTypes) {
    super(props);
    this.state = {
      stargazers_count: 0,
    };
  }

  componentDidMount() {
    const { owner, repo } = this.props;
    fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) => res.json()).then((res) => {
      this.setState({ stargazers_count: res.stargazers_count });
    });
  }

  render() {
    const { owner, repo } = this.props;
    const { stargazers_count } = this.state;
    return (
      <div className={classes.root}>
        <button title={`Star ${owner}/${repo}`} className={classes.button}>
          <StarSvg />
          Star
        </button>
        <a
          className={classes.count}
          href={`https://github.com/${owner}/${repo}/stargazers`}
          aria-label={`${stargazers_count} user starred this repository`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {stargazers_count}
        </a>
    </div>
    );
  }
}
