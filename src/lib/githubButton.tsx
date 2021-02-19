import React from 'react';

import {
  GitForkIcon,
  StarIcon,
  EyeIcon,
  PackageDependentsIcon,
  HeartIcon,
  IconProps,
} from '@primer/octicons-react';

import classes from '../styles.css';

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
  Icon: React.FC<IconProps>;
} {
  let title: string;
  let btnTitle: string;
  let label: string;
  let countUrl: string;
  if (variant === 'star') {
    title = 'Star';
    btnTitle = `Star ${owner}/${repo}`;
    label = `${count} users starred this repository`;
    countUrl = `https://github.com/${owner}/${repo}/stargazers`;
    return { title, btnTitle, label, countUrl, Icon: StarIcon };
  } else if (variant === 'fork') {
    title = 'Fork';
    btnTitle = `Fork your own copy of ${owner}/${repo} to your account`;
    label = `${count} users forked this repository`;
    countUrl = `https://github.com/${owner}/${repo}/network/members`;
    return { title, btnTitle, label, countUrl, Icon: GitForkIcon };
  } else if (variant === 'watch') {
    title = 'Watch';
    btnTitle = '';
    label = `${count} users are watching this repository`;
    countUrl = `https://github.com/${owner}/${repo}/watchers`;
    return { title, btnTitle, label, countUrl, Icon: EyeIcon };
  } else if (variant === 'usedby') {
    title = 'Used by';
    btnTitle = '';
    label = `${count} repositories depend on this package`;
    countUrl = `https://github.com/${owner}/${repo}/network/dependents`;
    return { title, btnTitle, label, countUrl, Icon: PackageDependentsIcon };
  } else if (variant === 'sponsor') {
    title = 'Sponsor';
    btnTitle = `Sponsor ${owner}/${repo}`;
    label = '';
    countUrl = '';
    return { title, btnTitle, label, countUrl, Icon: HeartIcon };
  }
  throw new Error(
    'Invalid Variant, supply one of [star, fork, watch, usedby, sponsor]',
  );
}

interface IPropTypes {
  owner: string;
  repo: string;
  variant: string;
  count?: number;
  showCount?: boolean;
  color: string;
}

const GithubButton: React.FC<IPropTypes> = (props) => {
  const { owner, repo, variant, count = 0, showCount = true, color } = props;
  const { title, btnTitle, label, countUrl, Icon } = getDataForVariant(
    variant,
    count,
    owner,
    repo,
  );

  const inlineStyle = showCount ? undefined : { borderRadius: '.25em' };

  return (
    <div className={classes.root}>
      <a
        title={btnTitle}
        className={classes.button}
        style={inlineStyle}
        href={`https://github.com/${owner}/${repo}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span style={{ color }}>
          <Icon />
        </span>
        {` ${title}`}
      </a>
      {showCount && (
        <a
          className={classes.count}
          href={countUrl}
          aria-label={label}
          target="_blank"
          rel="noreferrer noopener"
        >
          {count}
        </a>
      )}
    </div>
  );
};

export default React.memo(GithubButton);
