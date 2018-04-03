import React from 'react';
import {StackNavigator} from "react-navigation";
import Home from "../screens/Home";
import ViewQRCode from "../screens/ViewQRCode";
import ViewBarCode from "../screens/ViewBarCode";
import Geolocation from "../screens/Geolocation";

export default StackNavigator(
	{
		Home: {
			screen: Home
		}, 
		ViewQRCode: {
			screen: ViewQRCode
		},
		ViewBarCode: {
			screen: ViewBarCode
		},
		Geolocation: {
			screen: Geolocation
		}
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#003366'
			},
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontSize: 20,
				color: '#FFF',
				fontWeight: 'bold'
			}
		}
	}
)