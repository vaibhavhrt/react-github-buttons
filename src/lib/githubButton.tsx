/**
 * @function GithubButton
 */
import * as PropTypes from "prop-types";
import * as React from "react";

import classes from "../styles.css";

import ForkIcon from "./icons/forkIcon";
import StarIcon from "./icons/starIcon";
import WatchIcon from "./icons/watchIcon";
import UsedByIcon from './icons/usedByIcon';

function getDataForVariant(
  variant: string,
  count: number,
  owner: string,
  repo: string,
  ): {
    title: string;
    btnTitle: string;
    label: string;
    countUrl: string;
    Icon: () => JSX.Element;
  } {
  let title: string;
  let btnTitle: string;
  let label: string;
  let countUrl: string;
  if (variant === "star") {
    title = "Star";
    btnTitle = `Star ${owner}/${repo}`;
    label = `${count} users starred this repository`;
    countUrl = `https://github.com/${owner}/${repo}/stargazers`;
    return { title, btnTitle, label, countUrl, Icon: StarIcon };
  } else if (variant === "fork") {
    title = "Fork";
    btnTitle = `Fork your own copy of ${owner}/${repo} to your account`;
    label = `${count} users forked this repository`;
    countUrl = `https://github.com/${owner}/${repo}/network/members`;
    return { title, btnTitle, label, countUrl, Icon: ForkIcon };
  } else if (variant === "watch") {
    title = "Watch";
    btnTitle = "";
    label = `${count} users are watching this repository`;
    countUrl = `https://github.com/${owner}/${repo}/watchers`;
    return { title, btnTitle, label, countUrl, Icon: WatchIcon };
  } else if (variant === "usedby") {
    title = "Used by";
    btnTitle = "";
    label = `${count} repositories depend on this package`;
    countUrl = `https://github.com/${owner}/${repo}/network/dependents`;
    return { title, btnTitle, label, countUrl, Icon: UsedByIcon };
  }
  throw new Error("Invalid Variant, supply one of [star, fork, watch, usedby]");
}

export interface IPropTypes {
  owner: string;
  repo: string;
  variant: string;
  count: number;
}

export default function GithubButton(props: IPropTypes) {
  const { owner, repo, variant, count } = props;
  const { title, btnTitle, label, countUrl, Icon } = getDataForVariant(variant, count, owner, repo);

  return (
    <div className={classes.root}>
      <button title={btnTitle} className={classes.button}>
        <Icon />
        {` ${title}`}
      </button>
      <a
        className={classes.count}
        href={countUrl}
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
  variant: PropTypes.oneOf(["star", "fork", "watch", "usedby"]),
};
