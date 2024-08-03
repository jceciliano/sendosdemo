import React, { Component, setState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  Platform,
  Modal,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

import { Button, TextInput } from 'react-native-paper';
import {Picker} from 'react-native-ui-lib';
import Titulo1 from '../components/Titulo1'

const objPuestoTipo = [
	{
		id:1,
		nombre:'Ayudante / Cajero'
	},
	{
		id:2,
		nombre:'Encargado de Turno'
	},
	{
		id:3,
		nombre:'Administrador de Personal'
	},
	{
		id:4,
		nombre:'Lider de Tienda'
	},
	{
		id:5,
		nombre:'Asesor de Tienda'
	},
	
];

import OctopusLoading from '../components/OctopusLoading'
import Icon from 'react-native-vector-icons/FontAwesome';
const screenHeight = Dimensions.get('window').height;


export default class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			fdPuesto:0,
			loadingBtn1: false,
			loadingScreen: false,
			animationLottie: false,
		};
	}
	componentDidMount() {
	}
	componentWillUnmount() {
		
		this.onLoad();
	}
	onLoad = async () => {
		
	}	
	
	handleChange=(vVariable, newValue)=>{
		this.setState({
			[vVariable]: newValue,
		})
	  }
	
	fRegresarLogin =()=>{
		try {
		  //Alert.alert("fIniciarSesion")
		  this.props.navigation.navigate('Login')
		} catch (error) {
		  //console.log(error); 
		} 
	}	
	fPickerPuestoTipo = (itemSel) => {
		try {
		  	console.log("itemSel=",itemSel)
			const objPuestoItem = objPuestoTipo.filter((item) => item.id === itemSel);
			console.log("Picker.Item objPuestoItem",objPuestoItem);
			this.setState({
				fdPuesto: objPuestoItem[0].id
			})
		} catch (error) {
		  //console.log(error);
		  Alert.alert(global.appAlertTitulo, error.message);
		} 
	}	
	fCrearBrecha = () => {
		try {
			this.props.navigation.navigate('ElijeSendero')
		} catch (error) {
		  //console.log(error);
		  Alert.alert(global.appAlertTitulo, error.message);
		} 
	}	

	
	
	render() {
		const {
			fdPuesto,
		  	loadingScreen,
		  	animationLottie,
		} = this.state;
		if (!loadingScreen){
			return (
				<>
				
					<View style={styles.container}>	
						<View style={{backgroundColor:'#fff', height:100}}>
							<View style={{ backgroundColor:'transparent', width:'100%', height:15}}></View> 
							<View style={styles.header}>
									<TouchableOpacity onPress={()=> this.fRegresarLogin() }  >
										<Icon name="arrow-left" size={24} color="#000" style={styles.backIcon} />
									</TouchableOpacity>
									<Text style={styles.headerTitle}>Elige tu sendero</Text>
									<Icon name="ellipsis-v" size={24} color="#000" style={styles.menuIcon} />
								</View>
							</View>
						<KeyboardAvoidingView style={{ backgroundColor:'#fff', flex: 1  , height:screenHeight - 0 }}
								behavior={Platform.OS === 'ios' ? 'padding' : 'absolute'}
								enabled
							>
							<ScrollView contentContainerStyle={styles.stlScrollContainer}>
								<View style={{ backgroundColor:'transparent', width:'100%', flex:1,alignItems: 'center'}}>
									<View style={{ backgroundColor:'transparent', width:'90%'}}>
										<View style={{ backgroundColor:'transparent', width:'100%', height:10}}></View> 
										{/* titulo */}
										<Titulo1 nombre="Jorge" subtitilo="Vas a llegar lejos" puesto="Asistente de tienda"/>

										<View style={{ backgroundColor:'transparent', width:'100%', height:10}}></View> 
										{/* Buscar puesto */}
										
										<View style={{width:"100%", height:60, position: 'relative', }}>
											<Picker
												placeholder="Buscar el puesto deseado"
												value={fdPuesto}
												enableModalBlur={false}
												onPress = { ()=>{
													
												}}
												onChange={item => this.fPickerPuestoTipo(item)}
												topBarProps={{useSafeArea: true, title: 'Puesto deseado', }}
												style={{ fontSize: 16, paddingLeft:15,  paddingTop:15, paddingBottom:15  }}
												containerStyle= {{backgroundColor: 'transparent', borderWidth: 2, borderColor:"#eee", borderRadius: 20,}}
												migrateTextField
												marginT-0
												useSafeAreaa={true}
												
											>
											
											{objPuestoTipo.map((item,i) =>  
												<Picker.Item 
													key={item.id} 
													value={item.id} 
													label={`${item.nombre}`}  
													renderItem={(itemValue, props) => {
													//console.log("Picker.Item itemValue",itemValue)
													const objItem = objPuestoTipo.filter((item) => item.id === itemValue)
													//console.log("Picker.Item objItem",objItem)
													
														return (
															<View style={{width:"100%",  backgroundColor:"transparent" , marginBottom:5 }}>
															<Text style={{ color: '#000' , width:"100%", fontSize:18, fontWeight:'bold', paddingTop:10, paddingBottom:5, paddingLeft:10, paddingRight:10}}>
																{objItem[0].nombre}
															</Text>
															</View>
														);
													}}  
													/>
												)}
											</Picker>
											<Image
												source={require('../assets/images/searchIcon.png')}
												style={{position: 'absolute', top: 20, right: 20, width: 24, height: 24,}}
											/>
										</View>
										<View style={{ backgroundColor:'transparent', width:'100%', height: 30}}></View>

										<View style={{width:"100%",  justifyContent: 'center', alignItems: 'center',}}>
											<Image
												source={require("../assets/images/brecha1.png")}
												resizeMode="contain"
												style={{width: 250,height: 250}}
											></Image>
										</View>

										<View style={{ backgroundColor:'transparent', width:'100%', height: 30}}></View>
											
										<View style={{width:"100%", backgroundColor:"tranparent" }}>
											<Button labelStyle={{color: "#fff", fontSize:16}} style={{ width: '100%', backgroundColor:'#556bac'}}
												mode="contained"  uppercase="false" onPress={()=> this.fCrearBrecha() } > 
										  		Crear brecha
									  		</Button>
										</View>  

									</View>
								</View>
							</ScrollView>	
						</KeyboardAvoidingView>
						
						
					
				</View>
				</>
			)
		}else{
			return  (
			<>
			<OctopusLoading 
			value = {animationLottie} 
			/>
			</>
			);
		}
	}	
}	
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	},
	header: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  marginTop: 20,
	  marginBottom: 20,
	},
	backIcon: {
	  padding: 10,
	},
	headerTitle: {
	  fontSize: 18,
	  color: '#000',
	  flex: 1,
	  textAlign: 'left',
	  paddingLeft: 5, 
	  fontWeight:"bold"
	},
	menuIcon: {
	  padding: 10,
	},
	
	
	searchContainer: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  marginBottom: 20,
	  borderColor: '#ddd',
	  borderWidth: 1,
	  borderRadius: 5,
	  paddingHorizontal: 10,
	},
	searchInput: {
	  flex: 1,
	  padding: 10,
	},
	searchIcon: {
	  marginLeft: 10,
	},
	imageContainer: {
	  alignItems: 'center',
	  marginBottom: 20,
	},
	image: {
	  width: 200,
	  height: 200,
	},
	button: {
	  backgroundColor: '#5267D8',
	  paddingVertical: 15,
	  borderRadius: 5,
	  alignItems: 'center',
	},
	buttonText: {
	  color: '#fff',
	  fontSize: 16,
	},
  });
		