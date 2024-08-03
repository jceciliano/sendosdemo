import React, { useState, useEffect,useRef } from 'react';
import {
  View,
  Text,

} from "react-native";

const Titulo2 =  ({nombre,subtitilo}) => {
	
	const [vNombre, setNombre] = useState(nombre);
	const [vSubtitilo, setSubtitilo] = useState(subtitilo);
	
	
	
	return( 
		<>
			<View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',}}>
                <View>
                    <Text style={{ fontSize: 16, alignItems: 'center', fontWeight: 'bold',}}>Hola, {vNombre}</Text>
                    <Text style={{ fontSize: 16, color: '#aaa',}}>{vSubtitilo}</Text>
                </View>
                
            </View>
		</>
	 );
};	
export default Titulo2;	