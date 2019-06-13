/**
 * @function Star
 */
import * as React from "react";
import { useState } from "react";
import { ReactComponent as StarSvg } from './star.svg';

export type propTypes = { repo: string };

export default function Star(props: propTypes) {
  const { repo } = props;
  return (
    <div>
      <button title={`Star ${repo}`}>
        <StarSvg />
        Star
      </button>
      <a
        className="social-count js-social-count"
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
