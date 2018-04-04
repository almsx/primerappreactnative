import React, { Component } from 'react';
import {View, StatusBar} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
//import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import facebook from '../utils/facebook';

export default class Start extends Component {    

    static navigationOptions = {
        title: 'Inicio'
    };
    
    login () {

        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);

    }

    register () {

        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });
        this.props.navigation.dispatch(navigateAction);

    }

    async facebook () {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
            facebook.config.application_id,
            { permissions: facebook.config.permissions }
        );

        if(type === "success") {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInWithCredential(credentials)
                .catch(error => {
                    //Toast.showWithGravity('Error accediendo con facebook', Toast.LONG, Toast.BOTTOM);
                    console.log('error accediendo con facebook');
                })
        } else if(type === "cancel") {
            //Toast.showWithGravity('Inicio de sesón cancelado', Toast.LONG, Toast.BOTTOM);
            console.log('Inicio de sesion cancelado');
        } else {
            //Toast.showWithGravity('Error desconocido', Toast.LONG, Toast.BOTTOM);
            console.log('error desconocido');
        }
    }

    
    
    render () {
        return (
            <BackgroundImage source={require('../../assets/imagen2.jpg')}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <AppButton
                        bgColor="rgba(111, 38, 74, 0.9)"
                        title="Iniciar Sesión"
                        action={this.login.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <AppButton
                        bgColor="rgba(200, 200, 50, 0.9)"
                        title="Registrarme"
                        action={this.register.bind(this)}
                        iconName="user-plus"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <AppButton
                        bgColor="rgba(67, 67, 146, 0.9)"
                        title="Facebook"
                        action={this.facebook.bind(this)}
                        iconName="facebook"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <StatusBar backgroundColor="blue" barStyle="light-content" />
                </View>
            </BackgroundImage>
        );
    }
}