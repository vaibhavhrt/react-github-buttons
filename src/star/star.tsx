/**
 * @function Star
 */
import * as React from "react";
import styles from "../styles.css";
import StarSvg from "./starIcon";

export interface IPropTypes { repo: string; }

export default function Star(props: IPropTypes) {
  const { repo } = props;
  return (
    <div className={styles.root}>
      <button title={`Star ${repo}`} className={styles.button}>
        <StarSvg />
        Star
      </button>
      <a
        className={styles.count}
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
