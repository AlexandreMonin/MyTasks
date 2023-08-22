import { Text, View } from 'react-native';
import styles from '../assets/styles/Styles';

function Task(props) {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{props.text}</Text>
        </View>
    )
}

export default Task;