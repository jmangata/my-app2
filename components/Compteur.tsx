
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Compteur = () => {
    //declaration de la variable nombre 
const incrementation = () => {
    console.log('incrémententation du compteur', nombre)
    setnombre(nombre + 1)
}
 const decrementation = () => {
    console.log('-',nombre)
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
            <Button title="+" onPress={incrementation}/>
            
            <Button title="-"onPress={decrementation}/>
            <Button title="0" onPress={reset}/>
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