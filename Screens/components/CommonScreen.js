import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React,{useState} from 'react';
import global from '../../global';
import { ScaledSheet } from 'react-native-size-matters';
import Swiper from 'react-native-swiper'


const CommonScreen = (props) => {
  return (
    <View>
       <View style={{flexDirection:"row",
            alignItems:"center",
            marginHorizontal:18,
            marginBottom:16,
            marginTop:10,
            marginTop:10
            }}>
                <Image source={props.imageprop} style={styles.Cookie_Sandwich_Image_Style}/>
                <View style={{marginHorizontal:18,bottom:8}}>
                    <Text style={{fontSize:21,color:"#010F07",fontWeight:"300",marginBottom:10}}>{props.Title}</Text>
                    <Text style={{fontSize:17,
                    color:"#868686",
                    fontWeight:"400",
                    marginBottom:15}}>Shortbrea,chocolate turtle {'\n'} cookies,and red velvet.</Text>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",top:3}}>
                        <Text style={{color:"#868686",fontSize:14,fontWeight:"400",left:5}}>{props.Doller}</Text>
                        <Image source={props.imageprop1} style={{
                            width:4,
                            height:4,
                            right:17
                        }}/>
                        <Text style={{color:"#868686",fontSize:14,fontWeight:"400",opacity:40,right:33}}>{props.Chinese}</Text>
                        <Text style={{color:"#EEA734",fontSize:14,fontWeight:"400",opacity:40,right:10}}>{props.Aud}</Text>
                    </View>
                </View>
            </View>
    </View>
  )
}

export default CommonScreen

const styles = ScaledSheet.create({
    Cookie_Sandwich_Image_Style:{
        height:"110@s",
        width:"110@s",
        resizeMode:"contain",
        // borderRadius:"8@s"
    }
})