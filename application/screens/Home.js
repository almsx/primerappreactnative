import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class Home extends Component {    

    static navigationOptions = {
        title: 'Home'
    };

    logoutFirebase () {
        firebase.auth().signOut();
    }

    
    logout () {

        Alert.alert(
            'POC Drive',
            '¿Deseas Cerrar Sesión?',
            [
                {text: 'Aceptar', onPress: () =>  this.logoutFirebase() },
                {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
            ]
        );

    }

    render () {
        return (
            <BackgroundImage source={require('../../assets/imagen2.jpg')}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <AppButton
                        bgColor="rgba(111, 38, 74, 0.7)"
                        title="Cerrar Sesión"
                        action={this.logout.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                </View>
            </BackgroundImage>
        );
    }
}