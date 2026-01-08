
import Task from '@/components/Task'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Index = () => {
  return (
    <View style={styles.content}>
     <Task/>

    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  content: {
  
    flex: 1,
    backgroundColor: 'green',
  }
})