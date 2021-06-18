import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import {IItem} from '../../types/item';

import Header from '../../components/Header';
import List from '../../components/List';

import {Container, HeaderContainer} from './styles';

const Home: React.FC = () => {
  const [list, setList] = useState<IItem[]>([]);

  const handleAddList = (newTask: string) => {
    if (newTask) {
      const objNewTask = {
        id: Date.now(),
        name: newTask,
      };
      setList(prev => [...prev, objNewTask]);
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderContainer>
        <Header list={list} handleAddList={handleAddList} />
      </HeaderContainer>
      <List list={list} />
    </Container>
  );
};

export default Home;
