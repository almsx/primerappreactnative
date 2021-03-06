import React, { Component } from 'react';
import {View, Alert, StatusBar} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class Home extends Component {    

    static navigationOptions = {
        title: 'Bienvenido'
    };

    logoutFirebase () {
        firebase.auth().signOut();
    }

    codigosQR () {

        const navigateAction = NavigationActions.navigate({
            routeName: 'ViewQRCode'
        });
        this.props.navigation.dispatch(navigateAction);

    }

    codigosBarras () {

        const navigateAction = NavigationActions.navigate({
            routeName: 'ViewBarCode'
        });
        this.props.navigation.dispatch(navigateAction);

    }

    geolocation () {

        const navigateAction = NavigationActions.navigate({
            routeName: 'Geolocation'
        });
        this.props.navigation.dispatch(navigateAction);

    }

    
    logout () {

        Alert.alert(
            'POC Drive',
            '¿Deseas Cerrar Sesión?',
            [
                
                {text: 'Cancelar', onPress: () => console.log('Cancel Pressed')},
                {text: 'Aceptar', onPress: () =>  this.logoutFirebase() }
            ]
        );

    }

    render () {
        return (
            <BackgroundImage source={require('../../assets/imagen2.jpg')}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <AppButton
                        bgColor="rgba(200, 200, 50, 0.9)"
                        title="Códigos QR"
                        action={this.codigosQR.bind(this)}
                        iconName="qrcode"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <AppButton
                        bgColor="rgba(67, 67, 146, 0.9)"
                        title="Códigos de Barras"
                        action={this.codigosBarras.bind(this)}
                        iconName="barcode"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <AppButton
                        bgColor="rgba(32, 95, 120, 0.9)"
                        title="Geolocalización"
                        action={this.geolocation.bind(this)}
                        iconName="map-marker"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <AppButton
                        bgColor="rgba(111, 38, 74, 0.9)"
                        title="Cerrar Sesión"
                        action={this.logout.bind(this)}
                        iconName="sign-out"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <StatusBar backgroundColor="blue" barStyle="light-content" />
                </View>
            </BackgroundImage>
        );
    }
}