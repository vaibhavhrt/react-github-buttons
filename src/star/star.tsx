/**
 * @function Star
 */
import * as React from "react";
import classes from "../styles.css";
import StarSvg from "./starIcon";

export interface IPropTypes { repo: string; }

export default function Star(props: IPropTypes) {
  const { repo } = props;
  return (
    <div className={classes.root}>
      <button title={`Star ${repo}`} className={classes.button}>
        <StarSvg />
        Star
      </button>
      <a
        className={classes.count}
        href={`https://github.com/${repo}/stargazers`}
        aria-label={`${1} user starred this repository`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {1}
      </a>
  </div>
  );
}
