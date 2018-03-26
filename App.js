import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
import Preloader from './application/components/PreLoader';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          { /* Asi se agregan comentarios */ }
          
          { /* Comentar App Button */ }
          <AppButton
            bgColor="#003366"
            title="Testing"
            action={() => console.log("Presionaste "+1)}
            iconName="sign-in"
            iconSize={30}
            iconColor="#FFF"
          />
          { /* <Preloader/> */ }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
