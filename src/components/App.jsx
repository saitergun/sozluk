import React, { useLayoutEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useQueryParams from '../hooks/useQueryParams';

import Home from '../pages/Home/Index';
import Word from '../pages/Word/Index';
import Saved from '../pages/Saved/Index';
import History from '../pages/History/Index';
import NotFound from '../pages/NotFound/Index';

import AppNavbarHeader from './AppNavbarHeader';
import AppNavbarFooter from './AppNavbarFooter';

const App = () => {
  const [autocompleteUpdated, setAutocompleteUpdated] = useState(false);
  const [autocompleteUpdateCount, setAutocompleteUpdateCount] = useState(0);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();

  const { w } = useQueryParams();

  const { autocomplete } = state.data;
  const { loading, loadingErrorText } = state.app;

  // set loading status
  useLayoutEffect(() => {
    if (autocomplete.length > 0) {
      dispatch({ type: 'SET_APP_LOADING_STATUS', payload: false })
    }
  }, [dispatch, autocomplete.length]);

  // set autocomplete
  useLayoutEffect(() => {
    if (!autocompleteUpdated && autocompleteUpdateCount < 3) {
      fetch('/autocomplete.json')
        .then((response) => response.json())
        .then((response) => {
          dispatch({ type: 'SET_AUTOCOMPLETE', payload: response });
          setAutocompleteUpdated(true);
          setAutocompleteUpdateCount(3);
        })
        .catch(() => {
          dispatch({ type: 'SET_APP_LOADING_ERROR_TEXT', payload: 'Sözcükler yüklenirken beklenmeyen bir hata oluştu.' });
          setAutocompleteUpdated(false);
          setAutocompleteUpdateCount(autocompleteUpdateCount+1);
        })
    }
  }, [dispatch, autocompleteUpdated, autocompleteUpdateCount]);

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
          <Word word={w} key={w} />
        </Route>

        <Route path='/' component={Home} exact />

        <Route component={NotFound} />
      </Switch>

      <AppNavbarFooter />
    </>
  );
}

export default App;
