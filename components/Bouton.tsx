import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Bouton() {
  return (
    <View style={styles.buu}>
      <Text>Bouton</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buu: {
        padding: 15,
        backgroundColor: 'blue',
        borderRadius: 30,
        marginTop: 20,
    }
})