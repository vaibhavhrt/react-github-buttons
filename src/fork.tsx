import React, { useEffect, useState } from 'react';

import GithubButton from './lib/githubButton';

interface IPropTypes {
  owner: string;
  repo: string;
  color?: string;
}

const Fork: React.FC<IPropTypes> = (props) => {
  const { owner, repo, color = '#6a737d' } = props;
  const [forksCount, setForksCount] = useState(0);

  useEffect(() => {
    const getForkCount = async () => {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      const resJson = await res.json();
      setForksCount(resJson.forks_count);
    };
    getForkCount();
  }, [owner, repo]);

  return (
    <GithubButton variant="fork" count={forksCount} color={color} {...props} />
  );
};

export default React.memo(Fork);
