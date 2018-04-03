import React from 'react';
import Preloader from './application/components/PreLoader';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
import {Text} from "react-native-elements";

import GuestNavigation from './application/navigations/guest';

export default class App extends React.Component {
	constructor() {
	  	super();
		this.state = {
			isLogged: false,
			loaded: false
		}
	}

	async componentDidMount () {
		await firebase.auth().onAuthStateChanged((user) => {
			if(user !== null) {
				this.setState({
					isLogged: true,
					loaded: true
				});
			} else {
				this.setState({
					isLogged: false,
					loaded: true
				});
			}
		});
		
		//Logout
		//firebase.auth().signOut();
	}

  	render() {
    	const {isLogged, loaded} = this.state;

    	if (! loaded){
    		return (<Preloader/>);
    	}

    	if(isLogged) {
    		return (<Text>Logueado</Text>);
    	} else {
    		return (<GuestNavigation/>);
    	}


    }
}