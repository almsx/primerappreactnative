import React, { Component } from 'react';
import {View, Alert, Text} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class ViewQRCode extends Component {    

    static navigationOptions = {
        title: 'Lector de QR'
    };

    render () {
        return (
            <BackgroundImage source={require('../../assets/imagen2.jpg')}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text>Lector de QR</Text>
                </View>
            </BackgroundImage>
        );
    }
}