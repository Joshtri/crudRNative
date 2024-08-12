import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import FIREBASE from '../../config/firebase';
import CardKontak from '../../components/Card/CardKontak';

export default class Home extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        kontaks: {},
        kontaksKey: [],
      };
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        FIREBASE.database()
          .ref('Kontak')
          .once('value')
          .then((querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let kontakItem = {...data};
    
            this.setState({
              kontaks: kontakItem,
              kontaksKey: Object.keys(kontakItem),
            });
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    };

  render() {
    const { kontaks, kontaksKey } = this.state;



    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Daftar Kontak</Text>
          <View style={styles.garis} />
        </View>

        <View style={styles.listKontak}>
          {kontaksKey.length > 0 ? (
            kontaksKey.map((key) => (
              <CardKontak
                key={key}
                kontakItem={kontaks[key]}
                id={key}
                {...this.props}
              
              />
            ))
          ) : (
            <Text>Daftar Kosong</Text>
          )}
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={() => this.props.navigation.navigate('TambahKontak')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tambah</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  wrapperButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
    zIndex: 1, // Ensure the button stays above other components
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
