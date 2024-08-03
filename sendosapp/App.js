import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DemoStack from './navegacion/DemoStack';

global.appVersionLabel="1.0.0";
global.appAlertTitulo="SENDOS";
global.gbl_objDataCliente=[];


function App() {
  return (
    <NavigationContainer>
      <DemoStack />
    </NavigationContainer>
  ); 
}

export default App;