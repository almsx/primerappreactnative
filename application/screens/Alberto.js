import React, { Component } from 'react';
import {View, Alert, Text, StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import { Constants, MapView, Location, Permissions} from 'expo';

export default class Geolocation extends Component {

    static navigationOptions = {
        title: 'Geolocalización'
    };

    state = {
        location: {coords: { latitude: 19.363900, longitude: -99.202020}},
        //location: null,
        errorMessage: null,
        mapRegion: {
            latitude: 19.363900,
            longitude: -99.202020,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
    };    

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Solo funciona en tu dispositivo :)',
        });
      } else {
          this._getLocationAsync();
      }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permiso de Acceso ha sido denegado.',
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  this.setState({ location });
};

render() {

    let text = 'Espere por favor..';
    
    if (this.state.errorMessage) {
        text = this.state.errorMessage;
    } else if (this.state.location) {

        let p_latitude = JSON.stringify(this.state.location.coords.latitude);
        let p_longitude =JSON.stringify(this.state.location.coords.longitude);
        

        this.setState({
            //location: null,
            errorMessage: null,
            mapRegion: {
                latitude: parseFloat(p_latitude),
                longitude: parseFloat(p_longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            location: {
                coords: {
                    latitude: parseFloat(p_latitude),
                    longitude: parseFloat(p_longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }
            }
        });


    }

    return (
        <View style={styles.container}>
    { /* <Text style={styles.paragraph}>{text}</Text> */ }

    <MapView
    style =  {{ alignSelf: 'stretch', height: Dimensions.get('window').height,
    width: Dimensions.get('window').width 
}}
region = {this.state.mapRegion}
onRegionChange={this._handleMapRegionChange}
>
<MapView.Marker
coordinate={this.state.location.coords}
title="Ubicación Actual"
description="DriveMX"
image={require('../../assets/geo.png')}
/>
</MapView>
<StatusBar backgroundColor="blue" barStyle="light-content" />
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
        textAlign: 'center',
    }
});