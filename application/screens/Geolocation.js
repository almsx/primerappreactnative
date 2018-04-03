import React, { Component } from 'react';
import {View, Alert, Text} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class Geolocation extends Component {    

    static navigationOptions = {
        title: 'Geolocalización'
    };

    render () {
        return (
            <BackgroundImage source={require('../../assets/imagen2.jpg')}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text>Geolocalización</Text>
                </View>
            </BackgroundImage>
        );
    }
}