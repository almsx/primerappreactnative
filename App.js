import React from 'react';
import { Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
import Preloader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage';
import Start from './application/screens/Start';

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage source={require('./assets/imagen.jpg')}>
        <Start></Start>
      </BackgroundImage>
    );
  }
}