import React from 'react';
import {View} from 'react-native';

import InputAdd from '../InputAdd';
import {IItem} from '../../types/item';

import {TitleHeader} from './styles';

interface HeaderProps {
  list: IItem[];
  handleAddList(newTask: string): void;
}

const Header = ({list, handleAddList}: HeaderProps) => {
  return (
    <View>
      <TitleHeader>{list?.length || 0} Tarefas</TitleHeader>
      <InputAdd handleAddList={handleAddList} />
    </View>
  );
};

export default Header;
