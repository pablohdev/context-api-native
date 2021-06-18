import React from 'react';
import {FlatList} from 'react-native';

import {IItem} from '../../types/item';
import {ListContainer, ItemContainer, ItemText, Divider} from './styles';

interface ListProps {
  list: IItem[];
}
const List = ({list}: ListProps) => {
  const listItem = ({item}: {item: IItem}) => {
    const {id, name} = item;

    return (
      <ItemContainer key={id}>
        <ItemText>{name}</ItemText>
      </ItemContainer>
    );
  };

  return (
    <ListContainer>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={listItem}
      />
    </ListContainer>
  );
};

export default List;
