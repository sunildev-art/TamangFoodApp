import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import global from '../global';
import { ScaledSheet } from 'react-native-size-matters';


const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
           navigation.navigate("Welcome")
        }, 1200);
       }, [])

  return (
    <View style={styles.container}>
      <Image source={global.ASSETS.LOGO} style={styles.imgStyle}/>
      <Text style={styles.TextStyle}>Tamang</Text>
      <Text style={styles.TextStyle1}>FoodService</Text>
    </View>
  )
}
const styles = ScaledSheet.create({

    container:{
      justifyContent:"center",
      alignItems:"center",
     flex:1
    },
    imgStyle:{
      height:"150@s",
      width:"150@s",
      resizeMode:"contain"
       
       
    },
    TextStyle:{
        fontSize:'30@s',
        fontWeight:"700",
        letterSpacing:1,
        color:"black",
        textAlign:'center'
    },
    TextStyle1:{
      fontSize:'30@s',
      fontWeight:"700",
      letterSpacing:1,
      color:"black",
     
  },
})
export default Splash

