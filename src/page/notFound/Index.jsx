import React from 'react';

import Page from '../../template/Page';

import MessageCard from '../../component/MessageCard';

const PageNotFound = () => {
  return (
    <Page title="404">
      <MessageCard
        icon="RiSearch2Line"
        message="aradığın şey burada yok"
      />
    </Page>
  );
};

export default PageNotFound;
