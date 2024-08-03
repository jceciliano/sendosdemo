import React, { Component, setState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
  
} from "react-native";


import {  Button } from 'react-native-paper';
export default class App extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	componentWillUnmount() {
		
	}
	onLoad = async () => {
	}	
	fContinuar = () => {
		try {
		  //Alert.alert("fContinuar")
		  this.props.navigation.navigate( 'Login')
		} catch (error) {
		  //console.log(error);
		} 
	}
	
	render() {
		return (
			<>
				<View style={[styles.stlContainer]}>
					<View style={[styles.stlBoxTextInto]}>
						
						<Image
							source={require("../assets/images/logo1.png")}
							resizeMode="contain"
							style={{width: 216,height: 63}}
						></Image>
						<View style={{ backgroundColor:'transparent', width:'100%', height:20}}></View> 

						<Text style={[styles.stlLabelTitulo]}>Bienvenid@</Text>
						<Text style={[styles.stlLabelSubTitulo]}>Las reglas del juego del talento han cambiado</Text>
					</View>
					
				</View>
				<View style={[styles.stlContainer2]}>
					<View style={[styles.stlBoxBtn]}>
						<Button labelStyle={{color: "#fff", fontSize:16}} style={{ width: '100%', backgroundColor:'#556bac'}}
							mode="contained"  uppercase="false"  onPress={()=> this.fContinuar() } > 
							Continuar
						</Button> 
					</View>
					
				</View>
			</>
		)
	}	
}	

const styles = StyleSheet.create({
	stlContainer: {
		flex: 2,
		justifyContent: 'center',
		backgroundColor:'#fff',
		alignItems: 'center',
		
  	},
  	stlContainer2: {
	 	flex: 1,
	 	backgroundColor:'#fff',
	 	justifyContent: 'center',
	 	alignItems: 'center',
	 	
  	},
  	stlBoxTextInto:{
  		width:'60%',
  		backgroundColor:'transparent'
  	},
  	stlLabelTitulo:{
		width:'100%',
		textAlign:'center',
		fontSize: 25,
		color:'#00000',
		paddingBottom:10,
		fontWeight:"bold",
  	},
  	stlLabelSubTitulo:{
		width:'100%',
		textAlign:'center',
		fontSize: 20,
		color:'#00000',
  	},
	stlBoxBtn:{
		width:'80%',
		backgroundColor:'transparent'
	},	
});
	
		