
import Compteur from '@/components/Compteur';
import CompteurRedux from '@/components/CompteurRedux';
import ModifierCompteur from '@/components/ModifierCompteur';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from '../store/store';

const Index = () => {
  return (
    <Provider store = {store}>
    <View style={styles.content}>
     
      <Compteur/>
      <CompteurRedux/>
      <ModifierCompteur/>
    </View>
    </Provider>
  )
}

export default Index

const styles = StyleSheet.create({
  content: {
  
    flex: 1,
    backgroundColor: 'green',
  }
})