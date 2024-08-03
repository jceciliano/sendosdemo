//import { useState, useEffect } from "react";
import React, { useState, useEffect,useRef } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { Button } from 'react-native-paper';



const OctopusLoading =  ({value}) => {
	
	const objParams = useRef(value);
	const [animPlay, setAnimPlay] = useState(value);
	const animationLottie = useRef(null);
	
	//alert("1 OctopusLoading value= " + value + " animPlay="+animPlay);
	
  	useEffect(() => {
		//alert("2 useEffect value= " + value + " | animPlay= "+animPlay);
		fLoading(value);
	}, [value]);
	  
	const fLoading = (value) => {
		//alert("3 fLoading= " + value);
		setAnimPlay(value);
		if (value){
			//animationLottie.current?.play()
		}else{
			//animationLottie.current?.reset();
		}
	}
	return( 
		<View style={{alignItems: 'center',justifyContent: 'center',flex: 1, backgroundColor:"#FFFFFF"}}>
		 	<>
            	<ActivityIndicator size="large" color="#203569" /> 
            	<Text style={{ width:"100%", fontSize: 15, color:"#000", paddingTop:10, textAlign:'center' }}>Por favor espere unos segundos ...</Text>
            </> 

			{/* 
		 	<Lottie 
			style={{
			  width: 300,
			  height: 300,
			  backgroundColor: '#FFFFFF', 
			}}
			ref={animationLottie}
			//autoPlay={true}
			loop={true}
			speed={1.0}
			source={require('../assets/amin/loading2.json')}  /> 
			*/}
		  
	  </View>
	 );
};	
export default OctopusLoading;	
