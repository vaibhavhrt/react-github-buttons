import React, { useEffect, useState } from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  owner: string;
  repo: string;
  color?: string;
}

const Watch: React.FC<IPropTypes> = (props) => {
  const { owner, repo, color = '#6a737d' } = props;
  const [watchersCount, setWatchersCount] = useState(0);

  useEffect(() => {
    const getCount = () => {
      fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((res) => res.json())
        .then((res) => {
          setWatchersCount(res.watchers_count);
        });
    };
    getCount();
  }, [owner, repo]);

  return (
    <GithubButton
      variant="watch"
      count={watchersCount}
      color={color}
      {...props}
    />
  );
};

export default React.memo(Watch);
