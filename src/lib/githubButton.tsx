/**
 * @function GithubButton
 */
import * as PropTypes from "prop-types";
import * as React from "react";

import classes from "../styles.css";

import StarIcon from "./icons/starIcon";

function getDataForVariant(variant: string, count: number): { title: string; label: string; Icon: () => JSX.Element; } {
  let title: string;
  let label: string;
  if (variant === "star") {
    title = "Star";
    label = `${count} user starred this repository`;
    return { title, label, Icon: StarIcon };
  }
  // throw new Error("Invalid Variant, supply one of [star, ]");
  return { title: "", label: "", Icon: StarIcon };
}

export interface IPropTypes {
  owner: string;
  repo: string;
  variant: string;
  count: number;
}

export default function GithubButton(props: IPropTypes) {
  const { owner, repo, variant, count } = props;
  const { title, label, Icon } = getDataForVariant(variant, count);

  return (
    <div className={classes.root}>
      <button title={`Star ${owner}/${repo}`} className={classes.button}>
        <Icon />
        {title}
      </button>
      <a
        className={classes.count}
        href={`https://github.com/${owner}/${repo}/stargazers`}
        aria-label={label}
        target="_blank"
        rel="noreferrer noopener"
      >
        {count}
      </a>
  </div>
  );
}

GithubButton.propTypes = {
  count: PropTypes.node.isRequired,
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["star", "fork"]),
};
