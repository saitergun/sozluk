import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  removeHistory as dispatchRemoveHistory,
  clearHistory as dispatchClearHistory,
} from '../../state/data/dispatches';

import Page from '../../template/Page';

import Text from '../../component/Text';
import Icon from '../../component/Icon';
import IconButton from '../../component/IconButton';
import List from '../../component/List';
import Card from '../../component/Card';
import Button from '../../component/Button';
import MessageCard from '../../component/MessageCard';
import Dialog from '../../component/Dialog';

const PageHistory = ({ history, removeHistory, clearHistory }) => {
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);

  return (
    <>
      <Page title="geçmiş">
        {history.length === 0 && (
          <MessageCard
            icon="RiTimeLine"
            message="görüntülediğin son içerikler burada listenecek"
          />
        )}

        {history.length > 0 && (
          <Card>
            <List>
              {history.map((word) => {
                return (
                  <List.Item
                    key={word}
                    justifyBetween
                    compact
                  >
                    <Link to={`/word?w=${word}`}>
                      <Text>{word}</Text>
                    </Link>

                    <IconButton
                      small
                      onClick={() => setShowRemoveDialog(word)}
                    >
                      <Icon name="RiCloseLine" />
                    </IconButton>
                  </List.Item>
                );
              })}
            </List>
          </Card>
        )}

        {history.length > 2 && (
          <span className="grid px-6">
            <Button
              secondary
              onClick={() => setShowClearDialog(true)}
            >
              TÜMÜNÜ KALDIR
            </Button>
          </span>
        )}
      </Page>

      {showRemoveDialog && (
        <span className="fixed inset-0 w-full h-full flex items-end sm:items-center justify-center bg-black bg-opacity-75 z-30">
          <Dialog
            title={showRemoveDialog}
            description="Bu söz geçmişinden kaldırılacak"
            cancelButtonLabel="VAZGEÇ"
            onClickCancelButton={() => setShowRemoveDialog(false)}
            submitButtonLabel="KALDIR"
            onClickSubmitButton={() => {
              removeHistory(showRemoveDialog);

              setShowRemoveDialog(false);
            }}
            onClose={() => setShowRemoveDialog(false)}
          />
        </span>
      )}

      {showClearDialog && (
        <span className="fixed inset-0 w-full h-full flex items-end sm:items-center justify-center bg-black bg-opacity-75 z-30">
          <Dialog
            title="Tümünü Kaldır"
            description="Geçmişteki tüm sözler kaldırılacak"
            cancelButtonLabel="VAZGEÇ"
            onClickCancelButton={() => setShowClearDialog(false)}
            submitButtonLabel="KALDIR"
            onClickSubmitButton={() => {
              clearHistory();

              setShowClearDialog(false);
            }}
            onClose={() => setShowClearDialog(false)}
          />
        </span>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  history: state.data.history,
});

const mapDispatchToProp = {
  removeHistory: dispatchRemoveHistory,
  clearHistory: dispatchClearHistory,
};

export default connect(mapStateToProps, mapDispatchToProp)(PageHistory);
