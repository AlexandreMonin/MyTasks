import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../assets/styles/Styles';

function AddFields() {
    return (
        <KeyboardAvoidingView style={styles.addFields}>

            <TextInput style={styles.addInput} placeholder='Ajouter une tâche...'></TextInput>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default AddFields;