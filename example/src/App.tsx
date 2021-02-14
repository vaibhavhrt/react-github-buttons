import React from 'react';

import { Fork, Sponsor, Star, Watch, UsedBy } from 'react-github-buttons';

const App: React.FC = () => {
  return (
    <div>
      <Star owner="vaibhavhrt" repo="react-github-buttons" />
      <Fork owner="vaibhavhrt" repo="react-github-buttons" />
      <Watch owner="vaibhavhrt" repo="react-github-buttons" />
      <UsedBy owner="vaibhavhrt" repo="react-github-buttons" count={0} />
      <Sponsor owner="vaibhavhrt" repo="react-github-buttons" />
    </div>
  );
};

export default React.memo(App);
