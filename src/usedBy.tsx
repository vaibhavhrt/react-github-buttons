/**
 * @function UsedBy
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  count: number;
  owner: string;
  repo: string;
}

export default function UsedBy(props: IPropTypes) {
  return <GithubButton variant="usedby" {...props} />;
}

UsedBy.propTypes = {
  count: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};
