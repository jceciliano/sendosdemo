import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import WelcomeScreen from '../pages/Welcome'
import LoginScreen from '../pages/Login'
import TuSenderoScreen from '../pages/TuSendero'
import ElijeSenderoScreen from '../pages/ElijeSendero'



const Stack = createNativeStackNavigator();



const AuthStack = () => {
  return (
	<Stack.Navigator screenOptions={{headerShown: false}}>
		<Stack.Screen name="Welcome" component={WelcomeScreen} 
			options={({navigation}) => ({
				gestureEnabled: false
			})} 
		/>
		<Stack.Screen name="Login" component={LoginScreen} 
			options={({navigation}) => ({
				gestureEnabled: false
			})} 
		/>
		<Stack.Screen name="TuSendero" component={TuSenderoScreen} 
			options={({navigation}) => ({
				gestureEnabled: false
			})} 
		/>
		<Stack.Screen name="ElijeSendero" component={ElijeSenderoScreen} 
			options={({navigation}) => ({
				gestureEnabled: false
			})} 
		/>
		
		
	</Stack.Navigator>
  );
};

export default AuthStack;