import React, { useLayoutEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import IStateRoot from '../store/interfaces/IStateRoot';
import {
  dispatchSetLoadingStatus,
  dispatchSetLoadingErrorText,
} from '../store/dispatches/appDispatches';
import {
  dispatchSetAutocomplete,
} from '../store/dispatches/dataDispatches';

import useQueryParams from '../hooks/useQueryParams';

import Home from '../pages/home/Index';
import Word from '../pages/word/Index';
import Saved from '../pages/saved/Index';
import History from '../pages/history/Index';
import NotFound from '../pages/notFound/Index';

import AppNavbarHeader from './AppNavbarHeader';
import AppNavbarFooter from './AppNavbarFooter';

const App = () => {
  const state = useSelector((state: IStateRoot) => state);
  const location = useLocation();

  const { w } = useQueryParams();

  const { autocomplete } = state.data;
  const { loading, loadingErrorText } = state.app;

  // set loading status
  useLayoutEffect(() => {
    if (autocomplete.length > 0) {
      dispatchSetLoadingStatus(false);
    }
  }, [autocomplete]);

  // set autocomplete
  useLayoutEffect(() => {
    if (autocomplete.length === 0) {
      fetch('/autocomplete.json')
        .then((response) => response.json())
        .then((response) => {
          dispatchSetAutocomplete(response);
        })
        .catch(() => {
          dispatchSetLoadingErrorText('Sözcükler yüklenirken beklenmeyen bir hata oluştu.');
        })
    }
  }, [autocomplete]);

  if (loading && !loadingErrorText) {
    return (
      <span className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-white text-4xl text-primary overflow-y-scroll p-4">
        yükleniyor
      </span>
    );
  }

  return (
    <>
      {location.pathname !== '/' &&
        <AppNavbarHeader />
      }

      <Switch>
        <Route path='/history' component={History} />
        <Route path='/saved' component={Saved} />

        <Route path='/word'>
          <Word word={`${w}`} key={`${w}`} />
        </Route>

        <Route path='/' component={Home} exact />

        <Route component={NotFound} />
      </Switch>

      <AppNavbarFooter />
    </>
  );
}
export default App;
