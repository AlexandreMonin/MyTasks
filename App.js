import { Text, ScrollView, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './assets/styles/Styles';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  return (
    <View style={styles.container}>

      <View>

        <Text style={styles.title}>Mes Tâches</Text>

      </View>

      <ScrollView contentContainerStyle={styles.taskView}>

        {
          taskItems.map((item, index) => {
            return (
              <Task key={index} text={item}></Task>
            )
          })
        }

      </ScrollView>

      <KeyboardAvoidingView style={styles.addFields}>

        <TextInput style={styles.addInput} placeholder='Ajouter une tâche...' value={task} onChangeText={text => setTask(text)}></TextInput>

        <TouchableOpacity style={styles.addButton} onPress={() => addTask()}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}


