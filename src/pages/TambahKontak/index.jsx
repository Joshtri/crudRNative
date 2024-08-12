import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import React, { Component } from 'react';
import InputComp from '../../components/Input/InputComp';
import FIREBASE from '../../config/firebase/index';

export default class TambahKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomor: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {

    if(this.state.nama && this.state.nomor && this.state.alamat){
        
        const kontakReferensi = FIREBASE.database().ref('Kontak');

        const kontak= {
            nama: this.state.nama,
            nomor: this.state.nomor,
            alamat: this.state.alamat,
        }

        kontakReferensi.push(kontak).then((data)=>{
            Alert.alert('Success', 'Kontak Tersimpan');
            this.props.navigation.replace('Home');

        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(`masuk submit`);
        console.log(this.state);

    }
    else{
        Alert.alert('Error', 'nama, nomor hp, dan alamat wajib diisi');
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputComp
          label={'Nama'}
          placeholder={'masukkan nama'}
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputComp
          label={'No.HP'}
          value={this.state.nomor}
          onChangeText={this.onChangeText}
          placeholder={'masukkan no.HP'}
          keyboardType={'number-pad'}
          namaState="nomor"
        />
        <InputComp
          label={'Alamat'}
          value={this.state.alamat}
          onChangeText={this.onChangeText}
          placeholder={'masukkan alamat'}
          isTextArea={true}
          namaState="alamat"
        />

        <TouchableOpacity style={styles.btn} onPress={()=> this.onSubmit()}>
          <Text style={styles.textBtn}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
