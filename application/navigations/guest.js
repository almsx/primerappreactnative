import React from 'react';
import {StackNavigator} from "react-navigation";
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import Home from "../screens/Home";
import ViewQRCode from "../screens/ViewQRCode";

export default StackNavigator(
	{
		Start: {
			screen: StartScreen
		},
		Login: {
			screen: LoginScreen
		},
		Register: {
			screen: RegisterScreen
		},
		Home: {
			screen: Home
		}, 
		ViewQRCode: {
			screen: ViewQRCode
		}
	},
	{
		initialRouteName: 'Start',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#003366'
			},
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontSize: 20,
				color: '#000',
				fontWeight: 'bold'
			}
		}
	}
)