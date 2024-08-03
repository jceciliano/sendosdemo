import React, { useState, useEffect,useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,

} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const Titulo2 =  ({nombre,subtitilo}) => {
	
	const [vNombre, setNombre] = useState(nombre);
	const [vSubtitilo, setSubtitilo] = useState(subtitilo);
	
	
	
	return( 
		<>
			<View style={{width:"100%", backgroundColor:'transparent', justifyContent: 'flex-start',  alignItems: 'center' , }}>
                <View style={{width:320,height:54, backgroundColor:'tranparent', alignItems: 'flex-start', paddingTop: 0, marginTop: 0, position: 'relative', }}>
                    <ImageBackground
                        source={require("../assets/images/camino1.png")}
                        resizeMode="contain"
                        style={{ width: 320, height:54  }}
                    ></ImageBackground>
                    <Text style={{ fontSize: 14, alignItems: 'right', fontWeight: 'bold', color:"#556bac", position:'absolute', right: 50, top: 5}}>Lider de tienda</Text>
                </View>
                <View style={{width:320,height:66, backgroundColor:'tranparent', alignItems: 'flex-start', paddingTop: 0, marginTop: 0, position: 'relative', }}>
                    <ImageBackground
                        source={require("../assets/images/camino2.png")}
                        resizeMode="contain"
                        style={{ width: 320, height:66  }}
                    ></ImageBackground>
                    <Text style={{ fontSize: 14, alignItems: 'left', color:"#aaa", position:'absolute', right: 30, top: 18}}>Administrador de personal</Text>
                </View>
                <View style={{width:320,height:55, backgroundColor:'tranparent', alignItems: 'flex-start', paddingTop: 0, marginTop: 0, position: 'relative', }}>
                    <ImageBackground
                        source={require("../assets/images/camino3.png")}
                        resizeMode="contain"
                        style={{ width: 320, height:55  }}
                    ></ImageBackground>
                    <Text style={{ fontSize: 14, alignItems: 'left', color:"#aaa", position:'absolute', right: 0, top: 20}}>Encargado de turno</Text>
                </View>
                <View style={{width:320,height:88, backgroundColor:'tranparent', alignItems: 'flex-start', paddingTop: 0, marginTop: 0, position: 'relative', }}>
                    <ImageBackground
                        source={require("../assets/images/camino4.png")}
                        resizeMode="contain"
                        style={{ width: 320, height:88  }}
                    ></ImageBackground>
                    <Text style={{ fontSize: 14, alignItems: 'left', color:"#aaa", position:'absolute', left: 120, top: 30}}>Lider de tienda</Text>
                </View>
                <View style={{width:320,height:103, backgroundColor:'tranparent', alignItems: 'flex-start', paddingTop: 0, marginTop: 0, position: 'relative', }}>
                    <ImageBackground
                        source={require("../assets/images/camino5.png")}
                        resizeMode="contain"
                        style={{ width: 320, height:103  }}
                    ></ImageBackground>

                    <View style={{position:'absolute', width:200, right:0, backgroundColor: '#F8F8F8',borderRadius: 8,padding: 16,margin: 16,shadowColor: '#000', shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.1,shadowRadius: 4, elevation: 3,}}>
                        <View style={{flexDirection: 'row',alignItems: 'center',}}>
                            <MaterialIcons name="check-circle" size={24} color="green" />
                            <Text style={{marginLeft: 8,fontSize: 16,fontWeight: 'bold',color: '#3F51B5',}}>Ayudante / Cajero</Text>
                        </View>
                        <Text style={{marginTop: 8,fontSize: 14, color: '#777',}}>Experiencia: <Text style={{fontWeight:'bold'}}>6 meses</Text></Text>
                        <Text style={{marginTop: 4,fontSize: 14,color: '#777',}}>Skills: <Text style={{fontWeight:'bold'}}>9 validadas</Text></Text>
                    </View>

                </View>
            </View>
		</>
	 );
};	
export default Titulo2;	