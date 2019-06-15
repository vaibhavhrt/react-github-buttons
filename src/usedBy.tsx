/**
 * @function UsedBy
 */
import * as PropTypes from "prop-types";
import * as React from "react";

import GithubButton from "./lib/githubButton";

export interface IPropTypes {
  owner: string;
  repo: string;
}

export default function UsedBy(props: IPropTypes) {
  return <GithubButton variant="usedby" { ...props } />;
}

UsedBy.propTypes = {
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
