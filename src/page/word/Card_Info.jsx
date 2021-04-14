import React from 'react';

import Text from '../../component/Text';
import Icon from '../../component/Icon';
import List from '../../component/List';
import Card from '../../component/Card';
import FlagCombine from '../../component/FlagCombine';

const CardInfo = ({ word }) => {
  if (!word.lisan && !word.telaffuz) {
    return null;
  }

  return (
    <Card>
      <List>
        {word.lisan && (
          <List.Item justifyBetween compact>
            <span className="flex items-center justify-start space-x-2 py-0.5">
              <FlagCombine text={word.lisan} />

              <Text>{word.lisan}</Text>
            </span>

            <Text>dil</Text>
          </List.Item>
        )}

        {word.telaffuz && (
          <List.Item justifyBetween compact>
            <span className="flex items-center justify-start space-x-2 py-0.5 rounded-lg">
              <Icon name="RiVolumeDownLine" className="text-24/16" />

              <Text>{word.telaffuz}</Text>
            </span>

            <Text>söyleyiş</Text>
          </List.Item>
        )}
      </List>
    </Card>
  );
};

export default CardInfo;
