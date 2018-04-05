import React, { Component } from 'react';
import {View, Alert, Text, StyleSheet, Dimensions, Platform} from 'react-native';
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
        mapRegion: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
    };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
};

render() {
    return (
      <View style={styles.container}>
      <MapView
      style={{ alignSelf: 'stretch', height: Dimensions.get('window').height,
      width: Dimensions.get('window').width }}
      region={this.state.mapRegion}
      onRegionChange={this._handleMapRegionChange}
      />
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
});
