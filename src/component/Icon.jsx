import React from 'react';
import classNames from 'classnames';

import {
  RiSearch2Line,
  RiTimeLine,
  RiArrowLeftLine,
  RiCloseLine,
  RiHomeLine,
  RiLoaderLine,
  RiVolumeDownLine,
  RiSendPlaneLine,
  RiErrorWarningLine,
  RiBookmarkFill,
  RiBookmarkLine,
  RiLightbulbFlashLine,
} from 'react-icons/ri';

const ICONS = {
  RiSearch2Line,
  RiTimeLine,
  RiArrowLeftLine,
  RiCloseLine,
  RiHomeLine,
  RiLoaderLine,
  RiVolumeDownLine,
  RiSendPlaneLine,
  RiErrorWarningLine,
  RiBookmarkFill,
  RiBookmarkLine,
  RiLightbulbFlashLine,
};

const Icon = ({
  name,
  className,
  white,
  primary,
  secondary,
}) => {
  if (!Object.hasOwnProperty.call(ICONS, name)) {
    return null;
  }

  const Component = ICONS[name];

  return (
    <Component
      className={classNames({
        'text-white': white,
        'text-primary': primary,
        'text-secondary': secondary,
      }, className)}
    />
  );
};

export default Icon;
