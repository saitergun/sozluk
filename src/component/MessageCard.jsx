import React from 'react';

import Text from './Text';
import Card from './Card';
import Icon from './Icon';
import Button from './Button';

const MessageCard = ({
  icon,
  message,
  buttonLabel,
  onClickButton,
}) => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center gap-4 text-center p-8">
        {icon && (
          <Icon name={icon} className="text-60/16" />
        )}

        {message && (
          <Text large>{message}</Text>
        )}

        {(onClickButton && buttonLabel) && (
          <Button
            onClick={onClickButton}
            primary
          >
            {buttonLabel}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default MessageCard;
