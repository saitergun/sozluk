import React from 'react';

import Text from '../../component/Text';
import Icon from '../../component/Icon';
import IconButton from '../../component/IconButton';
import List from '../../component/List';
import Card from '../../component/Card';
import Tag from '../../component/Tag';

const AnlamOrnekler = ({ ornekler }) => ornekler.map((ornek) => {
  const yazar = ornek?.yazar?.length > 0 && ` (${ornek.yazar.map((y) => y.tam_adi)})`;

  return (
    <Text
      key={ornek.ornek_id}
      small
      muted
    >
      {`${ornek.ornek}${yazar}`}
    </Text>
  );
});

const CardWord = ({ word, bookmarked, onClickToggleBookmark }) => (
  <Card>
    <Card.Header>
      <span className="flex items-start justify-between gap-2">
        <span className="flex-1">
          <Text title1 bold>{word.madde}</Text>
        </span>

        <IconButton onClick={onClickToggleBookmark}>
          <Icon
            name={bookmarked ? 'RiBookmarkFill' : 'RiBookmarkLine'}
            primary={bookmarked}
          />
        </IconButton>
      </span>
    </Card.Header>

    {word?.anlamlarListe && (
    <List>
      {word.anlamlarListe
        .sort((a, b) => Number(a.anlam_sira) - Number(b.anlam_sira))
        .map((anlam) => (
          <List.Item key={anlam.anlam_id}>
            <Text large>
              {anlam?.ozelliklerListe && anlam.ozelliklerListe.map((ozellik) => (
                <Tag
                  key={ozellik.ozellik_id}
                  classes="mr-1.5"
                  secondary
                >
                  {ozellik.tam_adi}
                </Tag>
              ))}

              {anlam.anlam}
            </Text>

            {anlam?.orneklerListe && (
            <>
              <span className="w-full h-1.5 block" />

              <AnlamOrnekler ornekler={anlam.orneklerListe} />
            </>
            )}
          </List.Item>
        ))}
    </List>
    )}
  </Card>
);

export default CardWord;
