import React from 'react';
import {View, FlatList} from 'react-native';

import CardComponent from './components/CardComponent';

const Tela1 = () => {
  const data = [
    {
      key: '0',
      filme: 'DUNGEONS & DRAGONS: HONOR AMONG THIEVES',
      ano: 2023,
      estilo: 'Fantasy, Adventure, Action, Comedy',
      direcao: 'Jonathan M. Goldstein, John Francis Daley',
      image:
        'https://resizing.flixster.com/IwFK1YWt1-pAzhnGdY9KTLLjEQM=/fit-in/180x240/v2/https://resizing.flixster.com/eWLvyboOEGZRS2JiBDZ6eRD4Hps=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU2MTc5YzE5LTc3YjktNDIyMS05ZWZhLTNlNzBjZmZkM2JlMS5qcGc=',
      descricao:
        'A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people. Dungeons & Dragons: Honor Among Thieves brings the rich world and playful spirit of the legendary roleplaying game to the big screen in a hilarious and action-packed adventure.',
    },
    {
      key: '1',
      filme: 'GUARDIANS OF THE GALAXY VOL. 3',
      ano: 2023,
      estilo: 'Sci-fi, Adventure, Action, Fantasy, Comedy',
      direcao: 'James Gunn',
      image:
        'https://resizing.flixster.com/5seKiRmH981Y2amg0vmHmj5WnXo=/fit-in/180x240/v2/https://resizing.flixster.com/p8g-u3ZgPuxrg4x7aq1tidyffGg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiZDg0OTc0LWVkMTktNDVhYS05ODljLTNkMjYxMjA0OTdjMy5qcGc=',
      descricao:
        'In Marvel Studios "Guardians of the Galaxy Vol. 3" our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <CardComponent data={item} />}
      />
    </View>
  );
};

export default Tela1;
