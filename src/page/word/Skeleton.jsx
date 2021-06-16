import React from 'react';
import classNames from 'classnames';

import Page from '../../template/Page';

import List from '../../component/List';
import Card from '../../component/Card';

const Item = ({ classes }) => <span className={classNames('block bg-alternative-200 rounded-sm animate-pulse', classes)} />;

const PageWordSkeleton = () => (
  <Page title="yükleniyor">
    <Card>
      <Card.Header>
        <span className="flex items-start justify-between">
          <Item classes="w-32 h-8" />

          <Item classes="w-6 h-6" />
        </span>
      </Card.Header>

      <List>
        <List.Item>
          <Item classes="w-12/12 h-3" />

          <Item classes="w-3/12 h-3 mt-2" />
        </List.Item>

        <List.Item>
          <Item classes="w-8/12 h-3" />
        </List.Item>

        <List.Item>
          <Item classes="w-11/12 h-3" />

          <Item classes="w-3/12 h-3 mt-2" />
        </List.Item>
      </List>
    </Card>
  </Page>
);

export default PageWordSkeleton;
