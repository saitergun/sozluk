import React, { useState } from 'react';

import Text from '../../component/Text';
import Icon from '../../component/Icon';
import List from '../../component/List';
import Card from '../../component/Card';
import Button from '../../component/Button';

const CardAtasozleri = ({ atasozleri }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Card>
      <Card.Header>
        <Text title2>atasözleri ve deyimler</Text>
      </Card.Header>

      <List>
        {atasozleri.slice(0, !showAll ? 3 : undefined).map((item) => {
          return (
            <List.Item
              key={item.madde_id}
              to={`/word?w=${item.madde}`}
              justifyStart
            >
              <Icon name="RiSendPlaneLine" />

              <Text>{`${item.on_taki ?? ''}${item.madde}`}</Text>
            </List.Item>
          );
        })}

        {atasozleri.length > 3 && !showAll && (
          <Button
            onClick={() => setShowAll(true)}
          >
            tümünü göster ({atasozleri.length - 3} daha)
          </Button>
        )}
      </List>
    </Card>
  );
};

export default CardAtasozleri;
