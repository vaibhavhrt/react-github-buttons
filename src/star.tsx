import React, { useEffect, useState } from 'react';

import GithubButton from './lib/githubButton';

export interface IPropTypes {
  owner: string;
  repo: string;
  color?: string;
}

const Star: React.FC<IPropTypes> = (props) => {
  const { owner, repo, color = '#6a737d' } = props;
  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      const resJson = await res.json();
      setStargazersCount(resJson.stargazers_count);
    };
    getCount();
  }, [owner, repo]);

  return (
    <GithubButton
      color={color}
      variant="star"
      count={stargazersCount}
      {...props}
    />
  );
};

export default React.memo(Star);
