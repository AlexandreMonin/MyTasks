import { Text, ScrollView, View } from 'react-native';
import styles from './assets/styles/Styles';
import AddFields from './components/AddFields';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <View>

        <Text style={styles.title}>Mes Tâches</Text>

      </View>
      
      <ScrollView contentContainerStyle={styles.taskView}>

        <Task text="Tâche 1"></Task>
        <Task text="Tâche 2"></Task>
        <Task text="Tâche 3"></Task>
        <Task text="Tâche 4"></Task>
            
      </ScrollView>

      <AddFields></AddFields>

    </View>
  );
}


