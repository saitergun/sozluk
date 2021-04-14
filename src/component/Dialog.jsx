import React, { useRef, useEffect } from 'react';
import { useClickAway, useKey } from 'react-use';

import Text from './Text';
import Button from './Button';

const Dialog = ({ title, description, cancelButtonLabel, onClickCancelButton, submitButtonLabel, onClickSubmitButton, onClose }) => {
  const containerRef = useRef();
  const submitButtonRef = useRef();

  useClickAway(containerRef, onClose);

  useKey('Escape', onClose);

  // focus submit button
  useEffect(() => {
    setTimeout(() => {
      submitButtonRef.current?.focus();
    }, 5);
  }, []);

  return (
    <section className="w-full sm:max-w-sm bg-white rounded-t-sm sm:rounded-sm space-y-6 p-6" ref={containerRef}>
      <main className="text-center space-y-1.5">
        <Text title2 bold primary>{title}</Text>

        <Text large>{description}</Text>
      </main>

      <footer className="grid grid-cols-2 gap-4">
        <Button
          onClick={onClickCancelButton}
        >{cancelButtonLabel}</Button>

        <Button
          onClick={onClickSubmitButton}
          ref={submitButtonRef}
          primary
        >{submitButtonLabel}</Button>
      </footer>
    </section>
  );
};

export default Dialog;
