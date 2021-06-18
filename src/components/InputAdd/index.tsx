import React, {useState} from 'react';
import {Text} from 'react-native';

import {InputContainer, Input, ButtonAdd} from './styles';

interface InputAddProps {
  handleAddList(newTask: string): void;
}

const InputAdd = ({handleAddList}: InputAddProps) => {
  const [newTask, setNewTask] = useState('');

  const AddNewTask = () => {
    console.log('teste');
    handleAddList(newTask);
    setNewTask('');
  };

  return (
    <InputContainer>
      <Input
        value={newTask}
        onChangeText={(text: string) => setNewTask(text)}
      />
      <ButtonAdd onPress={AddNewTask}>
        <Text>Add</Text>
      </ButtonAdd>
    </InputContainer>
  );
};

export default InputAdd;
