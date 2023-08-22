import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    addButton : {
        width: 60,
        height: 60,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addFields : {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position : 'absolute',
        backgroundColor: '#DCFFC9',
        bottom : 0,
    },
    addInput : {
        backgroundColor: 'white',
        height : 60,
        width: 320,
        borderColor : 'gray',
        borderRadius: 200,
        padding: 20,
    },
    btnText : {        
        flex: 1,
        fontSize: 40,
        fontWeight: 'bold',
    },
    container : {
        flex: 1,
        backgroundColor: '#DCFFC9',
    },
    taskContainer : {
        width: '95%',
        height: 60, 
        backgroundColor : 'white',
        justifyContent: 'center',
        borderRadius: 40,
        marginBottom: 20,
    },
    taskText : {
        marginStart: 15,
    },
    taskView : {
        alignItems: 'center',
    },
    title : {
        fontSize: 40,
        marginLeft: 20,
        marginTop: 40,
        marginBottom: 20,
    },

});

export default styles;