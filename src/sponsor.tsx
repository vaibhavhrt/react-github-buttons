/**
 * @function Sponsor
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  owner: string;
  repo: string;
}

export default function Sponsor(props: IPropTypes) {
  return <GithubButton variant="sponsor" showCount={false} {...props} />;
}

Sponsor.propTypes = {
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};
