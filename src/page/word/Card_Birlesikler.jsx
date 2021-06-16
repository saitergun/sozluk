import React, { useState } from 'react';

import Text from '../../component/Text';
import Icon from '../../component/Icon';
import List from '../../component/List';
import Card from '../../component/Card';
import Button from '../../component/Button';

const CardBirlesikler = ({ birlesikler }) => {
  const [showAll, setShowAll] = useState(false);

  const items = birlesikler?.split(', ') ?? [];

  return (
    <Card>
      <Card.Header>
        <Text title2>birleşikler</Text>
      </Card.Header>

      <List>
        {items.slice(0, !showAll ? 3 : undefined).map((item) => (
          <List.Item
            key={item}
            to={`/word?w=${item}`}
            justifyStart
          >
            <Icon name="RiSendPlaneLine" />

            <Text>{item}</Text>
          </List.Item>
        ))}

        {items.length > 3 && !showAll && (
          <Button
            onClick={() => setShowAll(true)}
          >
            {`tümünü göster (${items.length - 3} data)`}
          </Button>
        )}
      </List>
    </Card>
  );
};

export default CardBirlesikler;
