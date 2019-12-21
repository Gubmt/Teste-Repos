import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  InputFilter,
  Error,
  ErrorBox,
  ErrorText,
  Box,
  Cards,
  Name,
  Desc,
  Url,
} from './styles';

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('');

  async function loadRepo() {
    const response = await api.get('/repositories');

    setRepos(response.data);
  }

  useEffect(() => {
    loadRepo();
  }, []);

  useEffect(() => {
    if (filter.length >= 3) {
      const data = repos.filter(repo => {
        return repo.name.startsWith(filter.trim());
      });

      setRepos(data);
    }
    if (filter === '') loadRepo();
  }, [filter]); // eslint-disable-line

  return (
    <Container>
      <InputFilter
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Filtrar"
        onChangeText={setFilter}
        value={filter}
      />
      {repos.length === 0 ? (
        <Error>
          <ErrorBox>
            <ErrorText>Nenhum repositório encontrado</ErrorText>
            <Icon name="error-outline" size={100} color="#999" />
          </ErrorBox>
        </Error>
      ) : (
        <Box
          data={repos}
          keyExtractor={repo => String(repo.id)}
          renderItem={({ item }) => (
            <Cards>
              <Name>{item.name}</Name>
              <Desc>{item.description}</Desc>
              <Url>{item.url}</Url>
            </Cards>
          )}
        />
      )}
    </Container>
  );
}
