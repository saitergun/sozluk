import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useMemo,
} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import qs from 'qs';

import {
  addHistory as dispatchAddHistory,
  toggleBookmark as dispatchToggleBookmark,
} from '../../state/data/dispatches';

import Page from '../../template/Page';

import MessageCard from '../../component/MessageCard';

import Skeleton from './Skeleton';

import Tab from './Tab';
import CardInfo from './Card_Info';
import CardAtasozleri from './Card_Atasozleri';
import CardBirlesikler from './Card_Birlesikler';
import CardWord from './Card_Word';

const useLocationParams = () => qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});

const PageWord = ({
  history,
  location,
  bookmarks,
  addHistory,
  toggleBookmark,
}) => {
  const { w } = useLocationParams(location);

  const [word, setWord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingErrorMessage, setLoadingErrorMessage] = useState(null);

  const [selectedInsideWordIndex, setSelectedInsideWordIndex] = useState(0);

  const bookmarked = useMemo(() => bookmarks.some((b) => b === w), [bookmarks, w]);
  const selectedInsideWord = useMemo(() => word[selectedInsideWordIndex], [
    word, selectedInsideWordIndex,
  ]);

  // redirect if not taken w
  useLayoutEffect(() => {
    if (w === undefined || w === '') {
      history.push('/');
    }
  }, [w]);

  useEffect(() => {
    const abortController = new AbortController();

    setWord([]);
    setLoading(true);
    setLoadingErrorMessage(null);

    if (w) {
      fetch(`https://sozluk.gov.tr/gts?ara=${w}`, { signal: abortController.signal })
        .then((response) => response.json())
        .then((response) => {
          if (response?.error) {
            setLoadingErrorMessage(response.error);
          } else {
            setWord(response);

            addHistory(w);
          }
        })
        .catch(() => {
          if (!abortController.signal.aborted) {
            setLoadingErrorMessage('Söz yüklenirken beklenmeyen bir hata oluştu.');
          }
        })
        .finally(() => setLoading(false));
    }

    return () => {
      abortController.abort();

      setWord([]);
      setLoading(false);
      setLoadingErrorMessage(null);
      setSelectedInsideWordIndex(0);
    };
  }, [w]);

  if (!w) {
    return null;
  }

  if (loadingErrorMessage) {
    return (
      <Page title={w}>
        <MessageCard
          icon="RiSearch2Line"
          message={loadingErrorMessage}
        />
      </Page>
    );
  }

  if (loading || word.length === 0) {
    return <Skeleton />;
  }

  return (
    <Page title={w}>
      {word.length > 1 && (
        <Tab
          count={word.length}
          selectedIndex={selectedInsideWordIndex}
          onSelectIndex={setSelectedInsideWordIndex}
        />
      )}

      <CardInfo
        word={selectedInsideWord}
      />

      <CardWord
        word={selectedInsideWord}
        bookmarked={bookmarked}
        onClickToggleBookmark={() => toggleBookmark(w)}
      />

      {selectedInsideWord?.atasozu && (
        <CardAtasozleri
          atasozleri={selectedInsideWord?.atasozu}
        />
      )}

      {selectedInsideWord?.birlesikler && (
        <CardBirlesikler
          birlesikler={selectedInsideWord?.birlesikler}
        />
      )}
    </Page>
  );
};

const mapStateToProps = (state) => ({
  bookmarks: state.data.bookmarks,
});

const mapDispatchToProps = {
  addHistory: dispatchAddHistory,

  toggleBookmark: dispatchToggleBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageWord));
