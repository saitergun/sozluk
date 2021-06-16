import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  removeBookmark as dispatchRemoveBookmark,
  clearBookmarks as dispatchClearBookmarks,
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

const PageBookmarks = ({ bookmarks, removeBookmark, clearBookmarks }) => {
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);

  return (
    <>
      <Page title="kayıtlı">
        {bookmarks.length === 0 && (
          <MessageCard
            icon="RiBookmarkLine"
            message="kaydettiğin içerik burada listenecek"
          />
        )}

        {bookmarks.length > 0 && (
          <Card>
            <List>
              {bookmarks.map((word) => {
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

        {bookmarks.length > 2 && (
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
            description="Bu söz kayıtlı listesinden kaldırılacak"

            cancelButtonLabel="VAZGEÇ"
            onClickCancelButton={() => setShowRemoveDialog(false)}

            submitButtonLabel="KALDIR"
            onClickSubmitButton={() => {
              removeBookmark(showRemoveDialog);

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
              clearBookmarks();

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
  bookmarks: state.data.bookmarks,
});

const mapDispatchToProp = {
  removeBookmark: dispatchRemoveBookmark,
  clearBookmarks: dispatchClearBookmarks,
};

export default connect(mapStateToProps, mapDispatchToProp)(PageBookmarks);
