import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  setAppTitle as dispatchSetAppTitle,
} from '../state/app/dispatches';

import SearchModal from '../component/SearchModal';
import AppBar from '../component/AppBar';

const Page = ({ history, location, children, title, setAppTitle }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  useLayoutEffect(() => {
    setAppTitle(title);
  }, [title]);

  useLayoutEffect(() => {
    setShowSearchModal(false);
  }, [location]);

  return (
    <>
      <nav className="sticky left-0 top-0 right-0 w-full h-12 bg-primary text-white shadow z-10">
        <AppBar
          title={title ?? 'yükleniyor'}
          onClickBackButton={() => history.goBack()}
          onClickSearchButton={() => setShowSearchModal(true)}
        />
      </nav>

      <div className="sm:max-w-lg mx-auto space-y-4 py-4">
        {children}
      </div>

      {showSearchModal && (
        <SearchModal
          onClose={() => setShowSearchModal(false)}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  appTitle: state.app.title,
});

const mapDispatchToProp = {
  setAppTitle: dispatchSetAppTitle,
};

export default connect(mapStateToProps, mapDispatchToProp)(withRouter(Page));
