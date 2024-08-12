import { View, Text, StyleSheet, TextInput} from 'react-native'
import React from 'react'

const InputComp = ({label,placeholder}) => {
  return (
    <>
        <Text style={styles.label}>{label} :</Text>
        <TextInput placeholder={placeholder} style={styles.textInput}/>
    </>
  )
}

export default InputComp;


const styles = StyleSheet.create({

    label:{
        fontSize:16,
        fontWeight:'medium'

    },
    textInput:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        padding:10,
        marginTop:10
    }
})