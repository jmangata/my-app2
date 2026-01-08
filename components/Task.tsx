

import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const Task = () => {
// initialisation des variable d'etat du composant.
    const [tache, settache] = useState('');
    const [dataTasks, setDataTasks] = useState([])
//fonction pour enregistrer une tache

//rendu d'une tache 
const renderTask = ({item}) => { 
   
    return (<View><Text>{{}}</Text></View>)
}
//fin de rendu d'une tache

const saveTask = () => {
if (tache==='') {
    Alert.alert('Erreur', 'Veuillez entrer une tâche');
    return;
} 

//fin de la verification   
//formatage d'une tache 

const newtask = {id: Date.now().toString(),
    task:tache, 
    complete:false
}
console.log(newtask)

 


console.log('valeur texteinput',tache)
}

    return (
        <View style={styles.content}>
            <Text style={styles.title}></Text>
            <TextInput
                value={tache} onChangeText={settache}
                placeholder='saisir une tache'
            />
            <Button title='ajouter' 
            onPress={saveTask}/>
            <FlatList
            data={dataTasks}
            renderItem={renderTask}
            keyExtractor={item=>item.id}


            />
        {/* fin fonction  */}
        


        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
    },
    title: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
    }
})