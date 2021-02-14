/**
 * @function UsedBy
 */
import * as React from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  count: number;
  owner: string;
  repo: string;
  color?: string;
}

const UsedBy: React.FC<IPropTypes> = (props) => {
  const { color = '#6a737d' } = props;

  return <GithubButton variant="usedby" color={color} {...props} />;
};

export default React.memo(UsedBy);
