import React, {useState} from 'react';
import {theme} from './color';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  pressable,
} from 'react-native';

function ClassScreen() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState({});

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = event => setText(event);
  const addToDo = () => {
    if (text === '') {
      return;
    }
    //save to do
    const newToDos = {...toDos, [Date.now()]: {text, working}};
    setToDos(newToDos);
    setText('');
  };

  const deleteToDo = key => {
    const newToDos = {...toDos};
    delete newToDos[key];
    setToDos(newToDos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.buttonText,
              color: working ? 'white' : theme.grey,
            }}>
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.buttonText,
              color: !working ? 'white' : theme.grey,
            }}>
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          returnKeyType="done"
          value={text}
          placeholder={working ? 'Add a To Do' : 'Where do you want to go'}
          style={styles.input}></TextInput>
      </View>
      <ScrollView>
        {Object.keys(toDos).map(key =>
          toDos[key].working === working ? (
            <View style={styles.toDo}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Text style={styles.delete}>엑스</Text>
              </TouchableOpacity>
            </View>
          ) : null,
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 44,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toDoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  delete: {
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ClassScreen;
