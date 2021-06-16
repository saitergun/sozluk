import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import {
  startApp as dispatchStartApp,
} from './state/app/dispatches';

import Icon from './component/Icon';
import BottomNavbar from './component/BottomNavbar';

import PageNotFound from './page/notFound/Index';
import PageHome from './page/home/Index';
import PageWord from './page/word/Index';
import PageBookmarks from './page/bookmarks/Index';
import PageHistory from './page/history/Index';

const App = ({ startApp, loading, loadingErrorText }) => {
  useLayoutEffect(() => {
    startApp();
  }, []);

  if (loading && !loadingErrorText) {
    return (
      <span className="fixed inset-0 w-full h-full flex items-center justify-center bg-white text-primary overflow-hidden p-8">
        <Icon
          className="text-72/16 animate-spin"
          name="RiLoaderLine"
        />
      </span>
    );
  }

  return (
    <>
      <Switch>
        <Route path="/bookmarks" component={PageBookmarks} />
        <Route path="/history" component={PageHistory} />
        <Route path="/word" component={PageWord} />
        <Route path="/" component={PageHome} exact />

        <Route path="*" component={PageNotFound} />
      </Switch>

      <nav className="fixed left-0 bottom-0 right-0 h-13 z-20">
        <BottomNavbar
          items={[
            {
              to: '/',
              icon: 'RiHomeLine',
            },
            {
              to: '/bookmarks',
              icon: 'RiBookmarkLine',
            },
            {
              to: '/history',
              icon: 'RiTimeLine',
            },
          ]}
        />
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.loading,
  loadingErrorText: state.app.loadingErrorText,
});

const mapDispatchToProps = {
  startApp: dispatchStartApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
