import React, { Component } from 'react';
import {View, Alert, Text, StyleSheet, Dimensions} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class ViewBarCode extends Component {    


    static navigationOptions = {
        title: 'Código de Barras'
    };
    state = {
        hasCameraPermission: null
    };

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
          hasCameraPermission: status === 'granted',
      });
    };

    _handleBarCodeRead = data => {
        let variable = JSON.stringify(data);
        let stock = variable;
        Alert.alert(
          'Código de Barras',stock
          );
    };

    render() {
        const {width2} = Dimensions.get('window');
        const {height2} = Dimensions.get('window');

        console.log(width2);
        
        return (
          <View style={styles.container}>
          {this.state.hasCameraPermission === null ?
              <Text>Solicitud de Permiso de Camara</Text> :
              this.state.hasCameraPermission === false ?
              <Text>El permiso de Camara no fue permitido</Text> :
              <BarCodeScanner
              torchMode="on"
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: Dimensions.get('window').height,
              width: Dimensions.get('window').width }}
              />
          }
          </View>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});

