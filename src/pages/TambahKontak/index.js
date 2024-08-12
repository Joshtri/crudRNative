import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import InputComp from '../../components/Input/InputComp'


export default class TambahKontak extends Component {
  render() {
    return (
      <View style={styles.pages}>
            <InputComp label={'Nama'} placeholder={'masukkan nama'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages:{
        flex:1,
        padding:30
    },

})