import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Chocolat(props) {

  const { couleur, marque } = props;
  return (
    <View style={styles.choco}>
      <Text>Chocolat {couleur}! {marque}! </Text>

    </View>
  )
}


const styles = StyleSheet.create({
  choco: {
    padding: 15,
    backgroundColor: 'brown',
    borderRadius: 30,
  }
})