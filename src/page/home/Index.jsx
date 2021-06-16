import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { useStartTyping } from 'react-use';

import {
  actionSetAppTitle,
} from '../../state/app/actions';

import SearchModal from '../../component/SearchModal';
import Icon from '../../component/Icon';

const FakeInput = ({ onClick, onFocus }) => {
  return (
    <button
      type="button"
      className="w-full h-12 flex items-center justify-center font-light text-20/16 text-alternative-400 cursor-text bg-white border rounded-sm space-x-3 z-10"
      onClick={onClick}
      onFocus={onFocus}
    >
      <Icon name="RiSearch2Line" />

      <span>sözcük ara</span>
    </button>
  );
};

const PageHome = ({ appName, setAppTitle }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  useLayoutEffect(() => {
    setAppTitle();
  }, []);

  useStartTyping(() => setShowSearchModal(true));

  if (showSearchModal) {
    return <SearchModal onClose={() => setShowSearchModal(false)} />;
  }

  return (
    <>
      <div className="w-full h-full flex items-start justify-center pt-12 px-4 sm:pt-60">
        <div className="w-full max-w-lg flex flex-col items-center justify-center space-y-6">
          <header className="relative">
            <h1 className="font-black text-60/16 sm:text-72/16 text-primary">{appName}</h1>
          </header>

          <FakeInput
            onClick={() => setShowSearchModal(true)}
            onFocus={() => setShowSearchModal(true)}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  appName: state.app.name,
});

const mapDispatchToProps = {
  setAppTitle: actionSetAppTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
