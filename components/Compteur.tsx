
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Compteur = () => {
    //declaration de la variable nombre 
const incrementation = (second) => { third 
    console.log('incrémententation du compteur',nombre)
    setnombre(nombre + 1)
}

 const decrementation = () => {
    console.log('décrémentation du compteur',nombre)
    setnombre (nombre - 1)   
}   
const reset = () => {
    console.log('reset du compteur',nombre)
    setnombre (0)   
}
    const [nombre, setnombre] = useState(0)
    return (
        <View style={styles.comp}>
            <Text>Compteur:{nombre}</Text>
            <Button title="Incrémentation" onPress={incrementation}/>
            
            <Button title="Décrémentation"onPress={decrementation}/>
            <Button title="Reset" onPress={reset}/>
        </View>
    )
}

export default Compteur

const styles = StyleSheet.create({
    comp: {    
        
    alignItems: 'center',
    alignContent: 'space-between',
    rowGap: 10

    }
})