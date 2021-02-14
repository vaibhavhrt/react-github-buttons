/**
 * @function Sponsor
 */
import * as React from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  owner: string;
  repo: string;
  color?: string;
}

const Sponsor: React.FC<IPropTypes> = (props) => {
  const { color = '#ea4aaa' } = props;

  return (
    <GithubButton
      variant="sponsor"
      showCount={false}
      color={color}
      {...props}
    />
  );
};

export default React.memo(Sponsor);
