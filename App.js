import React from 'react';
import Preloader from './application/components/PreLoader';

import GuestNavigation from './application/navigations/guest';

export default class App extends React.Component {
  render() {
    return (
      <GuestNavigation/>
    );
  }
}