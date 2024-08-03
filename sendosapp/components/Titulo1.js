import React, { useState, useEffect,useRef } from 'react';
import {
  View,
  Text,
} from "react-native";


const Titulo1 =  ({nombre,subtitilo,puesto}) => {
	
	const [vNombre, setNombre] = useState(nombre);
	const [vSubtitilo, setSubtitilo] = useState(subtitilo);
	const [vPuesto, setPuesto] = useState(puesto);
	
	
	return( 
		<>
			<View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',}}>
                <View>
                    <Text style={{fontSize: 16, alignItems: 'center', fontWeight: 'bold',}}>Hola, {vNombre}</Text>
                    <Text style={{fontSize: 16, color: '#aaa',}}>{vSubtitilo}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 16,fontWeight: 'bold', color: '#556bac', textAlign: 'right'}}>{vNombre}</Text>
                    <Text style={{fontSize: 16,color: '#aaa', textAlign: 'right'}}>vPuesto</Text>
                </View>
            </View>
		</>
	 );
};	
export default Titulo1;	