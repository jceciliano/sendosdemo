import React, { Component, setState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  Alert,
  ActivityIndicator,
  Platform,
  Modal,
  KeyboardAvoidingView,
  Dimensions,
  
} from "react-native";

import { Ionicons } from '@expo/vector-icons';

import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OctopusLoading from '../components/OctopusLoading'

const screenHeight = Dimensions.get('window').height;



export default class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			fdMail: '',
			fdContrasena: '',
			loadingBtn1: false, 
			loadingScreen: false,
			animationLottie: false,
			isPasswordVisible:false,
			
		};
	} 
	componentDidMount() {
		const { navigation } = this.props;
		this.onLoad();
		this._unsubscribe = navigation.addListener('focus', () => {
		  // do something
		  this.onLoad()
		});
	}
	componentWillUnmount() {
		
		
	}
	onLoad = async () => {
		
		
	}	
	
	handleChange=(vVariable, newValue)=>{
		this.setState({
			[vVariable]: newValue,
		})
  	}
	handleChangeMail=(vVariable, newValue)=>{
  		this.setState({
	  		[vVariable]: newValue.toLowerCase(),
  		})
	}
	
	fIniciarSesion = async ()=>{
		try {
			const dataState = {...this.state}
			const fdMail = dataState.fdMail;
			const fdContrasena = dataState.fdContrasena;

			if (fdMail===""){
				Alert.alert(global.appAlertTitulo,"Debes agregar el correo electrónico.")
				return;
			}


			if (fdContrasena===""){
				Alert.alert(global.appAlertTitulo,"Debes agregar la contraseña.")
				return;
			}
			
			this.props.navigation.navigate( 'TuSendero')
		  
		} catch (error) {
		  //console.log(error);
		  Alert.alert(error.message)
		} 
	}	
	fIniciarSesionLinkedin =()=>{
		try {
		  //Alert.alert("fIniciarSesion")
		  this.props.navigation.navigate( 'TuSendero')
		  
		} catch (error) {
		  //console.log(error);
		} 
	}	
	fRegistrarse =()=>{
		try {
		  //Alert.alert("fIniciarSesion")
		  
		} catch (error) {
		  //console.log(error);
		} 
	}	
	
	fRecuperarContrasena =()=>{
		try {
		  //Alert.alert("fIniciarSesion")
		 
		} catch (error) {
		  //console.log(error);
		} 
	}	

	fMostartContrasena = () => {
		try {
			const dataState = {...this.state}
			bValue=dataState.isPasswordVisible;
			this.setState({
				isPasswordVisible:!bValue
			});


		} catch (error) {
		  //console.log(error);
		} 
	}

	render() {
		const {
			fdMail,
		  	fdContrasena,
		  	loadingBtn1,
		  	loadingScreen,
		  	animationLottie,
		  	isPasswordVisible,
		} = this.state;
		if (!loadingScreen){
			return (
				<ImageBackground source={require("../assets/images/fondo.png")} style={[styles.stlContainer]}>
					<KeyboardAvoidingView style={{  flex: 1  , height:screenHeight - 0 }}
							behavior={Platform.OS === 'ios' ? 'padding' : 'absolute'}
							enabled
						>
						<ScrollView contentContainerStyle={styles.stlScrollContainer} keyboardShouldPersistTaps='handled'>

							<View style={[styles.stlContainer1]}>
								<Image
									source={require("../assets/images/logo1.png")}
									resizeMode="contain"
									style={{width: 150,height: 44}}
								></Image>	
							</View>	
							<View style={[styles.stlContainer2]}>
								<View style={{ backgroundColor:'transparent', width:'100%', height:50}}></View> 
								<View style={{ backgroundColor:'tranparent', width:'90%'}}>
									
									<View style={{ backgroundColor:'tranparent', width:'100%'}}>
										<Text style={{fontSize: 28,fontWeight:"bold",paddingBottom:2}}>Ingresa</Text>
									</View>
									<View style={{ backgroundColor:'tranparent', width:'100%', height:20}}></View>
									
									<View style={{width:"100%", backgroundColor:"tranparent" }}>
										<TextInput
										label={<Text style={{fontSize: 16}}>
											<Text style={{color: 'red'}}>* </Text>
											<Text >Correo electrónico</Text>
										</Text>}
										theme={{ colors: {placeholder: '#adadad', primary: '#28425A' } }}
										keyboardType="email-address"
										value={fdMail}
										clearButtonMode="always"
										onChangeText={(data) => {
											this.handleChangeMail("fdMail",data);
										}}
										/>
									</View>
									<View style={{ backgroundColor:'tranparent', width:'100%', height:20}}></View> 
									<View style={{width:"100%", backgroundColor:"tranparent" }}>
										
										<TextInput
										label={<Text style={{fontSize: 16}}>
											<Text style={{color: 'red'}}>* </Text>
											<Text >Contraseña</Text>
										</Text>}
										theme={{ colors: {placeholder: '#adadad', primary: '#28425A' } }}
										style={{ flex: 1,paddingRight: 30, }}
										secureTextEntry={!isPasswordVisible}
										value={fdContrasena}
										clearButtonMode="always"
										onChangeText={(data) => {
											this.handleChange("fdContrasena",data);
										}}
										/> 
										<TouchableOpacity style={{ position: 'absolute', right: 10, height: '100%', justifyContent: 'center',}}>
											<Ionicons
											name={isPasswordVisible ? 'eye-off' : 'eye'}
											size={24}
											color="grey"
											onPress={()=> this.fMostartContrasena() }
											/>
										</TouchableOpacity>

									</View>
									
									<View style={{ backgroundColor:'tranparent', width:'100%', height:20}}></View> 

									<View style={{width:"100%", backgroundColor:"tranparent" }}>
										<TouchableOpacity onPress={()=> this.fRecuperarContrasena() }  >
											<Text style={{fontSize: 16,paddingBottom:5, width:'100%', textAlign:'right', fontWeight:"bold", color:'#7b7171'}}>Olvide mi contraseña?</Text>
										</TouchableOpacity>
									</View>  
									
									
									<View style={{ backgroundColor:'tranparent', width:'100%', height:30}}></View> 
									
									<View style={{width:"100%", backgroundColor:"tranparent" }}>
										<Button labelStyle={{color: "#fff", fontSize:16}} style={{ width: '100%', backgroundColor:'#556bac'}}
											loading={loadingBtn1} disabled={loadingBtn1} mode="contained"  uppercase="false" onPress={()=> this.fIniciarSesion() } > 
											Iniciar sesión
										</Button>
									</View>  
									
									<View style={{ backgroundColor:'tranparent', width:'100%', height:30}}></View> 
									
									<View style={{width:"100%", backgroundColor:"tranparent" }}>
										<Text style={{fontSize: 16,paddingBottom:5, color:'#757482', width:'100%', textAlign:'center',}}>O continua con</Text>
										<View style={{width:"100%", backgroundColor:"tranparent", textAlign:'center', alignItems: 'center', paddingTop:5 }}>
											<TouchableOpacity onPress={()=> this.fIniciarSesionLinkedin() }  >
												<Image
													source={require("../assets/images/linkedinIcon.png")}
													resizeMode="contain"
													style={{width: 40,height: 40}}
												></Image>
											</TouchableOpacity>
										</View>
									</View>  
									
									
									
									
									
								</View>
							</View>
							<View style={[styles.stlContainer3]}>
								<View style={{width:"100%", backgroundColor:"tranparent" }}>
									<Text style={{fontSize: 16,paddingBottom:5, color:'#757482', width:'100%', textAlign:'center',}}>¿No tienes una cuenta?</Text>
									<TouchableOpacity onPress={()=> this.fRegistrarse() }  >
										<Text style={{fontSize: 16,paddingBottom:5, width:'100%', textAlign:'center', fontWeight:"bold",textDecorationLine: 'underline',}}>Crear cuenta</Text>
									</TouchableOpacity>
								</View>  	
							</View>	


						</ScrollView>	
					</KeyboardAvoidingView>
						
					
				</ImageBackground>
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
	stlContainer: {
		flex: 1,
		resizeMode: 'cover',
		
  	},
	stlContainer1: {
		flex: 2,
		backgroundColor: 'tranparent',
		alignItems: 'center',
		justifyContent: 'center',
		height:140,
		paddingTop:30
		
  	},
	  stlContainer2: {
		flex: 1,
		backgroundColor: 'tranparent',
		alignItems: 'center'
		
  	},
	  stlContainer3: {
		flex: 3,
		backgroundColor: 'tranparent',
		alignItems: 'center',
		justifyContent: 'center',
		height:140,
		paddingTop:30
		
  	},
	stlScrollContainer: {
		flexGrow: 1,
	},
});
		